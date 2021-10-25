import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import compareAZ from "../helpers/compareAZ";
import printDate from "../helpers/printDate";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";
import InvisibleButton from "./common/InvisibleButton";
import Delete from "./icons/Delete";
import Detail from "./icons/Detail";
import Edit from "./icons/Edit";

interface Props {
  dragon: Dragon;
  setDragons: React.Dispatch<React.SetStateAction<Dragon[] | []>>;
}

const DragonListItemBody = styled.div``;

const DragonListItemFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DragonListItemWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  margin: 15px 0;
  padding: 10px;
  min-width: 220px;
  background-color: ${({ theme }) => theme.palette.background.auxiliary};
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

  const history = useHistory();

  const handleEdit = () => {
    history.push(`/editar-dragao/${dragon.id}`);
  };

  return (
    <DragonListItemWrapper>
      <DragonListItemBody>
        <p>Nome: {dragon.name}</p>
        <p>Tipo: {dragon.type}</p>
        <p>Criado em: {printDate(dragon.createdAt)}</p>
      </DragonListItemBody>
      <DragonListItemFooter>
        <InvisibleButton>
          <Link to={`/dragao/${dragon.id}`}>
            <Detail />
          </Link>
        </InvisibleButton>
        <InvisibleButton onClick={handleEdit}>
          <Edit />
        </InvisibleButton>
        <InvisibleButton onClick={handleRemove}>
          <Delete />
        </InvisibleButton>
      </DragonListItemFooter>
    </DragonListItemWrapper>
  );
}
