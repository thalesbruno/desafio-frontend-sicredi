import * as React from "react";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";
import InvisibleButton from "./common/InvisibleButton";
import NavLink from "./common/NavLink";
import DragonIcon from "./icons/DragonIcon";
import Logout from "./icons/Logout";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

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

const RightSide = styled.div`
  display: flex;
`;

export default function Header({ dark, setDark }: Props) {
  const { logoutUser } = useAuth();

  return (
    <HeaderWrapper>
      <NavLink to="/home">
        <DragonIcon />
      </NavLink>
      <RightSide>
        <InvisibleButton onClick={logoutUser}>
          <Logout />
        </InvisibleButton>
        <InvisibleButton onClick={() => setDark(!dark)}>
          {dark ? <Sun /> : <Moon />}
        </InvisibleButton>
      </RightSide>
    </HeaderWrapper>
  );
}
