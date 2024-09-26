import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDashboard,
  faWallet,
  faBullseye,
  faChartLine,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';
import Logo from '../images/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="Dashboard Logo" className="sidebar-logo-image" />
        <span className="sidebar-logo-name">BudgetBuddy</span>
      </div>
      <ul className="sidebar-items">
        <li>
          <NavLink
            to="/dashboard"
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faDashboard} className="sidebar-icon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="sidebar-icon" />
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wallet"
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faWallet} className="sidebar-icon" />
            Wallet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saving-goals"
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faBullseye} className="sidebar-icon" />
            Goals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics" 
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faCog} className="sidebar-icon" />
            Settings
          </NavLink>
        </li>
        <li className="sidebar-help-button">
          <NavLink
            to="/help"
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="sidebar-icon" />
            Help
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            activeClassName="sidebar-active-link"
            className="sidebar-link"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" />
            LogOut
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
