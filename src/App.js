import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Sepatu from "./Barang/Sepatu";


function App() {


  return (
    <Router>
    <div className="App-header">
      <nav className="NavBar">
        <ul className="ul">
          <li className="li">
            <Link to="/">Tampilan Pemesanan</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Sepatu} />
      </Switch>


    </div>

  </Router>
  );
}

export default App;
