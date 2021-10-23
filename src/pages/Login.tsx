import * as React from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import PageWrapperHOC from "../components/hoc/PageWrapperHOC";
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
      <label>
        Usuário
        <Input
          fullWidth
          placeholder="Digite seu usuário"
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha
        <Input
          fullWidth
          placeholder="Digite sua senha"
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <Button marginTop="10px" fullWidth type="submit">
        Entrar
      </Button>
    </form>
  );
};

export default PageWrapperHOC(LoginPage);
