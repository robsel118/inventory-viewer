import React from 'react';
import Inventory from './components/Inventory';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/jackets">
            <Inventory tag="jackets" />
          </Route>
          <Route path="/shirts">
            <Inventory tag="shirts" />
          </Route>
          <Route path="/accessories">
            <Inventory tag="accessories" />
          </Route>
          <Route path="/">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
