import React from "react";
import { Dragon } from "../model/Dragon";

interface Props {
  dragon: Dragon;
}

export default function DragonListItem({ dragon }: Props) {
  return <p>{dragon.name}</p>;
}
