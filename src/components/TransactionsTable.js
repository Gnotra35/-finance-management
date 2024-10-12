import React from 'react';
import '../styles/TransactionsTable.css';
import SavingsGoal from '../components/saving-goal';

const TransactionTable = () => {
  const savingsGoals = [
    {
      title: 'Macbook pro',
      amount: 1650,
      progress: 25,
      savings: 412.50
    },
    {
      title: 'New car',
      amount: 60000,
      progress: 42,
      savings: 25200
    },
    {
      title: 'New House',
      amount: 150000,
      progress: 20,
      savings: 4500
    }
  ];

  
  const transactions = [
    {
      date: '27 Jul 24',
      amount: -100,
      paymentName: 'Spotify',
      method: 'VISA - 1476',
      category: 'Subscription'
    },
    
  
    {
      date: '27 Jul 24',
      amount: -100,
      paymentName: 'Netflix',
      method: 'VISA - 1234',
      category: 'Subscription'
    },
    {
      date: '27 Jul 24',
      amount: -100,
      paymentName: 'Netflix',
      method: 'VISA - 1234',
      category: 'Subscription'
    }
  ];

  return (
    <div className="transaction-table-container">
      <div className="transaction-savings-row">
        <div className="transaction-container">
          <h3>Recent Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Name</th>
                <th>Method</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.paymentName}</td>
                  <td>{transaction.method}</td>
                  <td>{transaction.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="savings-container">
          <h3>Savings Goals</h3>
          <div className="savings-goals-container">
            {savingsGoals.map((goal, index) => (
              <SavingsGoal key={index} title={goal.title} amount={goal.amount} progress={goal.progress} savings={goal.savings} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;