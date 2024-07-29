import { Link } from 'react-router-dom';

export default function Credit(props) {
    return (
        <tr>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.nom}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.prenom}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.mobile}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.paysDeResidence}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.revenu}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.typeDuBien}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.valeurDeVotreProjet}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.creditSollicite}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">{props.sim.dureeDeRemboursementSouhaitee}</td>
            <td className="border border-gray-300 px-2 py-1 text-sm">
                <Link to={`/credit/${props.sim.id}`} className="text-blue-500 hover:underline text-xs">Details</Link>
            </td>
        </tr>
    );
}
