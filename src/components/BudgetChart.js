import React from 'react';
import ChartComponent from './Chart';

const BudgetChart = () => {
  const data = {
    labels: ['jan', 'feb', 'march', 'april', 'may', 'june','july','august', 'september','october','november','December'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: [400, 1500, 200, 300, 150, 100,600],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '130%', height: '400px', marginTop: '20px' }}>
      <ChartComponent data={data} />
    </div>
  );
};

export default BudgetChart; 