import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  useEffect(() => {
    window.onpopstate = function(event) {
      console.log(`2 window.onpopstate location: ${document.location}, state: ${event.state}`);
    };
  }, []);
  return (
    <div>
      <button onClick={() => window.history.pushState('v1', '', '/page1')}>page1</button>
      <button onClick={() => window.history.pushState('v2', '', '/page2')}>page2</button>
    </div>
  );
}
