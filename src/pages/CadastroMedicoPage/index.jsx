import React from "react";
import {
        Container, 
        Barra,
        Titulo
        } from "./styles"
import CadastroMedicoForm from "../../Components/CadastroMedicoForm"

const CadastroMedicoPage = () =>{
    return (
        <Container>
            <div>
                <Barra><h1>Sispoc</h1></Barra>
                <Titulo> <h1>Cadastrar Médico(a)</h1> </Titulo>
            </div>
            <CadastroMedicoForm/>

        </Container>
    );
};

export default CadastroMedicoPage