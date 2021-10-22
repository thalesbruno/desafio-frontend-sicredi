import * as React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";
import useLoginForm from "../hooks/useLoginForm";

const LoginPage = () => {
  const { loginUser } = useAuth();

  const { values, handleChange } = useLoginForm({ username: "", password: "" });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(values);
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Usuário</label>
      <Input
        fullWidth
        placeholder="Digite seu usuário"
        type="text"
        id="username"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Senha</label>
      <Input
        fullWidth
        placeholder="Digite sua senha"
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <Button fullWidth type="submit">
        Entrar
      </Button>
    </form>
  );
};

export default LoginPage;
