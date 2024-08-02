import { useState, useEffect } from "react";
import clients from '../client.json';
import Sidebar from "./sideBar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Card } from 'primereact/card';
        


export default function Credits() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(clients?.clients || []);
    }, []);

    return (
        <div className="flex min-h-screen bg-white text-black">
        <Sidebar />
        <div className="flex-1 flex flex-col lg:flex-row p-6 lg:ml-64"> 
        
                <Card title="Liste des clients">
            <DataTable value={data} showGridlines stripedRows  tableStyle={{ minWidth: '60rem' }}>
                        <Column field="nom" header="Nom complet"  sortable style={{ width: '25%' }} />
                        <Column field="email" header="Email"  sortable style={{ width: '25%' }}/>
                        <Column field="numeroDeTelephone" header="Numéro de téléphone" />
                        <Column field="dateDeConsultation" header="Date de consultation" sortable style={{ width: '25%' }} />
                        <Column field="simulationDeCredit" header="simulation de credit"  style={{ width: '25%' }}/>
                        <Column field="statutDuContact" header="Statut" />
                       
                        <Column
                            header="Détails"
                            body={(rowData) => (
                                <a href={`/client/${rowData.id}`} className="text-blue-500 hover:underline text-s">
                                    Détails
                                </a>
                            )}
                        />
                    </DataTable>
                </Card>
            </div>
        </div>
    );
}
