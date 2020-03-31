import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

// CSS
import './App.css';

// Components
import Home from './containers/Home';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;