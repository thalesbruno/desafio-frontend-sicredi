import * as React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type: "success" | "error" | "info" | "success";
  fullWidth?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

interface StyleProps {
  type: "success" | "error" | "info" | "success";
  fullWidth?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

const AlertWrapper = styled.div<StyleProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  opacity: 0.9;
  background-color: ${({ theme, type }) => get(theme, `palette.${type}.main`)};
  color: ${({ theme, type }) => get(theme, `palette.${type}.contrastText`)};
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

export default function Alert({ children, ...props }: Props) {
  return <AlertWrapper {...props}>{children}</AlertWrapper>;
}
