
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
                
                  <h1 className="text-3xl font-bold mb-8 text-blue-900 text-left underline" >List of clients:</h1>
                  <input type="text"  placeholder="Search by name" className="mb-4 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Simulation</th>
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