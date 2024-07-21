import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions, Chart, registerables } from 'chart.js';

Chart.register(...registerables);


const data: ChartData<'bar'> = {
  labels: ['Uber Eats', 'DoorDash', 'Grubhub'],
  datasets: [
    {
      label: 'Earnings',
      data: [4500, 3700, 2500],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<'bar'> = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const MyBarChart = () => <Bar data={data} options={options} />;

export default MyBarChart;