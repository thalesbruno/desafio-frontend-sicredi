import * as React from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../contexts/UserContext';

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

export default function PrivateRoute({ path, component }: PrivateRouteProps) {
  const { isLoggedIn } = React.useContext(UserContext);

  if (isLoggedIn) {
    return <Route path={path} component={component}></Route>
  }
  return (
    <Redirect to="/login" />
  )
}