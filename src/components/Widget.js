
import React from 'react';
import '../styles/Widget.css';

const Widget = ({ title, value, change }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <span className={`change ${change.includes('-') ? 'negative' : 'positive'}`}>{change}</span>
    </div>
  );
};

export default Widget;
