import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css'; // Light
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/500.css'; // Medium
import '@fontsource/roboto/700.css'; // Bold


import '@fontsource/open-sans/300.css'; // Light
import '@fontsource/open-sans/400.css'; // Regular
import '@fontsource/open-sans/600.css'; // Semi-Bold
import '@fontsource/open-sans/700.css'; // Bold

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
