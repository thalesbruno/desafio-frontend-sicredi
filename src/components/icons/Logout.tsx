import React from "react";
import styled from "styled-components";

const SVGIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.palette.primary.contrastText};
  &:hover {
    fill: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export default function Logout() {
  return (
    <SVGIcon x="0px" y="0px" viewBox="0 0 512 512">
      <path d="M160,240H320V96a16,16,0,0,0-16-16H64A16,16,0,0,0,48,96V416a16,16,0,0,0,16,16H304a16,16,0,0,0,16-16V272H160Z" />
      <path d="M459.31,244.69,368,153.37,345.37,176l64,64H320v32h89.37l-64,64L368,358.63l91.31-91.32a16,16,0,0,0,0-22.62Z" />
    </SVGIcon>
  );
}
