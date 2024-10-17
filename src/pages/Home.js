import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleLoginClose = () => setShowLogin(false);
  const handleSignupClose = () => setShowSignup(false);

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
 
      if (!response.ok) {
        alert(data.message); // Alert with the specific message from the backend
      } else {
        alert(data.message || "Login successful");
        navigate('/dashboard'); // Redirect to the dashboard on successful login
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault(); 

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        setShowSignup(false);
      } else {
        alert(result.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="overlay"></div>
      <h1 className="home-title">BudgetBuddy</h1>
      <p className="home-description">Your go-to app for managing your finances effectively!</p>
      <div className="home-buttons">
        <button className="home-button" onClick={() => setShowLogin(true)}>Login</button>
        <button className="home-button" onClick={() => setShowSignup(true)}>Signup</button>
      </div>

      {/* Login Form */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleLoginClose}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </label>
              <button type="submit" className='login'>Login</button>
            </form>
            <p>Don't have an account? <span className="link" onClick={() => { setShowLogin(false); setShowSignup(true); }}>Sign up</span></p>
          </div>
        </div>
      )}

      {/* Signup Form */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleSignupClose}>&times;</span>
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
              </label>
              <button type="submit" className='sign'>Signup</button>
            </form>
            <p>Already have an account? <span className="link" onClick={() => { setShowSignup(false); setShowLogin(true); }}>Login</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
