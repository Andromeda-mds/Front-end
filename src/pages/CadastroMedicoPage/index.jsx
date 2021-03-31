import React from "react";
import { Container, Barra, Titulo, formDiv } from "./styles";
import CadastroMedicoForm from "../../Components/CadastroMedicoForm";
import Header from "../../Components/Header";

const CadastroMedicoPage = () => {
  return (
    <Container>
      <Header />

      <div className="content">
        <formDiv>
          <Titulo>
            {" "}
            <h1>Cadastrar Médico(a)</h1>{" "}
          </Titulo>
          <CadastroMedicoForm />
        </formDiv>
      </div>
    </Container>
  );
};

export default CadastroMedicoPage;
