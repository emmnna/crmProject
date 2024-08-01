import React from 'react';
import { Chart } from 'primereact/chart';

const PieChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                data: data.values,
                backgroundColor: [
                    '#191970',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#4B0082',
                    '#FF9F40',
                ],
                hoverBackgroundColor: [
                    '#191970	',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#4B0082',
                    '#FF9F40',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="card">
            <Chart type="pie" data={chartData} options={options} style={{ position: 'relative', width: '50%' }} />
        </div>
    );
};

export default PieChart;
