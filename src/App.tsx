import React from 'react';
import Inventory from './components/Inventory';
import NavList from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

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
          <Route path={`/:category`} component={Inventory}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
