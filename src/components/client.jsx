import { Link } from 'react-router-dom';
import Clients from '././clients';
export default function Client(props){
    
return (
    <>
     <tr>
        {console.log(props)}
            <td>{props.cl.id}</td>
            <td>{props.cl.firstname}</td>
            <td>{props.cl.lastname}</td>
            <td>{props.cl.email}</td>
            {/* <td ><a ><Link to={props.client.id} >details</Link></a></td> */}
        </tr>
    </>
)
}