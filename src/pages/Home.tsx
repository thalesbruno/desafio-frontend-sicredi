import React, { useEffect, useState } from "react";
import PageWrapperHOC from "../components/hoc/PageWrapperHOC";
import DragonList from "../components/DragonList";
import useGetDragons from "../hooks/useGetDragons";
import { Dragon } from "../model/Dragon";

const compareAZ = (a: Dragon, b: Dragon) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
};

function HomePage() {
  const { getAllDragons } = useGetDragons();
  const [dragonData, setDragonData] = useState<Array<Dragon> | []>([]);

  useEffect(() => {
    getAllDragons().then(({ data }) =>
      setDragonData(([] as Array<Dragon>).concat(data.sort(compareAZ)))
    );
  }, []);

  useEffect(() => {}, [dragonData]);

  return (
    <div>
      <DragonList dragons={dragonData} />
    </div>
  );
}

export default PageWrapperHOC(HomePage);
