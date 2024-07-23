import { Link } from 'react-router-dom';
import Clients from '././clients';
export default function Client(props){
    
return (
    <>
     <tr >
        {console.log(props)}
        
           
            <td className="border border-gray-300 px-4 py-2">{props.cl.nom}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.email}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.numeroDeTelephone}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.dateDeConsultation}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.simulationDeCredit}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.statutDuContact}</td>
            <td ><a ><Link to={props.cl.id} >details</Link></a></td>




           
        </tr>
    </>
)
}