import * as React from "react";
import styled, { css } from "styled-components";
// import { get } from "lodash";

interface Props {
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
  padding?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  flexGrow?: number;
  maxWidth?: string;
}

interface StyleProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  padding?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  flexGrow?: number;
  maxWidth?: string;
}

const BoxWrapper = styled.div<StyleProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : 0)};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : 0)};
  padding-right: ${({ paddingRight }) => (paddingRight ? paddingRight : 0)};
  padding: ${({ padding }) => (padding ? padding : 0)};
  display: ${({ display }) => (display ? display : "block")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};
  flex-grow: ${({ flexGrow }) => (flexGrow ? flexGrow : 0)};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "none")};
`;

export default function Box({ children, ...props }: Props) {
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
}
