import { useState, useEffect } from "react";
import simulations from '../simulations.json';
import Sidebar from "./sideBar";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';


export default function Credits() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(simulations?.simulations || []);
    }, []);

    return (
        <div className="flex min-h-screen bg-white text-black">
        <Sidebar />
        <div className="flex-1 flex flex-col p-4">
           
                <Card title="Les simulations des crédits">
            <DataTable value={data} stripedRows tableStyle={{ minWidth: '60rem' }}>
                        <Column field="nom" header="Nom" sortable style={{ width: '25%' }} />
                        <Column field="prenom" header="Prénom" sortable style={{ width: '25%' }} />
                        <Column field="mobile" header="Numéro de téléphone"  />
                        <Column field="paysDeResidence" header="Pays" sortable style={{ width: '25%' }}/>
                        <Column field="revenu" header="Revenu"  />
                        <Column field="typeDuBien" header="Type de bien"  />
                        <Column field="valeurDeVotreProjet" header="Valeur "  sortable style={{ width: '25%' }} />
                        <Column field="creditSollicite" header="Crédit sollicité"  sortable style={{ width: '25%' }}/>
                        <Column field="dureeDeRemboursementSouhaitee" header="Durée de remboursement" sortable style={{ width: '25%' }} />
                        <Column
                            header="Détails"
                            body={(rowData) => (
                                <a href={`/credit/${rowData.id}`} className="text-blue-500 hover:underline text-s">
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
