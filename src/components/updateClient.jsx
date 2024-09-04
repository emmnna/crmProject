import { useState, useEffect } from 'react';
import Sidebar from './sideBar';
import NavBar from './navBar';
import { useNavigate, useParams } from 'react-router-dom';
import { editClient, getClients } from "../Api"; 

export default function UpdateClient() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [client, setClient] = useState(null);

    const fetchClientDetails = async () => {
        try {
            const clients = await getClients();
            const foundClient = clients.find(client => client.id === parseInt(id)); 
            setClient(foundClient);
        } catch (error) {
            console.error("Erreur lors de la récupération des détails du client :", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchClientDetails();
        }
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
        try {
            await editClient(id, client); 
            console.log("Client updated:", client);
            navigate('/client'); 
        } catch (error) {
            console.error("Erreur lors de la mise à jour du client :", error);
        }
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
                                    value={client.nom || ""}
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
                                    value={client.email || ""}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_de_telephone">
                                    Numéro de téléphone
                                </label>
                                <input
                                    type="text"
                                    name="numero_de_telephone"
                                    id="numero_de_telephone"
                                    value={client.numero_de_telephone || ""}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_de_consultation">
                                    Date de consultation
                                </label>
                                <input
                                    type="date"
                                    name="date_de_consultation"
                                    id="date_de_consultation"
                                    value={client.date_de_consultation || ""}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="simulation_de_credit">
        Simulation de crédit
    </label>
    <div>
        <label className="inline-flex items-center">
            <input
                type="radio"
                name="simulation_de_credit"
                value="Oui"
                checked={client.simulation_de_credit === "Oui"}
                onChange={handleChange}
                className="form-radio text-blue-500"
            />
            <span className="ml-2">Oui</span>
        </label>
        <label className="inline-flex items-center ml-6">
            <input
                type="radio"
                name="simulation_de_credit"
                value="Non"
                checked={client.simulation_de_credit === "Non"}
                onChange={handleChange}
                className="form-radio text-blue-500"
            />
            <span className="ml-2">Non</span>
        </label>
    </div>
</div>



                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statut_du_contact">
                                    Statut du contact
                                </label>
                                <input
                                    type="text"
                                    name="statut_du_contact"
                                    id="statut_du_contact"
                                    value={client.statut_du_contact || ""}
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
