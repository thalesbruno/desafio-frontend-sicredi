import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import useDragons from "../hooks/useDragons";
import useForm from "../hooks/useForm";
import { Dragon } from "../model/Dragon";

interface DragonFormData {
  name: string;
  type: string;
}

function EditDragon({ dragonData }: { dragonData: Array<Dragon> }) {
  const { id }: { id: string } = useParams();

  const dragonToEdit = dragonData.find((dragon) => dragon.id === id);

  const [dragon, setDragon] = useState<Dragon | any>({});
  const [loading, setLoading] = useState<boolean>(true);

  const { getDragonById, updateDragon } = useDragons();

  useEffect(() => {
    getDragonById(id).then(({ data }) => {
      setDragon(data);
      setLoading(false);
    });
  }, []);

  const { values, handleChange } = useForm<DragonFormData>({
    name: dragonToEdit?.name || "",
    type: dragonToEdit?.type || "",
  });

  const handleCreateDragon = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDragon: DragonFormData = { name: values.name, type: values.type };
    updateDragon(id, newDragon);
  };

  return loading ? (
    <div>carregando...</div>
  ) : (
    <form onSubmit={handleCreateDragon}>
      <label>
        Nome
        <Input
          fullWidth
          placeholder="Nome do dragão"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo
        <Input
          fullWidth
          placeholder="Tipo do dragão"
          type="text"
          name="type"
          value={values.type}
          onChange={handleChange}
        />
      </label>
      <Button marginTop="10px" fullWidth type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default EditDragon;
