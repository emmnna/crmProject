import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./sideBar";
import Popup from "./popup";
import NavBar from "./navBar";
import { getClientById } from "../Api";


export default function ClientDetails() {
  const [cl, setCl] = useState({});
  const { id } = useParams();
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const fetchClientDetails = async () => {
      try {
        const clientData = await getClientById(id);
        setCl(clientData); 
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du client :", error);
      }
    };

    fetchClientDetails();
  }, [id]);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <NavBar />
            <div className="flex-1 flex flex-col lg:flex-row p-6 lg:ml-64">
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
                  <h2 className="text-xl font-semibold text-sky-600">Numero de téléphone:</h2>
                  <p className="text-black">{cl.numero_de_telephone}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Type de bien consulté:</h2>
                  <p className="text-black">{cl.type_de_bien_consulte}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Date de consultation:</h2>
                  <p className="text-black">{cl.date_de_consultation}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Simulation de crédit:</h2>
                  <p className="text-black">{cl.simulation_de_credit}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Montant de crédit:</h2>
                  <p className="text-black">{cl.montant_du_credit_simule}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Agence:</h2>
                  <p className="text-black">{cl.agence}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Client Biat:</h2>
                  <p className="text-black">{cl.est_client_biat ? "Oui" : "Non"}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Statut du contact:</h2>
                  <p className="text-black">{cl.statut_du_contact}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Source du Lead:</h2>
                  <p className="text-black">{cl.source_du_lead}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-sky-600">Notes:</h2>
                  <p className="text-black">{cl.notes}</p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  onClick={() => setOpenPopup(true)}
                >
                  Mettre à jour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} client={cl} setClient={setCl} />
    </>
  );
}
