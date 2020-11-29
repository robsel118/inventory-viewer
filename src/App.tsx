import React from 'react';
import Inventory from './components/Inventory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import NavList from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Router>
        <nav>
          <NavList>
            <li>
              <NavLink activeClassName='active' to="/shirts">Shirts</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/accessories">Accessories</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/jackets">Jackets</NavLink>
            </li>
          </NavList>
        </nav>
        <Switch>
          <>
            <Route exact path={`/jackets`}>
              <Inventory tag="jackets" />
            </Route>
            <Route exact path="/shirts">
              <Inventory tag="shirts" />
            </Route>
            <Route exact path="/accessories">
              <Inventory tag="accessories" />
            </Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
