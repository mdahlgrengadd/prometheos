import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Hello from ESBuild!</h1>
      <p>This is a sample React application.</p>
      <button 
        onClick={() => alert('Button clicked!')}
        style={{ 
          padding: '8px 16px', 
          background: '#4f46e5', 
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Click me
      </button>
    </div>
  );
};

const container = document.getElementById('app');
createRoot(container).render(<App />); 