import { useState, useEffect } from "react";
import simulations from '../simulations.json';
import Sidebar from "./sideBar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import NavBar from "./navBar";
import Visibility from '@mui/icons-material/Visibility';


export default function Credits() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(simulations?.simulations || []);
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
                        <Column field="nom" header="Nom" sortable style={{ width: '25%' }} />
                        <Column field="prenom" header="Prénom" sortable style={{ width: '25%' }} />
                        <Column field="mobile" header="Numéro de téléphone" style={{ width: '25%' }} />
                        <Column field="paysDeResidence" header="Pays" sortable style={{ width: '25%' }}/>
                        <Column field="revenu" header="Revenu" style={{ width: '25%' }} />
                        <Column field="typeDuBien" header="Type de bien" style={{ width: '25%' }} />
                        <Column field="valeurDeVotreProjet" header="Valeur "  sortable style={{ width: '25%' }} />
                        <Column field="creditSollicite" header="Crédit sollicité"  sortable style={{ width: '25%' }}/>
                        <Column field="dureeDeRemboursementSouhaitee" header="Durée de remboursement" sortable style={{ width: '25%' }} />
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
