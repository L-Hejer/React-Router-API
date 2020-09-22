import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/pages/Home';
import Profile from './Components/pages/Profile';
import PrivateRoute from './Components/routes/PrivateRoute';
import AdminDashboard from './Components/pages/AdminDashboard';

import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);
  return (
    <Router>
      <NavBar login={login} logout={logout} isAuth={isAuth} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute
          path="/admin"
          component={AdminDashboard}
          isAuth={isAuth}
          name="Hejer"
        />
      </Switch>
    </Router>
  );
}

export default App;
