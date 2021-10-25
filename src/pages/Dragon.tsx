import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Typography from "../components/common/Typography";
import DragonLogo from "../components/icons/DragonLogo";
import cssByMediaScreen from "../helpers/cssByMediaScreen";
import printDate from "../helpers/printDate";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";

const CardWrapper = styled.div`
  padding: 30px;
  width: 100%;
  background-color: #fff;
`;

const DragonPageWrapper = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  ${cssByMediaScreen({
    xs: css`
      padding: 14px 0;
      max-width: 800px;
    `,
  })}
`;

export default function DragonPage() {
  const { id }: { id: string } = useParams();
  const { getDragonById } = useDragons();
  const [dragon, setDragon] = useState<Dragon | any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDragonById(id).then(({ data }) => {
      setDragon(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Typography textAlign="center" marginBottom="20px" tag={"h4"}>
      Carregando...
    </Typography>
  ) : (
    <DragonPageWrapper>
      <CardWrapper>
        <Typography textAlign="center" marginBottom="20px" tag={"h2"}>
          <DragonLogo />
        </Typography>
        <Typography marginBottom="20px" textAlign="center" tag="h2">
          {dragon.name}
        </Typography>
        <Typography marginBottom="20px" textAlign="center" tag="h3">
          {dragon.type}
        </Typography>
        <Typography marginBottom="20px" textAlign="center" tag="h4">
          Criado em {printDate(dragon.createdAt)}
        </Typography>
      </CardWrapper>
    </DragonPageWrapper>
  );
}
