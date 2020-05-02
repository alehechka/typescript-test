import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/project/:id" component={ProjectDetails} />
        <PrivateRoute path="/create" component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
