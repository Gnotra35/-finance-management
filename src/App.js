import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Saving from './pages/Saving_goals';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import Help from './pages/Help';
import Settings from './pages/SettingsPage';
import Wallet from '../src/pages/wallet';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './styles/App.css';

const App = () => {
  const location = useLocation();

  // Sidebar will be hidden on login, signup, and home routes
  const hideSidebar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="app">
      {/* Conditionally render the Sidebar */}
      {!hideSidebar && <Sidebar />}

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saving-goals" element={<Saving />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
