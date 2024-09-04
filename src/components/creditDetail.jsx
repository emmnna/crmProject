import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./sideBar";
import NavBar from "./navBar";
import { getSimulById } from "../Api";


export default function CreditDetail() {
  const [sim, setSim] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const fetchSimulDetails = async () => {
      try {
        const simulData = await getSimulById(id);
        setSim(simulData); 
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du simulation :", error);
      }
    };

    fetchSimulDetails();
  }, [id]);

  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <NavBar />
        <div className="flex-1 flex flex-col lg:flex-row p-6 lg:ml-64"> 
         
          <div className="bg-white shadow-md rounded p-7">
          <div className="mb-4">
          <h2 className="text-xl font-semibold text-sky-600">Nom et Prenom :</h2>
              <p className="text-black">{sim.nom} {sim.prenom}</p>
            </div>
            
            <div className="mb-4">
          <h2 className="text-xl font-semibold text-sky-600">Numero de telephone :</h2>
              <p className="text-black">{sim.mobile}</p>
            </div>
            <div className="mb-4">
          <h2 className="text-xl font-semibold text-sky-600">Pays de residence :</h2>
              <p className="text-black">{sim.pays_de_residence}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Revenu :</h2>
              <p className="text-black">{sim.revenu}</p>
            </div>
            
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Type de bien :</h2>
              <p className="text-black">{sim.type_du_bien}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Valeur de projet :</h2>
              <p className="text-black">{sim.valeur_de_votre_projet}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Credit sollicite :</h2>
              <p className="text-black">{sim.credit_sollicite}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Durée de remboursement souhaitée :</h2>
              <p className="text-black">{sim.duree_de_Remboursement_souhaitee}</p>
            </div>
            
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Email du client:</h2>
              <p className="text-black">{sim.email}</p>
            </div>
            <div className="mb-4">
  <h2 className="text-xl font-semibold text-sky-600">Client du Biat :</h2>
  <p className="text-black">{sim.client_biat ? "Oui" : "Non"}</p>
</div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Montant maximum de credit :</h2>
              <p className="text-black">{sim.montant_maximum_de_credit}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">L'auto financement :</h2>
              <p className="text-black">{sim.votre_auto_financement}</p>
            </div>
          
            
          </div>
        </div>
      </div>
      </div>
      </div>

      
    </>
  );
}
