import React from "react";
import {
        Container, 
        Barra,
        Titulo
        } from "./styles"
import CadastroSecretarioForm from "../../Components/CadastroSecretarioForm"

const CadastroSecretarioPage = () =>{
    return (
        <Container>
            <div>
                <Barra><h1>Sispoc</h1></Barra>
                <Titulo> <h1>Cadastrar Secretário(a)</h1> </Titulo>
            </div>
            <CadastroSecretarioForm/>

        </Container>
    );
};

export default CadastroSecretarioPage