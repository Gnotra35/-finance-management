import React, { useState } from 'react';
import { User, Lock, Bell, Shield, Globe, Trash } from 'react-feather';
import '../styles/SettingsPage.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [saveMessage, setSaveMessage] = useState(""); 

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleDeleteAccount = () => {
    console.log("Account deleted.");
    setConfirmDelete(false);
  };

  const handleDeleteClick = () => {
    setConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  const handleSaveChanges = () => {
    console.log("Changes saved:", { email, password });
    setIsEditing(false);
    setSaveMessage("Changes saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleCancelChanges = () => {
    setEmail("user@example.com");
    setPassword("");
    setIsEditing(false);
  };

  return (
    <div className={`settings-page ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="settings-title">Settings</h1>

      <div className="settings-sections">
        {/* Account Settings Section */}
        <div className="settings-card">
          <User className="settings-icon" />
          <h2>Account Information</h2>
          <div className="settings-item">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="settings-item">
            <label>Change Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="settings-card">
          <Shield className="settings-icon" />
          <h2>Privacy Settings</h2>
          <div className="settings-item">
            <label>Profile Visibility:</label>
            <select>
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
          <div className="settings-item">
            <label>Data Sharing:</label>
            <input type="checkbox" /> Share data with third parties
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <Bell className="settings-icon" />
          <h2>Notification Settings</h2>
          <div className="settings-item">
            <label>Email Notifications:</label>
            <input type="checkbox" defaultChecked /> Enable
          </div>
          <div className="settings-item">
            <label>SMS Notifications:</label>
            <input type="checkbox" /> Enable
          </div>
        </div>

        {/* Security Settings */}
        <div className="settings-card">
          <Lock className="settings-icon" />
          <h2>Security Settings</h2>
          <div className="settings-item">
            <label>Two-Factor Authentication:</label>
            <input type="checkbox" /> Enable
          </div>
        </div>

        {/* Preferences */}
        <div className="settings-card">
          <Globe className="settings-icon" />
          <h2>Preferences</h2>
          <div className="settings-item">
            <label>Language:</label>
            <select>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="settings-item">
            <label>Dark Mode:</label>
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} /> Enable Dark Mode
          </div>
        </div>

        {/* Danger Zone */}
        <div className="settings-card danger-zone">
          <Trash className="settings-icon danger-icon" />
          <h2>Danger Zone</h2>
          {confirmDelete ? (
            <div className="delete-confirmation">
              <p>Are you sure you want to delete your account? This action cannot be undone.</p>
              <button className="danger-btn" onClick={handleDeleteAccount}>Delete</button>
              <button className="cancel-btn" onClick={handleCancelDelete}>Cancel</button>
            </div>
          ) : (
            <button className="danger-btn" onClick={handleDeleteClick}>Delete Account</button>
          )}
        </div>
      </div>

      {/* Save and Cancel Changes Buttons */}
      <div className="settings-actions">
        <button onClick={handleSaveChanges} className="danger-btn">Save Changes</button>
        <button onClick={handleCancelChanges} className="cancel-btn">Cancel Changes</button>
      </div>

      {saveMessage && <div className="save-message">{saveMessage}</div>}
    </div>
  );
};

export default Settings;
