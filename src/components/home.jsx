import React from 'react';
import simulations from '../simulations.json';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import Sidebar from './sideBar';
import clients from '../client.json';

export default function Home() {
    const recentSimulations = simulations?.simulations.slice(-5).reverse();
    const recentClients = clients?.clients.slice(-5).reverse();

    return (
        <div className="flex min-h-screen bg-white text-blue-800">
            <Sidebar />

            <div className="flex-1 p-6">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold mb-6 text-center underline">Les dernières simulations :</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentSimulations.map((sim, index) => (
                            <Card key={index} title={`${sim.nom} ${sim.prenom}`} subTitle={`Téléphone: ${sim.mobile}`} className="p-shadow-4">
                                <p>Pays: {sim.paysDeResidence}</p>
                                <p>Revenu: {sim.revenu}</p>
                                <p>Type de bien: {sim.typeDuBien}</p>
                                <p>Valeur: {sim.valeurDeVotreProjet}</p>
                                <p>Crédit sollicité: {sim.creditSollicite}</p>
                                <Link to={`/credit/${sim.id}`} className="text-blue-500 hover:underline">Détails</Link>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-6 text-center underline">Les clients récents :</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentClients.map((cl, index) => (
                            <Card key={index} title={`${cl.nom}`} subTitle={`Téléphone: ${cl.numeroDeTelephone}`} className="p-shadow-4">
                                <p>Email: {cl.email}</p>
                                <p>Date de consultation: {cl.dateDeConsultation}</p>
                                <p>Simulation de crédit: {cl.simulationDeCredit}</p>
                                <p>Valeur: {cl.valeurDeVotreProjet}</p>
                                <p>Statut de contact: {cl.statutDuContact}</p>
                                <Link to={`/client/${cl.id}`} className="text-blue-500 hover:underline">Détails</Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
