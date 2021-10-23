import React from "react";
import styled from "styled-components";
import { Dragon } from "../model/Dragon";
import DragonListItem from "./DragonListItem";

interface Props {
  dragons: Array<Dragon>;
}

const DragonListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function DragonList({ dragons }: Props) {
  return (
    <DragonListWrapper>
      {dragons.map((dragon) => (
        <DragonListItem key={dragon.id} dragon={dragon} />
      ))}
    </DragonListWrapper>
  );
}
