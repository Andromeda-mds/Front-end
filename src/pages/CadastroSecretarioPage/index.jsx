import React from "react";
import * as home from "./styles"
import CadastroSecretarioForm from "../../Components/CadastroSecretarioForm"
import Header from "../../Components/Header";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import decode from "jwt-decode";



const CadastroSecretarioPage = () =>{
    const [clientName, setClientName] = React.useState("");
 

    const handleDataClientByToken = async () => {
        setClientName(await decode(localStorage.getItem("loginToken")).nome);
    }

    React.useEffect(() => {
        handleDataClientByToken();
    },[]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <home.Container>
            <home.HeaderDiv>
                <Header/>
            </home.HeaderDiv>

            <div>
                <home.Titulo> 
                    <h1>Cadastrar Secretário(a)</h1>
                    <home.PersonDiv>
                        <p>{clientName}</p>
                        <PersonOutlineIcon fontSize="large" style={{ color: "gray" }} />
                        <span onClick={handleLogout}>
                            <p>Sair</p>
                        </span>
                    </home.PersonDiv> 
                </home.Titulo>
            </div>
            <CadastroSecretarioForm/>

        </home.Container>
    );
};

export default CadastroSecretarioPage