import { Link } from 'react-router-dom';

export default function Client(props) {
    return (
        <tr>
            <td className="border border-gray-300 px-4 py-2">{props.cl.nom}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.email}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.numeroDeTelephone}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.dateDeConsultation}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.simulationDeCredit}</td>
            <td className="border border-gray-300 px-4 py-2">{props.cl.statutDuContact}</td>
            <td className="border border-gray-300 px-4 py-2">
                <Link to={`/client/${props.cl.id}`} className="text-blue-500 hover:underline">Details</Link>
            </td>
        </tr>
    );
}
