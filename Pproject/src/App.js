import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  
import Login from './features/Login/Login';
import Home from './features/Home/Home';

function App(){

    return (
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path='/main' component={Home} />
        </Switch>
      </Router>
      );
}

export default App;
 

