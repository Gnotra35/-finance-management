import React from 'react';
import '../styles/SavingGoals.css';

const SavingsGoal = ({ title, amount, progress, savings }) => {
  return (
    <div className="savings-goal">
      <div className="savings-goal-header">
        <p className="title">{title}</p>
        <p className="amount">${amount}</p>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          <span className="progress-value">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoal;