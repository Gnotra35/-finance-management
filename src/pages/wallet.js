import React, { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import profilePic from '../images/logo.png';
import WalletTransactions from '../components/wallettransaction';
import WalletGraph from '../components/WalletGraph';
import '../styles/wallet.css';
import '../styles/wallet_table.css';
import StatisticsOverview from '../components/StatisticsChart';

const Wallet = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Function to toggle the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="wallet-page">
      <header className="header-container">
        <div className="header-welcome">
          <h2>Wallet</h2>
          <p>Overview of your Wallet Transactions</p>
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

      <button className="wallet-button" onClick={togglePopup}>
        + Add New Wallet
      </button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add New Wallet</h2>
            <form className="wallet-form">
              <label>Wallet Name:</label>
              <input type="text" placeholder="Enter wallet name" />

              <label>Initial Balance:</label>
              <input type="number" placeholder="Enter initial balance" />

              <label>Currency:</label>
              <input type="text" placeholder="Enter currency" />

              <div className="popup-buttons">
                <button type="submit" className="popup-save-button">Save</button>
                <button type="button" className="popup-cancel-button" onClick={togglePopup}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="containers-flex">
        <div className="balance-container">
          <h2>Total Balance</h2>
          <p className="balance-amount">$ 20,000</p>
          <p className="balance-description">Your capital consists of 3 sources</p>
          <div className="balance-buttons">
            <button className="transfer-button">Transfer</button>
            <button className="request-button">Request</button>
          </div>
        </div>

        <div className="accounts-container">
          <h2>Your Accounts</h2>
          <p>3 items</p>
          <div className="account-items">
            <div className="account-item">
              <img src={require('../asset/card1.jpg')} alt="Account 1" />
            </div>
            <div className="account-item">
              <img src={require('../asset/card1.jpg')} alt="Account 2" />
            </div>
            <div className="account-item">
              <img src={require('../asset/card1.jpg')} alt="Account 3" />
            </div>
          </div>
        </div>
      </div>

      <div className="wallet-stats-container">
        <div className="wallet-graph-transactions-container">
          <WalletGraph />
          <WalletTransactions />
        </div>

        <div className="statistics-container">
          <StatisticsOverview />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
