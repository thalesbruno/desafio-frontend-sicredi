import * as React from 'react';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const { logoutUser } = useAuth();
  return (
    <button onClick={logoutUser}>Sair</button>
  );
}

export default HomePage;