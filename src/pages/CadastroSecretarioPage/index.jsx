import React from "react";
import * as home from "./styles"
import CadastroSecretarioForm from "../../Components/CadastroSecretarioForm"
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";



const CadastroSecretarioPage = () =>{

    return (
        <home.Container>
            <home.HeaderDiv>
                <Header/>
            </home.HeaderDiv>

            <div className="content">
                <home.Titulo> 
                    <h1>Cadastrar Secretário(a)</h1>
                    <home.ProfileWrapper>
                        <ProfileIcon/>
                    </home.ProfileWrapper>
                </home.Titulo>
                <CadastroSecretarioForm/>
            </div>
            

        </home.Container>
    );
};

export default CadastroSecretarioPage