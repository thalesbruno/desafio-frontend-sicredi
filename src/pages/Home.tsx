import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import DragonList from "../components/DragonList";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";
import compareAZ from "../helpers/compareAZ";
import cssByMediaScreen from "../helpers/cssByMediaScreen";
import Typography from "../components/common/Typography";
import Button from "../components/common/Button";

interface Props {
  dragonData: Array<Dragon> | [];
  setDragonData: React.Dispatch<React.SetStateAction<Dragon[] | []>>;
}

const HomePageHead = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const HomePageWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  ${cssByMediaScreen({
    xs: css`
      padding: 14px 0;
      max-width: 90%;
    `,
    md: css`
      padding: 20px 0;
    `,
    xl: css`
      max-width: 80%;
    `,
  })}
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
      <HomePageHead>
        <Link to="/adicionar-dragao">
          {/* <Typography tag="h3">Adicionar dragão</Typography> */}
          <Button variant="primary">Adicionar dragão</Button>
        </Link>
      </HomePageHead>
      <DragonList dragons={dragonData} setDragons={setDragonData} />
    </HomePageWrapper>
  );
}
