import * as React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
}

interface StyleProps {
  variant?: string;
  fullWidth?: boolean;
}

const ButtonWrapper = styled.button<StyleProps>`
  background-color: ${({ theme, variant }) =>
    get(theme, `palette.${variant}.primary`)};
  padding: 10px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export default function Button({ children, ...props }: Props) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}
