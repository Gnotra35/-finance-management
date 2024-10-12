import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch, FaBell, FaEdit } from 'react-icons/fa'; 
import '../styles/SavingGoals.css'; 
import profilePic from '../images/logo.png';
import { Bar } from 'react-chartjs-2';

const SavingGoals = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCreateGoalClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  
  const barData = {
    labels: ['New Car', 'New Home', 'New Laptop', 'Vacation'],
    datasets: [
      {
        label: 'Amount Saved ($)',
        data: [1500, 2000, 1200, 1800],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div className='goalspage'>
      <header className="header-container">
        <div className="header-welcome">
          <h2>Goals</h2>
          <p>Overview of your goals</p>
        </div>
        <div className="header-icons">
          <FaSearch className="header-icon" />
          <FaBell className="header-icon" />
          <div className="header-profile-container">
            <img src={profilePic} alt="Profile" className="header-profile-img" />
            <span className="header-profile-name">Gnotra</span>
          </div>
        </div>
      </header>

      {/* Toolbar Section */}
      <div className="saving-goals-toolbar">
        <div className="date-picker-container">
          <FaCalendarAlt className="calendar-icon" />
          <input type="text" className="date-picker" value="01-jun - 1-july,2024" readOnly />
        </div>
        <button className="add-new-goal-button" onClick={handleCreateGoalClick}>+ Add New Goal</button>
      </div>

      {/* New Car Cards Section */}
      <div className="new-car-cards-container">
        <div className="card">
          <div className="card-header">
            <h3>New Car</h3>
            <FaEdit className="edit-icon" />
          </div>
          <p>Due Date: Oct 2024</p>
          <p>Amount: $4000</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
          <div className="card-footer">
            <p>160 days left</p>
            <p className="amount-option">$1500</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3> New home</h3>
            <FaEdit className="edit-icon" />
          </div>
          <p>Due Date: Oct 2024</p>
          <p>Amount: $4000</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
          <div className="card-footer">
            <p>160 days left</p>
            <p className="amount-option">$1500</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>New laptop</h3>
            <FaEdit className="edit-icon" />
          </div>
          <p>Due Date: Oct 2024</p>
          <p>Amount: $4000</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
          <div className="card-footer">
            <p>160 days left</p>
            <p className="amount-option">$1500</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Vacation</h3>
            <FaEdit className="edit-icon" />
          </div>
          <p>Due Date: Oct 2024</p>
          <p>Amount: $4000</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
          <div className="card-footer">
            <p>160 days left</p>
            <p className="amount-option">$1500</p>
          </div>
        </div>
      </div>

          {/* Bar Chart and Goals Section */}
    <div className="charts-goals-container">
      <div className="bar-chart-container">
        <h3>Amount Saved for Goals</h3>
        <Bar data={barData} options={barOptions} />
      </div>

      <div className="goals-container">
        <div className="goals-header">
          <h3>Total Goals</h3>
          <button className="add-goal-button">+ This Year</button>
        </div>

        <p className="goal-count">Number of Goals: 10</p>

        <div className="goal-status-buttons">
          <button className="status-button in-progress">4 In Progress</button>
          <button className="status-button completed">3 Completed</button>
          <button className="status-button cancelled">2 Cancelled</button>
          <button className="status-button not-started">3 Not Started</button>
        </div>
      </div>
    </div>


      {/* Form Modal Section */}
      {showForm && (
        <div className="goal-form-modal">
          <div className="goal-form-container">
            <h2>Add New Goal</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="goalName">Goal Name:</label>
              <input type="text" id="goalName" name="goalName" required />
              <label htmlFor="goalDescription">Description:</label>
              <textarea id="goalDescription" name="goalDescription" required />

              <label htmlFor="goalAmount">Target Amount:</label>
              <input type="number" id="goalAmount" name="goalAmount" required />

              <label htmlFor="goalDeadline">Deadline:</label>
              <input type="date" id="goalDeadline" name="goalDeadline" required />

              <div className="form-buttons">
                <button type="submit" className="submit-button">Save Goal</button>
                <button type="button" className="cancel-button" onClick={handleCloseForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SavingGoals;
