import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import Sidebar from './sideBar';
import PieChart from './chart';
import BarChart from './barChart';
import EstimationCard from './estimationCard';
import NavBar from './navBar';
import { getClients, getSimulations } from '../Api';


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
        if (sim.revenu) {
            projectTypes[sim.revenu] = (projectTypes[sim.revenu] || 0) + 1;
        }
    });

    const pieChartData = {
        labels: Object.keys(projectTypes),
        values: Object.values(projectTypes),
    };

    const projectNumbers = { "Clients Biat": 0, "Non-Clients Biat": 0 };
    clients.forEach((cl) => {
        if (cl.est_client_biat === true) {
            projectNumbers["Clients Biat"] += 1;
        } else if (cl.est_client_biat === false) {
            projectNumbers["Non-Clients Biat"] += 1;
        }
    });

    const barChartData = {
        labels: Object.keys(projectNumbers),
        values: Object.values(projectNumbers),
    };

    const totalCredit = clients.reduce((acc, cl) => acc + (parseFloat(cl.montant_du_credit_simule) || 0), 0);
    const formatter = new Intl.NumberFormat('fr-TN', {
        style: 'currency',
        currency: 'TND',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const formattedTotalCredit = formatter.format(totalCredit);
    const CreditSimulationsNumber = clients.filter(cl => cl.simulation_de_credit === "Oui").length;
    const totalClients = clients.length;
    const statusclient = clients.reduce((acc, client) => {
        const status = client.statut_du_contact; 
        if (status === "Contacté") {
            acc.contacte += 1;
        } else if (status === "Non contacté") {
            acc.nonContacte += 1;
        } else if (status === "En attente") {
            acc.enAttente += 1;
        }
        return acc;
    }, { contacte: 0, nonContacte: 0, enAttente: 0 });

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
                                    <h1 className="text-3xl font-bold mb-6 text-blue-800 shadow-lg ">Les dernières simulations:</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {recentSimulations.map((sim, index) => (
                                            <Card 
                                                key={index} 
                                                title={` ${sim.type_du_bien}`} 
                                                subTitle={`Pays: ${sim.pays_de_residence}`} 
                                                className="p-shadow-4 rounded-lg p-4 text-sm"
                                            >
                                                <div>
                                                    <p><strong>Valeur:</strong> {sim.valeur_de_votre_projet}</p>
                                                    <Link to={`/credit/${sim.id}`} className="text-blue-500 hover:underline mt-2 block">Détails</Link>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h1 className="text-3xl font-bold mb-6  text-blue-800 shadow-lg">Les clients récents:</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {recentClients.map((cl, index) => (
                                            <Card 
                                                key={index} 
                                                title={`${cl.nom}`} 
                                                subTitle={`Téléphone: ${cl.numero_de_telephone}`} 
                                                className="p-shadow-4 rounded-lg p-4 text-sm"
                                            >
                                                <div>
                                                    <p><strong>Crédit:</strong> {cl.simulation_de_credit}</p>
                                                    <p><strong>Statut :</strong> {cl.statut_du_contact}</p>
                                                    <Link to={`/client/${cl.id}`} className="text-blue-500 hover: mt-2 block">Détails</Link>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h1 className="text-3xl font-bold mb-6 text-blue-800 shadow-lg">Les statuts des clients:</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <EstimationCard title="Clients Contactés:" value={`${statusclient.contacte} / ${totalClients}`} />
                                        <EstimationCard title="Clients Non Contactés:" value={`${statusclient.nonContacte} / ${totalClients}`} />
                                        <EstimationCard title="Clients En Attente:" value={`${statusclient.enAttente} / ${totalClients}`} />
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h1 className="text-3xl font-bold mb-6 text-blue-800 shadow-lg">Les clients Biat :</h1>
                                    <BarChart data={barChartData} />
                                </div>

                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 lg:pl-6">
                        <div className="mb-12">
                                <h1 className="text-3xl font-bold mb-6 text-blue-800 shadow-lg">Statistiques selon le Revenu:</h1>
                                <PieChart data={pieChartData} />
                            </div>
                            <div className="mb-12">
                                <h1 className="text-3xl font-bold mb-6 text-blue-800 shadow-lg">Estimation des crédits :</h1>
                                <EstimationCard
                                    title="Total des crédits demandés"
                                    value={`${formattedTotalCredit} `}
                                    description="Montant total des crédits demandés par les clients."
                                />
                            </div>
                            
                            <div className="mb-12">
                            <h1 className="text-3xl font-bold mb-6 text-blue-800 shadow-lg">Simulation des crédits :</h1>
                                <div className="flex items-center justify-center">
                                    <div className="relative bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-s border border-gray-200">
                                        <div className="flex items-center justify-center mb-4">
                                            <span className="rounded-full bg-blue-100 text-blue-500 p-3">
                                                <i className="pi pi-credit-card" style={{ fontSize: '24px' }}></i>
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-2 text-gray-800">
                                            Nombre des clients qui ont fait une simulation de crédit
                                        </h2>
                                        <p className="text-3xl font-bold text-blue-500 mb-4">{`${CreditSimulationsNumber}/ ${totalClients}`} </p>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500 rounded-full"
                                                style={{ width: `${(CreditSimulationsNumber / totalClients) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
