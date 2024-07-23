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
        <Sidebar />
        <div>
        <div>First Name:{cl.nom}</div>
        <div>Email:{cl.email}</div>
        <div>Phone Number:{cl.numeroDeTelephone}</div>
        <div>Type:{cl.typeDeBienConsulte}</div>
        <div>Date:{cl.dateDeConsultation}</div>
        <div>Simulation{cl.simulationDeCredit}</div>
        <div>Amount{cl.montantDuCreditSimule}</div>
        <div>Status{cl.statutDuContact}</div>
        <div>Source From the Lead:{cl.sourceDuLead}</div>
        <div>Notes:{cl.notes}</div>



        
        </div>
             
            
        </>
    )
}