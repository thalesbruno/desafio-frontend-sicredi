import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { UserContext } from './contexts/UserContext';
import useGetUser from './hooks/useGetUser';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  const { isLoggedIn } = useGetUser();
  return (
    <UserContext.Provider value={{ isLoggedIn }}>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to={'/home'} /> : <Redirect to={'/login'} />}
        </Route>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;

// token
// https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzdWFyaW8iLCJwYXNzd29yZCI6InNlbmhhZm9ydGUifQ.NJhVOdT31KV3BYAJfgHz7AXOS1NfA5QgMTl4wD8_uYY