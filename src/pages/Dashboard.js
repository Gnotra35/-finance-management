import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';
import Widget from '../components/Widget';
import BudgetChart from '../components/BudgetChart';
import TransactionTable from '../components/TransactionsTable';
import { FaCalendarAlt, FaSearch, FaBell } from 'react-icons/fa'; 
import PieChartWithCenterLabel from '../components/piechart'; 
import profilePic from '../images/logo.png'; 

const Dashboard = () => {
  const [financeData, setFinanceData] = useState(null);
  const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false); 
  const [isManageWidgetModalOpen, setIsManageWidgetModalOpen] = useState(false); 
  const [widgetType, setWidgetType] = useState(''); 
  const [widgetName, setWidgetName] = useState(''); 

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/finance/all');
        const data = response.data;

        if (data.length > 0) {
          setFinanceData(data[0]); 
        }
      } catch (error) {
        console.error('Error fetching finance data:', error);
      }
    };

    fetchFinanceData();
  }, []);

  if (!financeData) {
    return <div>Loading...</div>;
  }

  const income = financeData.totalIncome || financeData.income || 0;
  const expenses = financeData.expenses || 0;
  const savings = income - expenses;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(value);
  };

  // Toggle Add Widget Modal
  const toggleAddWidgetModal = () => {
    setIsAddWidgetModalOpen(!isAddWidgetModalOpen);
  };

  // Toggle Manage Widget Modal
  const toggleManageWidgetModal = () => {
    setIsManageWidgetModalOpen(!isManageWidgetModalOpen);
  };

  return (
    <div className="dashboard-fixed">
      <header className="header-container">
        <div className="header-welcome">
          <h2>Welcome Back, Gnotra!!</h2>
          <p>It's the best time to manage your finances</p>
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

      <div className="dashboard-toolbar">
        <div className="date-picker-container">
          <FaCalendarAlt className="calendar-icon" />
          <input type="text" className="month-label" value="this month" readOnly />
        </div>
        <div className="toolbar-buttons">
          <button className="toolbar-button-widget" onClick={toggleManageWidgetModal}>+ Manage Widget</button>
          <button className="toolbar-button" onClick={toggleAddWidgetModal}>+ Add Widget</button>
        </div>
      </div>

      {/* Add Widget Modal */}
      {isAddWidgetModalOpen && (
        <div className="modal-overlay">
          <div className="add-widget-modal">
            <h3>Add Widget</h3>
            <form className="add-widget-form">
              <label htmlFor="widgetType">Select Widget Type:</label>
              <select
                id="widgetType"
                value={widgetType}
                onChange={(e) => setWidgetType(e.target.value)}
                required
              >
                <option value="">--Choose a Widget--</option>
                <option value="IncomeWidget">Income Widget</option>
                <option value="ExpenseWidget">Expense Widget</option>
                <option value="SavingsWidget">Savings Widget</option>
              </select>
              <button type="button" onClick={toggleAddWidgetModal}>Add Widget</button>
              <button type="button" onClick={toggleAddWidgetModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Manage Widget Modal */}
      {isManageWidgetModalOpen && (
        <div className="modal-overlay">
          <div className="manage-widget-modal">
            <h3>Manage Widget</h3>
            <form className="manage-widget-form">
              <label htmlFor="widgetName">Widget Name:</label>
              <input
                type="text"
                id="widgetName"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                placeholder="Enter widget name"
                required
              />
              <button type="button" onClick={toggleManageWidgetModal}>Save Changes</button>
              <button type="button" onClick={toggleManageWidgetModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Top Widgets Section */}
      <div className="top-widgets">
        <Widget title="Income" value={formatCurrency(income)} change="+7.2%" />
        <Widget title="Expenses" value={formatCurrency(expenses)} change="+7.2%" />
        <Widget title="Total Savings" value={formatCurrency(savings)} change="+3.5%" />
        <Widget title="Total Balance" value={formatCurrency(income - expenses)} change="+12%" />
      </div>

      {/* Budget Section */}
      <div className='budgetsection'>
        <div className="budget-section">
          <BudgetChart />
          <div className="pie-chart-container">
            <PieChartWithCenterLabel />
          </div>
        </div>
      </div>

      <TransactionTable />
    </div>
  );
};

export default Dashboard;
