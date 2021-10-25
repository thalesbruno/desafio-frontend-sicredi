import * as React from "react";
import styled, { css } from "styled-components";

interface Props {
  fullWidth?: boolean;
  type?: "text" | "password";
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  value: any;
  onChange: React.ChangeEventHandler<any>;
  placeholder?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

interface StyleProps {
  fullWidth?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

const InputWrapper = styled.input<StyleProps>`
  padding: 10px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
`;

export default function Input(props: Props) {
  return <InputWrapper {...props} />;
}
