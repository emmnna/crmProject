import React from 'react';
import simulations from '../simulations.json';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import Sidebar from './sideBar';

export default function Home() {
    const recentSimulations = simulations?.simulations.slice(-5).reverse();

    return (

        <div className="flex min-h-screen bg-white text-blue-800">
        <Sidebar />

            
            <h1 className="text-3xl font-bold mb-6 text-center underline ">Les dernières simulations :</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentSimulations.map((sim, index) => (
                    <Card key={index} title={`${sim.nom} ${sim.prenom}`} subTitle={`Téléphone: ${sim.mobile}`} className="p-shadow-4">
                        <p>Pays: {sim.paysDeResidence}</p>
                        <p>Revenu: {sim.revenu}</p>
                        <p>Type de bien: {sim.typeDuBien}</p>
                        <p>Valeur: {sim.valeurDeVotreProjet}</p>
                        <p>Credit sollicité: {sim.creditSollicite}</p>
                        <Link to={`/credit/${sim.id}`} className="text-blue-500 hover:underline">Détails</Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
