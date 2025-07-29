/*
  Main Application Component

  This is the top-level component of the React app.
  It imports the `ContactForm` component and renders it inside a container div.
  The `App` component serves as the root for all other components 
  and is rendered into the HTML page via `index.js`.

  This setup keeps the app modular, and clean, and follows React best practices.
*/

import React from 'react'; // Bring in React so we can use JSX and components
import ContactForm from './ContactForm'; // Import our custom contact form component

// Define the App component
function App() {
  return (
    <div className="App"> {/* Container with class for styling */}
      <ContactForm /> {/* Render the contact form inside this container */}
    </div>
  );
}

export default App; // Export App so it can be used in index.js
