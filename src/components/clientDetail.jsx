import { useState ,useEffect} from "react";
import clients from '../client.json'
import { useParams } from 'react-router-dom'
import Sidebar from "./sideBar";

export default function ClientDetails(){
    
    
    const [part,setPart]=useState(false)
    const [cl,setCl]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        console.log(id)
        const nC=clients.clients.find((c)=>c.id === id)
        setCl(nC);
    },[])
    return (
        <>
        <div className="flex min-h-screen bg-gray-100">
                <Sidebar />
                <div className="flex-1 p-8">
                    <h1 className="text-2xl text-blue-900 text-left font-bold mb-6 underline" > Client details : </h1>
                    <div className="bg-white shadow-md rounded p-6">
                        <div className="mb-4">
                            <h2 className="text-sky-600 font-semibold text-xl">Full Name:</h2>
                            <p className="text-black">{cl.nom}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Email:</h2>
                            <p className="text-black">{cl.email}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Phone Number:</h2>
                            <p className="text-black">{cl.numeroDeTelephone}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Type:</h2>
                            <p className="text-black">{cl.typeDeBienConsulte}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Date:</h2>
                            <p className="text-black">{cl.dateDeConsultation}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Simulation:</h2>
                            <p className="text-black">{cl.simulationDeCredit}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Amount:</h2>
                            <p className="text-black">{cl.montantDuCreditSimule}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Status:</h2>
                            <p className="text-black">{cl.statutDuContact}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Source From the Lead:</h2>
                            <p className="text-black">{cl.sourceDuLead}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-sky-600">Notes:</h2>
                            <p className="text-black">{cl.notes}</p>
                        </div>
                    </div>
                </div>
            </div>



        
       
             
            
        </>
    )
}