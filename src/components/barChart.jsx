import { Chart } from 'primereact/chart';

export default function BarChart({ data }) {
    const { labels, values } = data;
    
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'les clients Biat',
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                 ],
                borderColor:[ 'rgb(255, 159, 64)',
        'rgb(75, 192, 192)',],
                data: values,
                borderWidth: 1
            }
        ]
    };

    const options = {
        indexAxis: 'x',
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={options} />
            
        </div>
    );
}
