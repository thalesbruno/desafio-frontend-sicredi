import React from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import PageWrapperHOC from "../components/hoc/PageWrapperHOC";
import useDragons from "../hooks/useDragons";
import useForm from "../hooks/useForm";

interface DragonFormData {
  name: string;
  type: string;
}

function AddDragon() {
  const { values, handleChange } = useForm<DragonFormData>({
    name: "",
    type: "",
  });
  const { createDragon } = useDragons();

  const handleCreateDragon = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDragon: DragonFormData = { name: values.name, type: values.type };
    createDragon(newDragon);
  };

  return (
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

export default PageWrapperHOC(AddDragon);
