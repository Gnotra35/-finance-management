import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>BudgetBuddy</h1>
      <p>Your go-to app for managing your finances effectively!</p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '10px', padding: '10px 20px' }}>Login</button>
        <button style={{ padding: '10px 20px' }}>Signup</button>
      </div>
    </div>
  );
};

export default Home;
