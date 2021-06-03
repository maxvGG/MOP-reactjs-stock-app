
import Stock from './Stock';
import './App.css';
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

// ik wil hier in de home page maken dus niet in component home maar hier en dan een link naar /stock met de stock name die ik uit een andere api haal

function App() {
  return (
    <Router>
      <div className="App">
        <NavLink to="/stock" stock="AMZN">stocks</NavLink>
        <Route path='/stock' component={Stock} ></Route>
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
