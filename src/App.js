// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Saving from './pages/Saving_goals';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import Help from './components/Help';
import Settings from './pages/SettingsPage'; 
import Wallet from './pages/wallet'; 

import './styles/App.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      
      <Sidebar />

     
      
      <div className="main-content">
       
        {location.pathname === '/dashboard' && <Header />}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/saving-goals" element={<Saving />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} /> {/* Use correct SettingsPage import */}
          <Route path="/wallet" element={<Wallet />} /> {/* Add Wallet Route */}
        </Routes>
      </div>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
