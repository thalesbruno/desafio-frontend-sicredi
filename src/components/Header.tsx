import * as React from "react";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";
import Button from "./Button";
import NavLink from "./NavLink";

const HeaderWrapper = styled.nav`
  min-height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

export default function Header() {
  const { logoutUser } = useAuth();
  return (
    <HeaderWrapper>
      <NavLink to="/home">Desafio</NavLink>
      <Button onClick={logoutUser}>Sair</Button>
    </HeaderWrapper>
  );
}
