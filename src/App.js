import React from 'react';
import logo from './logo.svg';

// Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Home from './Components/Home/Home';  
import Orders from './Components/Orders/Orders';
import Items from './Components/Items/Items';
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/orders",
    sidebar: () => <div>orders!</div>,
    main: () => <h2>Orders</h2>
  }
];

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
