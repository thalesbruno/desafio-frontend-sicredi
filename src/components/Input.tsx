import * as React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";

interface Props {
  fullWidth?: boolean;
  type?: "text" | "password";
  id?: string;
  name?: string;
  value: any;
  onChange: React.ChangeEventHandler<any>;
  placeholder?: string;
}

interface StyleProps {
  fullWidth?: boolean;
}

const InputWrapper = styled.input<StyleProps>`
  padding: 10px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

export default function Input(props: Props) {
  return <InputWrapper {...props} />;
}
