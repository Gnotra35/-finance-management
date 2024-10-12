import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/WalletGraph.css';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js';

// Register necessary chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const WalletGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Monthly Transactions',
        data: [1500, 2000, 1800, 2200, 1700, 2500, 2023, 1900, 2300, 2100],
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 2, 
    scales: {
      y: {
        min: 1000,
        max: 3000,
        ticks: {
          callback: (value) => `INRS${value}`,
        },
      },
    },
  };

  return (
    <div className="wallet-graph">
      <h2>Transaction Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WalletGraph;
