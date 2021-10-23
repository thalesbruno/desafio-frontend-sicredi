import React, { useContext, useEffect, useState } from "react";
import PageWrapperHOC from "../components/hoc/PageWrapperHOC";
import DragonList from "../components/DragonList";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";
import styled from "styled-components";
import compareAZ from "../helpers/compareAZ";

const HomePageWrapper = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function HomePage() {
  const { getAllDragons } = useDragons();

  const [dragonData, setDragonData] = useState<Array<Dragon> | []>([]);

  useEffect(() => {
    getAllDragons().then(({ data }) =>
      setDragonData(([] as Array<Dragon>).concat(data.sort(compareAZ)))
    );
  }, []);

  useEffect(() => {}, [dragonData]);

  return (
    <HomePageWrapper>
      <DragonList dragons={dragonData} setDragons={setDragonData} />
    </HomePageWrapper>
  );
}

export default PageWrapperHOC(HomePage);
