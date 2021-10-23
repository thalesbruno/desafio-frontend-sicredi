import React, { useContext } from "react";
import styled from "styled-components";
import compareAZ from "../helpers/compareAZ";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";
import Button from "./common/Button";

interface Props {
  dragon: Dragon;
  setDragons: React.Dispatch<React.SetStateAction<Dragon[] | []>>;
}

const DragonListItemWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  margin: 15px 0;
  padding: 10px;
`;

export default function DragonListItem({ dragon, setDragons }: Props) {
  const { getAllDragons, deleteDragon } = useDragons();

  const handleRemove = async () => {
    try {
      await deleteDragon(dragon.id);
      await getAllDragons().then(({ data }) => {
        setDragons(([] as Array<Dragon>).concat(data.sort(compareAZ)));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DragonListItemWrapper>
      <p>Nome: {dragon.name}</p>
      <p>Tipo: {dragon.type}</p>
      <p>Criado em: {dragon.createdAt}</p>
      <Button>Editar</Button>
      <Button onClick={handleRemove}>Remover</Button>
    </DragonListItemWrapper>
  );
}
