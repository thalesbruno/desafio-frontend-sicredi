import * as React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

interface StyleProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

const InvisibleButtonWrapper = styled.button<StyleProps>`
  cursor: pointer;
  border: none;
  padding: 5px;
  background-color: transparent;

  // custom
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
`;

export default function InvisibleButton({ children, ...props }: Props) {
  return <InvisibleButtonWrapper {...props}>{children}</InvisibleButtonWrapper>;
}
