
import { useState ,useEffect} from "react";
import clients from '../client.json'
import Client from '../components/client';
export default function Clients(){
    
  
  
    return (
        <>
       <div>
      
       <table border="1">
        <thead>
        <tr>
            <td>#</td>
            <td>Name</td>
            <td>Last Name</td>
            <td>email</td>
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
   
        </>
    )
}