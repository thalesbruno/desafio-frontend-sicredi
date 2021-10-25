import * as React from "react";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Typography from "../components/common/Typography";
import DragonLogo from "../components/icons/DragonLogo";
import cssByMediaScreen from "../helpers/cssByMediaScreen";
import useAuth from "../hooks/useAuth";
import useLoginForm from "../hooks/useForm";

interface LoginData {
  username: string;
  password: string;
}

const FormWrapper = styled.div`
  padding: 30px;
  width: 100%;
  background-color: #fff;
`;

const LoginPageWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  ${cssByMediaScreen({
    xs: css`
      padding: 14px 0;
      max-width: 500px;
    `,
    // sm: css`
    //   padding: 14px 0;
    //   max-width: 80%;
    // `,
    // md: css`
    //   padding: 20px 0;
    //   max-width: 60%;
    // `,
  })}
`;

export default function LoginPage() {
  const { loginUser } = useAuth();

  const { values, handleChange } = useLoginForm<LoginData>({
    username: "",
    password: "",
  });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser(values);
  };

  return (
    <LoginPageWrapper>
      <FormWrapper>
        <Typography textAlign="center" marginBottom="20px" tag={"h2"}>
          <DragonLogo />
        </Typography>
        <form onSubmit={handleLogin}>
          <label>
            <Typography tag={"p"} marginBottom="5px">
              Usuário
            </Typography>
            <Input
              fullWidth
              required
              marginBottom="10px"
              placeholder="Usuário de exemplo: usuario"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <label>
            <Typography tag={"p"} marginBottom="5px">
              Senha
            </Typography>
            <Input
              fullWidth
              required
              marginBottom="10px"
              placeholder="Senha de exemplo: senhaforte"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <Button variant="primary" marginTop="10px" fullWidth type="submit">
            Entrar
          </Button>
        </form>
      </FormWrapper>
    </LoginPageWrapper>
  );
}
