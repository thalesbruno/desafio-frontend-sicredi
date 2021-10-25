import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import cssByMediaScreen from "../helpers/cssByMediaScreen";
import { Dragon } from "../model/Dragon";
import DragonListItem from "./DragonListItem";

interface Props {
  dragons: Array<Dragon>;
  setDragons: React.Dispatch<React.SetStateAction<Dragon[] | []>>;
}

const DragonListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${cssByMediaScreen({
    xs: css`
      justify-content: center;
    `,
    sm: css`
      justify-content: space-evenly;
    `,
  })}
`;

export default function DragonList({ dragons, setDragons }: Props) {
  useEffect(() => {}, [dragons]);

  return (
    <DragonListWrapper>
      {dragons.map((dragon) => (
        <DragonListItem
          key={dragon.id}
          dragon={dragon}
          setDragons={setDragons}
        />
      ))}
    </DragonListWrapper>
  );
}
