import * as React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  variant?: string;
  fullWidth?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

interface StyleProps {
  variant?: string;
  fullWidth?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

const ButtonWrapper = styled.button<StyleProps>`
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
  padding: 10px;
  background-color: ${({ theme, variant }) =>
    get(theme, `palette.${variant}.main`)};
  color: ${({ theme, variant }) =>
    get(theme, `palette.${variant}.contrastText`)};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  // custom
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
`;

export default function Button({ children, ...props }: Props) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}
