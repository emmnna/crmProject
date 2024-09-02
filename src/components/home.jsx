import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import Sidebar from './sideBar';
import PieChart from './chart';
import BarChart from './barChart';
import EstimationCard from './estimationCard';
import NavBar from './navBar';
import { getClients } from '../Api';
import { getSimulations } from '../Api';

export default function Home() {
    const [clients, setClients] = useState([]);
    const [simulations, setSimulations] = useState([]);
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const clientsData = await getClients();
                setClients(clientsData); 
            } catch (error) {
                console.error("Erreur lors de la récupération des clients :", error);
            }
        };

        const fetchSimulations = async () => {
            try {
                const simulationsData = await getSimulations();
                setSimulations(simulationsData); 
            } catch (error) {
                console.error("Erreur lors de la récupération des simulations :", error);
            }
        };

        fetchClients();
        fetchSimulations();
    }, []);
    const recentSimulations = simulations.slice(-5).reverse();
    const recentClients = clients.slice(-5).reverse();

    const projectTypes = {};
    simulations.forEach((sim) => {
        if (sim.typeDuBien) {

            projectTypes[sim.typeDuBien] = (projectTypes[sim.typeDuBien] || 0) + 1;
        }
    });

    const pieChartData = {
        labels: Object.keys(projectTypes),
        values: Object.values(projectTypes),
    };

    const projectNumbers = {};
    clients.forEach((cl) => {
        if (cl.simulation_de_credit) {
            projectNumbers[cl.simulation_de_credit] = (projectNumbers[cl.simulation_de_credit] || 0) + 1;
        }
    });

    const barChartData = {
        labels: Object.keys(projectNumbers),
        values: Object.values(projectNumbers),
    };

    const totalCreditAmount = clients.reduce((acc, cl) => acc + cl.montant_du_credit_simule, 0);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <NavBar />
            <div className="flex-1 flex flex-col lg:flex-row p-0 lg:p-6 lg:ml-15">
                <div className="flex-1 lg:w-2/3 lg:pr-6 border-r border-gray-300">
                    <div className="space-y-12">
                        <div className="mb-12">
                            <h1 className="text-3xl font-bold mb-6 text-center underline">Les dernières simulations:</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {recentSimulations.map((sim, index) => (
                                    <Card key={index} title={`${sim.typeDuBien}`} subTitle={`Pays: ${sim.paysDeResidence}`} className="p-shadow-4 rounded-lg p-4 text-sm">
                                        <div>
                                            <p><strong>Valeur:</strong> {sim.valeurDeVotreProjet}</p>
                                            <Link to={`/credit/${sim.id}`} className="text-blue-500 hover:underline mt-2 block">Détails</Link>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12">
                            <h1 className="text-3xl font-bold mb-6 text-center underline">Les clients récents:</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {recentClients.map((cl, index) => (
                                    <Card key={index} title={`${cl.nom}`} subTitle={`Téléphone: ${cl.numero_de_telephone}`} className="p-shadow-4 rounded-lg p-4 text-sm">
                                        <div>
                                            <p><strong>Crédit:</strong> {cl.simulation_de_credit}</p>
                                            <p><strong>Statut :</strong> {cl.statut_du_contact}</p>
                                            <Link to={`/client/${cl.id}`} className="text-blue-500 hover:underline mt-2 block">Détails</Link>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12">
                            <h1 className="text-3xl font-bold mb-6 text-center underline">Nombre des simulations :</h1>
                            <BarChart data={barChartData} />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 lg:pl-6">
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold mb-6 text-center underline">Estimation des crédits :</h1>
                        <EstimationCard
                            title="Total des crédits demandés"
                            value={`${totalCreditAmount} €`}
                            description="Montant total des crédits demandés par les clients."
                        />
                    </div>
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold mb-6 text-center underline">Statistiques de types de bien:</h1>
                        <PieChart data={pieChartData} />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

    );
}
