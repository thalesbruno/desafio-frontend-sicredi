import React, { useContext, useEffect, useState } from "react";
import PageWrapperHOC from "../components/hoc/PageWrapperHOC";
import DragonList from "../components/DragonList";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";
import styled from "styled-components";
import { DataUpdateContext } from "../contexts/DataUpdateContext";

const HomePageWrapper = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const compareAZ = (a: Dragon, b: Dragon) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
};

function HomePage() {
  const { getAllDragons } = useDragons();
  const { updated } = useContext(DataUpdateContext);

  const [dragonData, setDragonData] = useState<Array<Dragon> | []>([]);

  useEffect(() => {
    getAllDragons().then(({ data }) =>
      setDragonData(([] as Array<Dragon>).concat(data.sort(compareAZ)))
    );
    console.log(`dados atualizados: ${updated}`);
  }, [updated]);

  useEffect(() => {}, [dragonData]);

  return (
    <HomePageWrapper>
      <DragonList dragons={dragonData} />
    </HomePageWrapper>
  );
}

export default PageWrapperHOC(HomePage);
