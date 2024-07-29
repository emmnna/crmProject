import { useState, useEffect } from "react";

import simulations from '../simulations.json';
import { useParams } from "react-router-dom";
import Sidebar from "./sideBar";


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
    <div className="flex min-h-screen bg-gray-100 w-full">
        <Sidebar />
        <div className="flex-1 p-16">
          <h1 className="text-2xl text-blue-900 text-left font-bold mb-6 underline">Autres details : </h1>
          <div className="bg-white shadow-md rounded p-7">
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

      
    </>
  );
}
