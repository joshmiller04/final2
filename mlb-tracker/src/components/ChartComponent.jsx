import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartComponent({ teams }) {
  const data = {
    labels: teams.map((team) => team.team.name),
    datasets: [
      {
        label: 'Wins',
        data: teams.map((team) => team.wins),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-10 max-w-4xl mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">Team Wins</h2>
      <Bar data={data} />
    </div>
  );
}
