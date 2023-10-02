import React from 'react';
// Import createRoot from "react-dom/client" instead of "react-dom"
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css'; // Assuming FontAwesome is used
//import './index.css'; // Global Styles

const rootElement = document.getElementById('root');

// Use createRoot from "react-dom/client"
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
