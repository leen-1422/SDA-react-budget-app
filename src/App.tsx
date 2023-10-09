import React from 'react';
import logo from './logo.svg';
import './App.css';

import Income from './compnent/Income';
import Expense from './compnent/Expense';
import Target from './compnent/Target';




function App() {
  return (
    <div className="App">
      <Income />
      <Expense />
      <Target />
    </div>
  );
}

export default App;
