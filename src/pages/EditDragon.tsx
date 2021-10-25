import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Typography from "../components/common/Typography";
import cssByMediaScreen from "../helpers/cssByMediaScreen";
import useDragons from "../hooks/useDragons";
import useForm from "../hooks/useForm";
import { Dragon } from "../model/Dragon";

interface DragonFormData {
  name: string;
  type: string;
}

const FormWrapper = styled.div`
  padding: 30px;
  width: 100%;
  background-color: #fff;
`;

const LoginPageWrapper = styled.div`
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

function EditDragon({ dragonData }: { dragonData: Array<Dragon> }) {
  const { id }: { id: string } = useParams();

  const dragonToEdit = dragonData.find((dragon) => dragon.id === id);

  const [dragon, setDragon] = useState<Dragon | any>({});
  const [loading, setLoading] = useState<boolean>(true);

  const { getDragonById, updateDragon } = useDragons();

  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

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

  const handleEditDragon = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUpdated(true);
    const newDragon: DragonFormData = { name: values.name, type: values.type };
    try {
      updateDragon(id, newDragon);
      setIsUpdating(false);
      setIsUpdated(true);
    } catch (error) {
      console.log(error);
      setIsUpdating(false);
    }
  };

  return isUpdated ? (
    <LoginPageWrapper>
      <FormWrapper>
        <Typography tag="h4">Dragrão atualizado com sucesso ✅</Typography>
        <p>
          <Link to="/home">Voltar para a página inicial</Link>
        </p>
      </FormWrapper>
    </LoginPageWrapper>
  ) : loading ? (
    <LoginPageWrapper>
      <FormWrapper>
        <Typography textAlign="center" marginBottom="20px" tag={"h4"}>
          Carregando...
        </Typography>
      </FormWrapper>
    </LoginPageWrapper>
  ) : (
    <LoginPageWrapper>
      <FormWrapper>
        <Typography textAlign="center" marginBottom="20px" tag={"h2"}>
          Editar dragão
        </Typography>
        <form onSubmit={handleEditDragon}>
          <label>
            <Typography tag={"p"} marginBottom="5px">
              Nome
            </Typography>
            <Input
              fullWidth
              disabled={isUpdating}
              required
              marginBottom="10px"
              placeholder="Nome do dragão"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <Typography tag={"p"} marginBottom="5px">
              Tipo
            </Typography>
            <Input
              fullWidth
              disabled={isUpdating}
              required
              marginBottom="10px"
              placeholder="Tipo do dragão"
              type="text"
              name="type"
              value={values.type}
              onChange={handleChange}
            />
          </label>
          <Button variant="primary" marginTop="10px" fullWidth type="submit">
            Cadastrar
          </Button>
        </form>
      </FormWrapper>
    </LoginPageWrapper>
  );
}

export default EditDragon;
