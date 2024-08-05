import { useState, useEffect } from "react";

import simulations from '../simulations.json';
import { useParams } from "react-router-dom";
import Sidebar from "./sideBar";
import NavBar from "./navBar";


export default function CreditDetail() {
  const [sim, setSim] = useState({});
  const { id } = useParams();


  useEffect(() => {
    console.log(id);
    const nS = simulations.simulations.find((s) => s.id === id);
    setSim(nS);
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
              <p className="text-black">{sim.paysDeResidence}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Revenu :</h2>
              <p className="text-black">{sim.revenu}</p>
            </div>
            
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Type de bien :</h2>
              <p className="text-black">{sim.typeDuBien}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Valeur de projet :</h2>
              <p className="text-black">{sim.valeurDeVotreProjet}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Credit sollicite :</h2>
              <p className="text-black">{sim.creditSollicite}</p>
            </div>
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Durée de remboursement souhaitée :</h2>
              <p className="text-black">{sim.dureeDeRemboursementSouhaitee}</p>
            </div>
            
            <div className="mb-4">
            <h2 className="text-xl font-semibold text-sky-600">Email du client:</h2>
              <p className="text-black">{sim.email}</p>
            </div>
            <div className="mb-4">
  <h2 className="text-xl font-semibold text-sky-600">Client du Biat :</h2>
  <p className="text-black">{sim.clientBiat ? "Oui" : "Non"}</p>
</div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Montant maximum de credit :</h2>
              <p className="text-black">{sim.montantMaximumDeCredit}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">L'auto financement :</h2>
              <p className="text-black">{sim.votreAutofinancement}</p>
            </div>
          
            
          </div>
        </div>
      </div>
      </div>
      </div>

      
    </>
  );
}
