import * as React from 'react';
import Button from '../components/Button';
import useAuth from '../hooks/useAuth';
import useLoginForm from '../hooks/useLoginForm';

const LoginPage = () => {
  const { loginUser } = useAuth();

  const { values, handleChange } = useLoginForm({ username: '', password: '' });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(values)
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Usuário</label>
      <input type="text" id="username" name="username" value={values.username} onChange={handleChange} />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
      <button type="submit">Entrar</button>
      <Button />
    </form>
  );
}

export default LoginPage;