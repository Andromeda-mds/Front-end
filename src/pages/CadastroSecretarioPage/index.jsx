import React from "react";
import {
        Container, 
        Barra,
        Titulo
        } from "./styles"
import CadastroSecretarioForm from "../../Components/CadastroSecretarioForm"
import Header from "../../Components/Header";

const CadastroSecretarioPage = () =>{
    return (
        <Container>
             <Header/>
            <div>
                <Titulo> <h1>Cadastrar Secretário(a)</h1> </Titulo>
            </div>
            <CadastroSecretarioForm/>

        </Container>
    );
};

export default CadastroSecretarioPage