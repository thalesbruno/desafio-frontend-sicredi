import React from "react";
import styled from "styled-components";
import { Dragon } from "../model/Dragon";
import Button from "./common/Button";

interface Props {
  dragon: Dragon;
}

const DragonListItemWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  margin: 15px 0;
  padding: 10px;
`;

export default function DragonListItem({ dragon }: Props) {
  return (
    <DragonListItemWrapper>
      <p>Nome: {dragon.name}</p>
      <p>Tipo: {dragon.type}</p>
      <p>Criado em: {dragon.createdAt}</p>
      <Button>Editar</Button>
      <Button>Remover</Button>
    </DragonListItemWrapper>
  );
}
