import React from 'react';
import { FaSearch, FaBell, FaCalendarAlt } from 'react-icons/fa';
import profilePic from '../images/logo.png';
import '../styles/Analytics.css';
import Widget from '../components/Widget';
import BudgetChart from '../components/BudgetChart';
import StatisticsOverview from '../components/StatisticsChart';

const Analytics = () => {
  const financeData = {
    totalIncome: 50000,
    income: 30000,
    expenses: 15000,
  };

  const handleCreateWidgetClick = () => {
    console.log('Add New Widget clicked');
  };

  const income = financeData.totalIncome || financeData.income || 0;
  const expenses = financeData.expenses || 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(value);
  };

  return (
    <div>
      <div className='analyticspage'>
      <header className="header-container">
        <div className="header-welcome">
          <h2>Analytics</h2>
          <p>It is the best time to manage your finances.</p>
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

      <div className="overview-toolbar">
        <div className="overview-date-picker-container">
          <FaCalendarAlt className="overview-calendar-icon" />
          <input
            type="text"
            className="overview-month-label"
            value="This Month"
            readOnly
          />
        </div>
        <div className="toolbar-buttons">
          <button className="toolbar-button-export">Export CSV</button>
          <button className="toolbar-button-manage">Manage Widget</button>
          <button className="toolbar-button-add" onClick={handleCreateWidgetClick}>+ Add New Widget</button>
        </div>
      </div>

      <div className="analytics-top-widgets">
        <Widget title="Total Balance" value={formatCurrency(income - expenses)} change="+12%" />
        <Widget title="Income" value={formatCurrency(income)} change="+7.2%" />
        <Widget title="Expenses" value={formatCurrency(expenses)} change="+7.2%" />
      </div>

      <div className="chart-overview-container">
        <div className="budget-chart-container">
          <h3>Total Balance Overview</h3>
          <div className='monthly-expenses'>
          <BudgetChart />
          </div>
         
        </div>
        <div className="statistic-chart-container">
          <StatisticsOverview />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Analytics;
