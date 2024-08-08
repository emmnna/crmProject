import { useState, useEffect } from 'react';
import clientData from '../client.json';
import Sidebar from './sideBar';
import NavBar from './navBar';
import { useNavigate, useParams } from 'react-router-dom';
import { editClient } from "../Api";

export default function UpdateClient() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [client, setClient] = useState(null);

    
    useEffect(() => {
        const foundClient = clientData.clients.find(client => client.id === parseInt(id)); 
        setClient(foundClient);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient(prevClient => ({
            ...prevClient,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editClient(id, client);
        console.log("Client updated:", client);
        navigate('/client'); 
    }

    if (!client) {
        return <div>...</div>; 
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <NavBar />
                    <div className="flex-1 flex flex-col lg:flex-row p-6 lg:ml-64">
                        <form onSubmit={handleSubmit} className="w-full max-w-lg">
                            <h2 className="text-xl mb-4">Modifier le client</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    name="nom"
                                    id="nom"
                                    value={client.nom}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={client.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroDeTelephone">
                                    Numéro de téléphone
                                </label>
                                <input
                                    type="text"
                                    name="numeroDeTelephone"
                                    id="numeroDeTelephone"
                                    value={client.numeroDeTelephone}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateDeConsultation">
                                    Date de consultation
                                </label>
                                <input
                                    type="date"
                                    name="dateDeConsultation"
                                    id="dateDeConsultation"
                                    value={client.dateDeConsultation}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="simulationDeCredit">
                                    Simulation de crédit
                                </label>
                                <input
                                    type="text"
                                    name="simulationDeCredit"
                                    id="simulationDeCredit"
                                    value={client.simulationDeCredit}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statutDuContact">
                                    Statut du contact
                                </label>
                                <input
                                    type="text"
                                    name="statutDuContact"
                                    id="statutDuContact"
                                    value={client.statutDuContact}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Mettre à jour
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
