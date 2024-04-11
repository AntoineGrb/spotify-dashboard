'use client'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
    plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Nombre d\'occurrences par item',
        },
      },
}

export default function GraphTopGenres({labels, values}: {labels: string[], values: number[]}) { 
    const data = {
        labels, 
        datasets: [
          {
            label: 'Nombre d\'occurrences',
            data: values,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
    }

    return <Bar options={options} data={data} />
}