import React from 'react';
import Inventory from './components/Inventory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={`/:category`} component={Inventory}>
          </Route>
        
          <Route exact path={`/`}>
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
