import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DashBoard from './components/dashboard';
import Login from './components/login';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={DashBoard}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
