import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch, FaBell,  } from 'react-icons/fa';
import profilePic from '../images/logo.png';
import '../styles/transactionP.css';

const TransactionOverview = () => {
  const [transactions, setTransactions] = useState([
    {
      date: '2024-06-01',
      amount: '$200',
      paymentName: 'Purchase A',
      method: 'Credit Card',
      category: 'Shopping',
      status: 'Completed'
    },
   
    {
      date: '2024-06-15',
      amount: '$150',
      paymentName: 'Purchase C',
      method: 'Debit Card',
      category: 'Food',
      status: 'Pending'
    },
    {
      date: '2024-06-25',
      amount: '$150',
      paymentName: 'Purchase C',
      method: 'Debit Card',
      category: 'Food',
      status: 'Pending'
    },
    {
      date: '2024-07-03',
      amount: '$150',
      paymentName: 'Purchase D',
      method: 'Debit Card',
      category: 'Food',
      status: 'Pending'
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    amount: '',
    paymentName: '',
    method: '',
    category: '',
    status: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleCreateTransactionClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, newTransaction]);
    setShowForm(false);
    setNewTransaction({
      date: '',
      amount: '',
      paymentName: '',
      method: '',
      category: '',
      status: ''
    });
  };

  return (
    <div className="transaction-overview-page">
      {/* Header Section */}
      
      <header className="header-container">
        <div className="header-welcome">
          <h2>Transactions</h2>
          <p>Overview of your Transactions</p>
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
          <input type="text" className="overview-month-label" value=" 01-jun -01 july-2024" readOnly />
        </div>
        <button className="overview-toolbar-button-add" onClick={handleCreateTransactionClick}>
          + Add New Transaction
        </button>
      </div>

      <div className="overview-transaction-content">
        <table className="overview-transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Name</th>
              <th>Method</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.paymentName}</td>
                <td>{transaction.method}</td>
                <td>{transaction.category}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="transactionDate">Date:</label>
              <input
                type="date"
                id="transactionDate"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="transactionAmount">Amount:</label>
              <input
                type="number"
                id="transactionAmount"
                name="amount"
                value={newTransaction.amount}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="paymentName">Payment Name:</label>
              <input
                type="text"
                id="paymentName"
                name="paymentName"
                value={newTransaction.paymentName}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="paymentMethod">Method:</label>
              <input
                type="text"
                id="paymentMethod"
                name="method"
                value={newTransaction.method}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="paymentCategory">Category:</label>
              <input
                type="text"
                id="paymentCategory"
                name="category"
                value={newTransaction.category}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="paymentStatus">Status:</label>
              <input
                type="text"
                id="paymentStatus"
                name="status"
                value={newTransaction.status}
                onChange={handleInputChange}
                required
              />

              <div className="form-buttons">
                <button type="submit" className="submit-button" onClick={"transaction added sucessfully"}>Save Transaction</button>
                <button type="button" className="cancel-button" onClick={handleCloseForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionOverview;
