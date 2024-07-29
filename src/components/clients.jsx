
import { useState ,useEffect} from "react";
import clients from '../client.json'
import Client from '../components/client';
import Sidebar from "./sideBar";

export default function Clients(){
    
  
  
    return (
        <>
        <div className="flex min-h-screen bg-gray-100">
            
            <Sidebar />
       
            <div className="flex-1 flex flex-col p-4">
                
                  <h1 className="text-3xl font-bold mb-8 text-blue-900 text-left underline" >Liste des clients:</h1>
                  
                  <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Nom</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Numero de telephone</th>
                            <th className="border border-gray-300 px-4 py-2">Date de consultation</th>
                            <th className="border border-gray-300 px-4 py-2">Simulation de credit</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
       
        <tbody>
       {
           clients?.clients?.map((c,i)=>{
            return <Client  cl={c} key={i}/>
           }) 
        }
        
        </tbody>
    
    </table>
      
       </div>
       </div>

   
        </>
    )
}