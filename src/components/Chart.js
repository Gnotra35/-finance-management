// Chart.js
import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Chart.css';

// Register necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ data, loading, error }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Ensure the chart is correctly initialized
    if (chartRef.current) {
      console.log('Chart reference initialized correctly');
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="chart">
      <Bar ref={chartRef} data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};



export default ChartComponent;
