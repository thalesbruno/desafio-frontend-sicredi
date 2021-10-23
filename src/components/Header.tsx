import * as React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import useAuth from "../hooks/useAuth";
import Button from "./common/Button";
import NavLink from "./common/NavLink";

interface Props {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderWrapper = styled.nav`
  min-height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

const RightSide = styled.div``;

export default function Header({ dark, setDark }: Props) {
  const { logoutUser } = useAuth();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <HeaderWrapper>
      <NavLink to="/home">Desafio</NavLink>
      <RightSide>
        <Button onClick={logoutUser}>Sair</Button>
        <Button onClick={() => setDark(!dark)}>
          {dark ? "Switch to Light" : "Switch to Dark"}
        </Button>
      </RightSide>
    </HeaderWrapper>
  );
}
