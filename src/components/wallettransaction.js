import React from 'react';

const WalletTransactions = () => {
  const wallet_transactions = [
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
    }
  ];

  return (
    <div className="wallet-table-container">
      <div className="wallet-savings-row">
        <div className="wallet-container">
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
              {wallet_transactions.map((transaction, index) => (
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
      </div>
    </div>
  );
};

export default WalletTransactions;
