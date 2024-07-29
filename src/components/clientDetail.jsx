import { useState, useEffect } from "react";
import clients from "../client.json";
import { useParams } from "react-router-dom";
import Sidebar from "./sideBar";
import Popup from "./popup";

export default function ClientDetails() {
  const [cl, setCl] = useState({});
  const { id } = useParams();
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    console.log(id);
    const nC = clients.clients.find((c) => c.id === id);
    setCl(nC);
  }, [id]);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-8">
          <h1 className="text-2xl text-blue-900 text-left font-bold mb-6 underline">Les détails du client :</h1>
          <div className="bg-white shadow-md rounded p-6">
            <div className="mb-4">
              <h2 className="text-sky-600 font-semibold text-xl">Nom complet:</h2>
              <p className="text-black">{cl.nom}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Email:</h2>
              <p className="text-black">{cl.email}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Numero de telephone:</h2>
              <p className="text-black">{cl.numeroDeTelephone}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Type de bien consulte:</h2>
              <p className="text-black">{cl.typeDeBienConsulte}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Date de consultation:</h2>
              <p className="text-black">{cl.dateDeConsultation}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Simulation de credit:</h2>
              <p className="text-black">{cl.simulationDeCredit}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Montant de credit:</h2>
              <p className="text-black">{cl.montantDuCreditSimule}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Status du contact:</h2>
              <p className="text-black">{cl.statutDuContact}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Source du Lead:</h2>
              <p className="text-black">{cl.sourceDuLead}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-sky-600">Notes:</h2>
              <p className="text-black">{cl.notes}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => setOpenPopup(true)}>
              Mettre à jour
            </button>
          </div>
        </div>
      </div>

      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} client={cl} setClient={setCl} />
    </>
  );
}
