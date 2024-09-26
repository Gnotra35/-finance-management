import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import profilePic from '../images/logo.png';
import WalletTransactions from '../components/wallettransaction';
import WalletGraph from '../components/WalletGraph';
import '../styles/wallet.css';
import '../styles/wallet_table.css';
import StatisticsOverview from '../components/StatisticsChart';

const Wallet = () => {
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

      <button className="wallet-button">
        + Add New Wallet
      </button>

      {/* Containers for Balance and Accounts */}
      <div className="containers-flex">
        {/* Balance Container */}
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

 {/* New Section for Wallet Graph, Transactions, and Statistics Overview */}
 <div className="wallet-stats-container">
        {/* Wallet Graph and Transactions Container */}
        <div className="wallet-graph-transactions-container">
          <WalletGraph />
          <WalletTransactions />
        </div>

        {/* Statistics Overview */}
        <div className="statistics-container">
          <StatisticsOverview />
        </div>
      </div>
    </div>
  );
};


export default Wallet;
