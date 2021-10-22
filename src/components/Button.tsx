import * as React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export default function Button() {
  return (
    <ButtonWrapper>
      botão
    </ButtonWrapper>
  )
}