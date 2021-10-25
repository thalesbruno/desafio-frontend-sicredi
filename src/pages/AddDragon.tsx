import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Typography from "../components/common/Typography";
import cssByMediaScreen from "../helpers/cssByMediaScreen";
import useDragons from "../hooks/useDragons";
import useForm from "../hooks/useForm";

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

export default function AddDragon() {
  const { values, handleChange } = useForm<DragonFormData>({
    name: "",
    type: "",
  });
  const { createDragon } = useDragons();

  const [isCreating, setIsCreating] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const handleCreateDragon = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsCreating(true);
    const newDragon: DragonFormData = { name: values.name, type: values.type };
    try {
      createDragon(newDragon);
      setIsCreating(false);
      setIsCreated(true);
    } catch (error) {
      console.log(error);
      setIsCreating(false);
    }
    setIsCreating(false);
  };

  return isCreated ? (
    <LoginPageWrapper>
      <FormWrapper>
        <Typography tag="h4">Dragrão criado com sucesso ✅</Typography>
        <p>
          <Link to="/home">Voltar para a página inicial</Link>
        </p>
      </FormWrapper>
    </LoginPageWrapper>
  ) : (
    <LoginPageWrapper>
      <FormWrapper>
        <Typography textAlign="center" marginBottom="20px" tag={"h2"}>
          Cadastrar novo dragão
        </Typography>
        <form onSubmit={handleCreateDragon}>
          <label>
            <Typography tag={"p"} marginBottom="5px">
              Nome
            </Typography>
            <Input
              fullWidth
              disabled={isCreating}
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
              required
              disabled={isCreating}
              marginBottom="10px"
              placeholder="Tipo do dragão"
              type="text"
              name="type"
              value={values.type}
              onChange={handleChange}
            />
          </label>
          <Button
            disabled={isCreating}
            variant="primary"
            marginTop="10px"
            fullWidth
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </FormWrapper>
    </LoginPageWrapper>
  );
}
