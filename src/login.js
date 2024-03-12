import React from 'react';
import ReactDOM from 'react-dom/client';
import './login.css';
import loginApp from './loginApp';
import reportWebVitals from './reportWebVitals';

const loginView = ReactDOM.createRoot(document.getElementById('loginApp'));
loginView.render(
    <React.StrictMode>
        <loginApp />
    </React.StrictMode>
);

reportWebVitals();