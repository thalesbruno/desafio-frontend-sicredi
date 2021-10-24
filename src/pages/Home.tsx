import React, { useEffect, useState } from "react";
import DragonList from "../components/DragonList";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";
import styled from "styled-components";
import compareAZ from "../helpers/compareAZ";
import { Link } from "react-router-dom";

interface Props {
  dragonData: Array<Dragon> | [];
  setDragonData: React.Dispatch<React.SetStateAction<Dragon[] | []>>;
}

const HomePageWrapper = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default function HomePage({ dragonData, setDragonData }: Props) {
  const { getAllDragons } = useDragons();

  // const [dragonData, setDragonData] = useState<Array<Dragon> | []>([]);

  useEffect(() => {
    getAllDragons().then(({ data }) =>
      setDragonData(([] as Array<Dragon>).concat(data.sort(compareAZ)))
    );
  }, []);

  useEffect(() => {}, [dragonData]);

  return (
    <HomePageWrapper>
      <Link to="/adicionar-dragao">Adicionar dragão</Link>
      <DragonList dragons={dragonData} setDragons={setDragonData} />
    </HomePageWrapper>
  );
}
