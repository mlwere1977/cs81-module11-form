
/*
  Entry Point of the React App

  This is the main JavaScript file that kicks off the React application.
  It imports the necessary React libraries, the main `App` component, 
  and global styles from `index.css`. Then it renders the App inside 
  the root HTML element on the page.

  The app is wrapped in `<React.StrictMode>` to help catch potential problems 
  during development by enabling additional checks and warnings.
*/

import React from 'react'; // Import core React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM to handle rendering in the DOM
import App from './App'; // Import the main App component
import './index.css'; // Import global CSS styling

// Create a root element where the app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root DOM node
root.render(
  <React.StrictMode> {/* Enables development mode checks and warnings */}
    <App /> {/* This is where our actual app starts */}
  </React.StrictMode>
);

