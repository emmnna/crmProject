import { Card } from 'primereact/card';

export default function EstimationCard({ title, value, description }) {
    return (
        <Card className="p-shadow-4 rounded-lg bg-white ">
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-sm">{description}</p>
            </div>
        </Card>
    );
}
