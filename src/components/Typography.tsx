import * as React from "react";
import styled, { css } from "styled-components";
import { get } from "lodash";

interface Props {
  children: React.ReactNode;
}

interface StyleProps {
  variant?: string;
}

const TypographyWrapper = styled.p<StyleProps>``;

export default function Typography({ children, ...props }: Props) {
  return <TypographyWrapper {...props}>{children}</TypographyWrapper>;
}
