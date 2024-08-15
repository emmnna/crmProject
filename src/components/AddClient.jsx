import { useState } from 'react';
import clientData from '../client.json';
import Sidebar from './sideBar';
import NavBar from './navBar';
import { useNavigate } from 'react-router-dom';
import { addClient } from "../Api";

export default function AddClient() {
    const [clients, setClients] = useState(clientData.clients);
    const [newClient, setNewClient] = useState({
        nom: '',
        email: '',
        numeroDeTelephone: '',
        typeDeBienConsulte: '',
        dateDeConsultation: '',
        simulationDeCredit: '',
        montantDuCreditSimule: '',
        statutDuContact: '',
        sourceDuLead: '',
        notes: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewClient({ ...newClient, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newClient.nom && newClient.email && newClient.numeroDeTelephone) {
            
            setClients([...clients, { ...newClient, id: clients.length + 1 }]);
            addClient({ ...newClient })
                .then(() => {
                    setNewClient({
                        nom: '',
                        email: '',
                        numeroDeTelephone: '',
                        typeDeBienConsulte: '',
                        dateDeConsultation: '',
                        simulationDeCredit: '',
                        montantDuCreditSimule: '',
                        statutDuContact: '',
                        sourceDuLead: '',
                        notes: ''
                    });

                    console.log('Client ajouté:', newClient);
                    navigate('/client');
                })
                .catch((error) => {
                    console.error('Erreur lors de l\'ajout du client:', error);
                });
        } else {
            console.error('Tous les champs obligatoires ne sont pas remplis.');
        }
    };


    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <NavBar />
                    <div className="flex-1 flex flex-col lg:flex-row p-6 lg:ml-64"> 
                        <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-white rounded shadow-md">
                            <h2 className="text-2xl mb-4">Ajouter un nouveau client</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">Nom complet</label>
                                <input
                                    type="text"
                                    name="nom"
                                    id="nom"
                                    value={newClient.nom}
                                    onChange={handleChange}
                                    placeholder="Nom"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={newClient.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroDeTelephone">Numéro de téléphone</label>
                                <input
                                    type="text"
                                    name="numeroDeTelephone"
                                    id="numeroDeTelephone"
                                    value={newClient.numeroDeTelephone}
                                    onChange={handleChange}
                                    placeholder="Numéro de téléphone"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeDeBienConsulte">Type de bien consulté</label>
                                <input
                                    type="text"
                                    name="typeDeBienConsulte"
                                    id="typeDeBienConsulte"
                                    value={newClient.typeDeBienConsulte}
                                    onChange={handleChange}
                                    placeholder="Type de bien consulté"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateDeConsultation">Date de consultation</label>
                                <input
                                    type="date"
                                    name="dateDeConsultation"
                                    id="dateDeConsultation"
                                    value={newClient.dateDeConsultation}
                                    onChange={handleChange}
                                    placeholder="Date de consultation"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="simulationDeCredit">Simulation de crédit</label>
                                <input
                                    type="text"
                                    name="simulationDeCredit"
                                    id="simulationDeCredit"
                                    value={newClient.simulationDeCredit}
                                    onChange={handleChange}
                                    placeholder="Simulation de crédit"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="montantDuCreditSimule">Montant du crédit simulé</label>
                                <input
                                    type="number"
                                    name="montantDuCreditSimule"
                                    id="montantDuCreditSimule"
                                    value={newClient.montantDuCreditSimule}
                                    onChange={handleChange}
                                    placeholder="Montant du crédit simulé"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statutDuContact">Statut du contact</label>
                                <input
                                    type="text"
                                    name="statutDuContact"
                                    id="statutDuContact"
                                    value={newClient.statutDuContact}
                                    onChange={handleChange}
                                    placeholder="Statut du contact"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sourceDuLead">Source du lead</label>
                                <input
                                    type="text"
                                    name="sourceDuLead"
                                    id="sourceDuLead"
                                    value={newClient.sourceDuLead}
                                    onChange={handleChange}
                                    placeholder="Source du lead"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">Notes</label>
                                <textarea
                                    name="notes"
                                    id="notes"
                                    value={newClient.notes}
                                    onChange={handleChange}
                                    placeholder="Notes"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Ajouter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
