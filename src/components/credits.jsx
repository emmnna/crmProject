import { useState, useEffect } from "react";
import Sidebar from "./sideBar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import NavBar from "./navBar";
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import { getSimulations } from "../Api";



export default function Credits() {
    const [data, setData] = useState([]);
    
    const navigate = useNavigate();
     useEffect(() => {
        const fetchSimulations = async () => {
            try {
                const clients = await getSimulations(); 
                setData(clients);
            } catch (error) {
                console.error("Erreur lors de la récupération des simulations :", error); 
            }
        };

        fetchSimulations();
    }, []);
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <NavBar />
        <div className="flex-1 flex flex-col lg:flex-row p-6 lg:ml-15">            
                <Card title="Les simulations des crédits">
            <DataTable value={data} stripedRows tableStyle={{ minWidth: '60rem' }}>
                        <Column field="nom_sim" header="Nom" sortable style={{ width: '25%' }} />
                        <Column field="prenom" header="Prénom" sortable style={{ width: '25%' }} />
                        <Column field="mobile" header="Numéro de téléphone" style={{ width: '25%' }} />
                        <Column field="pays_de_residence" header="Pays" sortable style={{ width: '25%' }}/>
                        <Column field="type_du_bien" header="Type de bien" style={{ width: '25%' }} />
                        <Column field="valeur_de_votre_projet" header="Valeur "  sortable style={{ width: '25%' }} />
                        <Column field="credit_sollicite" header="Crédit sollicité"  sortable style={{ width: '25%' }}/>
                        <Column field="duree_de_Remboursement_souhaitee" header="Durée de remboursement" sortable style={{ width: '25%' }} />
                        <Column
                            header="Détails"
                            body={(rowData) => (
                                
                                 <Visibility
                                 onClick={() => navigate(`/credit/${rowData.id}`)} 
                                 className="cursor-pointer text-blue-500 ml-2"
                                 />
                            )}
                        />
                    </DataTable>
                </Card>
            </div>
        </div>
        </div>
        </div>
    );
}
