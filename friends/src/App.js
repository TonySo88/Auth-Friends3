import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App-body">
        <h1>Auth Friends</h1>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList}/>
          <Route path="/loginform" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
