import { useState, useEffect } from "react";
import Sidebar from "./sideBar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import NavBar from "./navBar";
import { useNavigate } from 'react-router-dom';
import { deleteClient } from "../Api";
import { getClients } from "../Api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import { FaCheck, FaTimes } from 'react-icons/fa';

        
export default function Clients() {
    const [data, setData] = useState([]);
    

   
    const navigate = useNavigate();
     useEffect(() => {
        const fetchClients = async () => {
            try {
                const clients = await getClients(); 
                setData(clients);
            } catch (error) {
                console.error("Erreur lors de la récupération des clients :", error);
            }
        };

        fetchClients();
    }, []);

    const handleDelete = async (id) => {
        await deleteClient(id);
        setData(data.filter(client => client.id !== id));
    };
    
    
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <NavBar />
        <div className="flex-1 flex flex-col lg:flex-row p-6 lg:ml-15"> 
        
                <Card title="Liste des clients">
            <DataTable value={data} showGridlines stripedRows  tableStyle={{ minWidth: '60rem' }}>
                        <Column field="nom" header="Nom complet"  sortable style={{ width: '25%' }} />
                        <Column field="email" header="Email"  sortable style={{ width: '25%' }}/>
                        <Column field="numero_de_telephone" header="Numéro de téléphone" />
                        <Column field="date_de_consultation" header="Date de consultation" sortable style={{ width: '25%' }} />
                        <Column field="agence" header="Agence" sortable style={{ width: '15%' }} />
                        <Column field="est_client_biat" header="Client Biat" style={{ width: '25%' }} 
                        body={(rowData) => rowData.est_client_biat ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />} />
                        <Column field="simulation_de_credit" header="simulation de credit"  style={{ width: '25%' }}/>
                        <Column field="statut_du_contact" header="Statut" />
                       
                        <Column
    header="Actions"
    body={(rowData) => (
        <div>
            
            {/* <a href={`/client/${rowData.id}`} className="text-blue-500 hover:underline text-s">
                Détails
            </a> */}
            <Visibility
            onClick={() => navigate(`/client/${rowData.id}`)} 
            className="cursor-pointer text-blue-500 ml-2"
            />
            <EditIcon
            onClick={() => navigate(`/updateClient/${rowData.id}`)} 
            className="cursor-pointer text-blue-700 ml-2"
            />
            <DeleteIcon
            onClick={() => handleDelete(rowData.id)}
            className="cursor-pointer text-red-500 ml-2" 
            />
        </div>
    )}
    
/>
                        
                    </DataTable>
                </Card>
            </div>
            <div className="flex justify-center my-4">

                        <button 
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => navigate('/addClient')}
                        >
                            Ajouter un client
                        </button>
                    </div>
           
            <div>
      
    
    </div>
        </div>
        </div>
        </div>
    );
}
