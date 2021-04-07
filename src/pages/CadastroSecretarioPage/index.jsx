import React from "react";
import * as home from "./styles"
import CadastroSecretarioForm from "../../Components/CadastroSecretarioForm"
import Header from "../../Components/Header";

const CadastroSecretarioPage = () =>{
    return (
        <home.Container>
            <home.HeaderDiv>
                <Header/>
            </home.HeaderDiv>

            <div>
                <home.Titulo> <h1>Cadastrar Secretário(a)</h1> </home.Titulo>
            </div>
            <CadastroSecretarioForm/>

        </home.Container>
    );
};

export default CadastroSecretarioPage