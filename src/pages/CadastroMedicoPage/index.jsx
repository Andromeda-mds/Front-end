import React from "react";
import * as home from "./styles";
import CadastroMedicoForm from "../../Components/CadastroMedicoForm";
import Header from "../../Components/Header";

const CadastroMedicoPage = () => {
  return (
    <home.Container>
      <Header />

      <div className="content">
        <home.formDiv>
          <home.Titulo>
            {" "}
            <h1>Cadastrar Médico(a)</h1>{" "}
          </home.Titulo>
          <CadastroMedicoForm />
        </home.formDiv>
      </div>
    </home.Container>
  );
};

export default CadastroMedicoPage;
