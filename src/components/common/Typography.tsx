import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  tag?: any;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
}

interface StyleProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
}

const TypographyWrapper = styled.span<StyleProps>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;

export default function Typography({ children, tag, ...props }: Props) {
  return (
    <TypographyWrapper as={tag} {...props}>
      {children}
    </TypographyWrapper>
  );
}
