import React from 'react';
import Header from '../layouts/Header';
import Calculator from './Calculator';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Calculator"/>
      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
