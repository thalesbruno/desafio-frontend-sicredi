import { Switch, Route, Redirect } from 'react-router-dom';
// import PrivateRoute from './components/hoc/PrivateRoute';
import { UserContext } from './contexts/UserContext';
import useCheckLogin from './hooks/useCheckLogin';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useCheckLogin();

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to={'/home'} /> : <Redirect to={'/login'} />}
        </Route>
        <Route path="/home">
          {isLoggedIn ? <HomePage /> : <Redirect to={'/login'} />}
        </Route>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
