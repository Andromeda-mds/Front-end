import React from "react";
import * as home from "./styles";
import AgendamentoConsultaForm from "../../Components/AgendamentoConsultaForm"
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";

const AgendamentoConsultaPage = () =>{

    return(
        <home.Container>
            <home.HeaderDiv>
                <Header />
            </home.HeaderDiv>
            <div className="content">
                <home.formDiv>
                    <home.Titulo>
                        <h1>Nova Consulta</h1>
                        <home.ProfileWrapper>
                            <ProfileIcon/>
                        </home.ProfileWrapper>
                    </home.Titulo>
                    <AgendamentoConsultaForm />
                </home.formDiv>
            </div>
        </home.Container>
    );
};

export default AgendamentoConsultaPage;