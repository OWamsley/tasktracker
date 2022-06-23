import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-ugfsod-i.us.auth0.com"
  clientId="QGddAgEAjXAL2EcYw7ilpHPsQvGyB48f"
  redirectUri="http://localhost:3000/"
  audience="https:tasktracker/api"
  scope="read:current_user update:current_user_metadata"
>
  <App />
</Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
