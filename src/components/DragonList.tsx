import React from "react";
import { Dragon } from "../model/Dragon";
import DragonListItem from "./DragonListItem";

interface Props {
  dragons: Array<Dragon>;
}

export default function DragonList({ dragons }: Props) {
  return (
    <>
      {dragons.map((dragon) => (
        <DragonListItem key={dragon.id} dragon={dragon} />
      ))}
    </>
  );
}
