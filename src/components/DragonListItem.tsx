import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import compareAZ from "../helpers/compareAZ";
import printDate from "../helpers/printDate";
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
  width: 220px;
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
      <Link to={`/dragao/${dragon.id}`}>Expandir</Link>
      <p>Nome: {dragon.name}</p>
      <p>Tipo: {dragon.type}</p>
      <p>Criado em: {printDate(dragon.createdAt)}</p>
      <Button>Editar</Button>
      <Button onClick={handleRemove}>Remover</Button>
    </DragonListItemWrapper>
  );
}
