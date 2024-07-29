
import { useState ,useEffect} from "react";
import simulations from '../simulations.json'
import Sidebar from "./sideBar";
import Credit from "./credit";
export default function Credits(){
    
  
  
    return (
        <>
        <div className="flex min-h-screen bg-gray-100">
            
            <Sidebar />
       
            <div className="flex-1 flex flex-col p-4">
                
                  <h1 className="text-3xl font-bold mb-8 text-blue-900 text-left underline" >Les simulations des credits:</h1>
                  
                  <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Nom </th>
                            <th className="border border-gray-300 px-4 py-2">Prenom</th>
                            <th className="border border-gray-300 px-4 py-2">Numéro de telephone</th>
                            <th className="border border-gray-300 px-4 py-2">Pays</th>
                            <th className="border border-gray-300 px-4 py-2">Revenu</th>
                            <th className="border border-gray-300 px-4 py-2">Type de bien</th>
                            <th className="border border-gray-300 px-4 py-2">Valeur du projet</th>
                            <th className="border border-gray-300 px-4 py-2">Credit solicite</th>
                            <th className="border border-gray-300 px-4 py-2">Durée de remboursement</th>

                        </tr>
                    </thead>
       
        <tbody>
       {
           simulations?.simulations?.map((s,i)=>{
            return <Credit  sim={s} key={i}/>
           }) 
        }
        
        </tbody>
    
    </table>
      
       </div>
       </div>

   
        </>
    )
}