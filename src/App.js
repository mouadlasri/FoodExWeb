import React from 'react';
import logo from './logo.svg';

// Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Home from './Components/Home/Home';  


function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
    
  );
}

export default App;
