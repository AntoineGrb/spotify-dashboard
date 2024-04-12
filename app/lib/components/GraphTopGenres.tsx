'use client'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { callback } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
    scales: {
        y: {
            ticks: {
                stepSize: 1,
                callback: function(value: any) {
                    return Math.floor(value);
                }
            },
        },
    },
    plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
}

export default function GraphTopGenres({labels, values}: {labels: string[], values: number[]}) { 
    const data = {
        labels, 
        datasets: [
          {
            label: 'Genres les plus écoutés',
            data: values,
            backgroundColor: '#22c55e',
            borderColor: 'none',
            borderWidth: 1,
          },
        ],
    }

    return <Bar options={options} data={data} />
}