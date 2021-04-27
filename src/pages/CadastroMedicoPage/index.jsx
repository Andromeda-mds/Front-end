import React from "react";
import * as home from "./styles";
import CadastroMedicoForm from "../../Components/CadastroMedicoForm";
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";
const CadastroMedicoPage = () => {


  return (
    <home.Container>
      <home.HeaderDiv>
        <Header />
      </home.HeaderDiv>
      <div className="content">
        <home.formDiv>
          <home.Titulo>
            <h1>Cadastrar Médico(a)</h1>
            <home.ProfileWrapper>
              <ProfileIcon/>
            </home.ProfileWrapper>
          </home.Titulo>
          <CadastroMedicoForm />
        </home.formDiv>
      </div>
    </home.Container>
  );
};

export default CadastroMedicoPage;
