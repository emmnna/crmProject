import { useState } from 'react';
import Sidebar from './sideBar';
import NavBar from './navBar';
import { useNavigate } from 'react-router-dom';
import { addClient } from "../Api";

export default function AddClient() {
    const [newClient, setNewClient] = useState({
        nom: '',
        email: '',
        numero_de_telephone: '',
        type_de_bien_consulte: '',
        date_de_consultation: '',
        simulation_de_credit: '',
        agence: '', 
        estclientbiat: null, 
        montant_du_credit_simule: '',
        statut_du_contact: '',
        source_du_lead: '',
        notes: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewClient(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : (type === 'radio' ? value === 'true' : value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newClient.nom && newClient.email && newClient.numero_de_telephone) {
            addClient(newClient)
                .then(() => {
                    setNewClient({
                        nom: '',
                        email: '',
                        numero_de_telephone: '',
                        type_de_bien_consulte: '',
                        date_de_consultation: '',
                        simulation_de_credit: '',
                        agence: '',
                        estclientbiat: null,
                        montant_du_credit_simule: '',
                        statut_du_contact: '',
                        source_du_lead: '',
                        notes: ''
                    });

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
                                    placeholder="Nom complet"
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_de_telephone">Numéro de téléphone</label>
                                <input
                                    type="text"
                                    name="numero_de_telephone"
                                    id="numero_de_telephone"
                                    value={newClient.numero_de_telephone}
                                    onChange={handleChange}
                                    placeholder="Numéro de téléphone"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type_de_bien_consulte">Type de bien consulté</label>
                                <input
                                    type="text"
                                    name="type_de_bien_consulte"
                                    id="type_de_bien_consulte"
                                    value={newClient.type_de_bien_consulte}
                                    onChange={handleChange}
                                    placeholder="Type de bien consulté"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_de_consultation">Date de consultation</label>
                                <input
                                    type="date"
                                    name="date_de_consultation"
                                    id="date_de_consultation"
                                    value={newClient.date_de_consultation}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estclientbiat">Simulation de credit</label>
                                <div className="flex items-center">
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="simulation_de_credit"
                                            value={true}
                                            checked={newClient.simulation_de_credit === true}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Oui</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="simulation_de_credit"
                                            value={false}
                                            checked={newClient.simulation_de_credit === false}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Non</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="agence">Agence</label>
                                <input
                                    type="text"
                                    name="agence"
                                    id="agence"
                                    value={newClient.agence}
                                    onChange={handleChange}
                                    placeholder="Agence"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estclientbiat">Client Biat</label>
                                <div className="flex items-center">
                                    <label className="inline-flex items-center mr-4">
                                        <input
                                            type="radio"
                                            name="estclientbiat"
                                            value={true}
                                            checked={newClient.estclientbiat === true}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Oui</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="estclientbiat"
                                            value={false}
                                            checked={newClient.estclientbiat === false}
                                            onChange={handleChange}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Non</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="montant_du_credit_simule">Montant du crédit simulé</label>
                                <input
                                    type="number"
                                    name="montant_du_credit_simule"
                                    id="montant_du_credit_simule"
                                    value={newClient.montant_du_credit_simule}
                                    onChange={handleChange}
                                    placeholder="Montant du crédit simulé"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statut_du_contact">Statut du contact</label>
                                <input
                                    type="text"
                                    name="statut_du_contact"
                                    id="statut_du_contact"
                                    value={newClient.statut_du_contact}
                                    onChange={handleChange}
                                    placeholder="Statut du contact"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="source_du_lead">Source du lead</label>
                                <input
                                    type="text"
                                    name="source_du_lead"
                                    id="source_du_lead"
                                    value={newClient.source_du_lead}
                                    onChange={handleChange}
                                    placeholder="Source du lead"
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
