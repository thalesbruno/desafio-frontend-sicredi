import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapperHOC from "../components/hoc/PageWrapperHOC";
import printDate from "../helpers/printDate";
import useDragons from "../hooks/useDragons";
import { Dragon } from "../model/Dragon";

function DragonPage() {
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
    <div>carregando</div>
  ) : (
    <div>
      <p>{dragon.name}</p>
      <p>{dragon.type}</p>
      <p>{printDate(dragon.createdAt)}</p>
    </div>
  );
}

export default PageWrapperHOC(DragonPage);
