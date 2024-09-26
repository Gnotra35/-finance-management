import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';
import Widget from '../components/Widget';
import BudgetChart from '../components/BudgetChart';

import TransactionTable from '../components/TransactionsTable';
import { FaCalendarAlt } from 'react-icons/fa';
import PieChartWithCenterLabel from '../components/piechart'; 

const Dashboard = () => {
  const [financeData, setFinanceData] = useState(null);

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/finance/all');
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

  return (
    <div className="dashboard">
      {/* Toolbar Section */}
      <div className="dashboard-toolbar">
        <div className="date-picker-container">
          <FaCalendarAlt className="calendar-icon" />
          <input type="text" className="month-label" value="this month" readOnly />
        </div>
        <div className="toolbar-buttons">
          <button className="toolbar-button-widget">+ Manage Widget</button>
          <button className="toolbar-button">+ Add Widget</button>
        </div>
      </div>

      {/* Top Widgets Section */}
      <div className="top-widgets">
        <Widget title="Income" value={formatCurrency(income)} change="+7.2%" />
        <Widget title="Expenses" value={formatCurrency(expenses)} change="+7.2%" />
        <Widget title="Total Savings" value={formatCurrency(savings)} change="+3.5%" />
        <Widget title="Total Balance" value={formatCurrency(income - expenses)} change="+12%" />
      </div>
 
     {/* Budget Section */}
<div className="budget-section">
  
  <BudgetChart />
  <div className="pie-chart-container">
    <PieChartWithCenterLabel />
  </div>
</div>

      <TransactionTable />

    </div>
  );
};

export default Dashboard;
