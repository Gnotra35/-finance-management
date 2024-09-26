import React from 'react';
import '../styles/StatisticsChart.css';

const StatisticsOverview = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>Statistics </h2>
        
        <button className="detail-button">Detail</button>
      </div>

      <div className="chart-container">
        
        <div className="pie-chart">
          
          <div className="inner-circle"></div>
        </div>
      </div>

      <div className="labels-container">
        <div className="label-item">
          <div className="label-left">
            <div className="color-box" style={{ backgroundColor: '#4caf50' }}></div>
            <span>Money</span>
          </div>
          <span className="label-value">10%</span>
        </div>
        <div className="label-item">
          <div className="label-left">
            <div className="color-box" style={{ backgroundColor: '#2196f3' }}></div>
            <span>Salary</span>
          </div>
          <span className="label-value">25%</span>
        </div>
        <div className="label-item">
          <div className="label-left">
            <div className="color-box" style={{ backgroundColor: '#ff9800' }}></div>
            <span>Investment</span>
          </div>
          <span className="label-value">8%</span>
        </div>
        <div className="label-item">
          <div className="label-left">
            <div className="color-box" style={{ backgroundColor: '#ff5722' }}></div>
            <span>Other</span>
          </div>
          <span className="label-value">3%</span>
        </div>
        <div className="label-item">
          <div className="label-left">
            <div className="color-box" style={{ backgroundColor: '#9c27b0' }}></div>
            <span>Rent</span>
          </div>
          <span className="label-value">15%</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsOverview;
