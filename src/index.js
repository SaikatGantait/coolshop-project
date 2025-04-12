import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can add your global CSS here
import App from './App'; // Assuming your main App component is in src/App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
