import React from "react";
import * as home from "./styles";
import CadastroPacienteForm from "../../Components/CadastroPacienteForm";
import Header from "../../Components/Header";
import PersonDiv from "../HomePage/style";
import decode from "jwt-decode";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ProfileIcon from "../../Components/ProfileIcon";


const CadastroPacientePage = () => {

    return(
        <home.Container>
            <home.HeaderDiv>
                <Header />
            </home.HeaderDiv>
            <div className="content">
                <home.formDiv>
                    <home.Titulo>
                        <h1>Cadastrar Paciente</h1>
                        <home.ProfileWrapper>
                            <ProfileIcon/>
                        </home.ProfileWrapper>
                    </home.Titulo>
                    <CadastroPacienteForm />
                </home.formDiv>
            </div>
        </home.Container>
    );
};

export default CadastroPacientePage;