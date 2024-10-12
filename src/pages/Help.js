import React from 'react';
import '../styles/help.css'; 

const Help = () => {
  return (
    <div className='helppage'>
    <div className="help-container">
      <h1>Help & Support</h1>
      <p>Welcome to the Help section. Here, you can find the answers to frequently asked questions, tutorials, and troubleshooting tips.</p>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li><strong>How do I create a new goal?</strong> - Go to the Saving Goals section and click "Add New Goal". Fill out the details and save your goal.</li>
        <li><strong>How can I track my transactions?
                
        </strong> - Navigate to the Transactions page, where you can view a summary of your financial activities.</li>
        <li><strong>How do I analyze my spending?</strong> - Use the Analytics section to view detailed charts and reports of your spending patterns.</li>
        <li><strong>Where can I manage my account settings?</strong> - You can manage your account settings in the "Settings" tab in the sidebar.</li>
      </ul>

      <h2>Troubleshooting</h2>
      <p>If you are experiencing issues with the application, please try the following steps:</p>
      <ul>
        <li>Ensure your internet connection is stable.</li>
        <li>Clear your browser cache and reload the page.</li>
        <li>If the issue persists, contact our support team at <a href="mailto:support@example.com">support@example.com</a>.</li>
      </ul>

      <h2>Contact Support</h2>
      <p>If you need further assistance, please reach out to our support team via email or phone.</p>
      <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
      <p>Phone: +1 234-567-890</p>
    </div>
    </div>
  );
};

export default Help;
