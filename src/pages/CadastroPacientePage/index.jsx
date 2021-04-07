import React from "react";
import * as home from "./styles";
import CadastroPacienteForm from "../../Components/CadastroPacienteForm";
import Header from "../../Components/Header";
import PersonDiv from "../HomePage/style";
import decode from "jwt-decode";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


const CadastroPacientePage = () => {
    const [clientName, setClientName] = React.useState("");
    var clientId;

    const handleDataClientByToken = async () => {
        setClientName(await decode(localStorage.getItem("loginToken")).nome);
        clientId= await decode(localStorage.getItem("loginToken"))._id;
    }
    
    React.useEffect(() => {
        handleDataClientByToken();
      },[]);
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return(
        <home.Container>
            <home.HeaderDiv>
                <Header />
            </home.HeaderDiv>
            <div className="content">
                <home.formDiv>
                    <home.Titulo>
                        <h1>Cadastrar Paciente</h1>
                        <home.PersonDiv>
                            <p>{clientName}</p>
                            <PersonOutlineIcon fontSize="large" styled={{ color: "gray" }} />
                            <span onClick={handleLogout}>
                                <p>Sair</p>
                            </span>
                        </home.PersonDiv>
                    </home.Titulo>
                    <CadastroPacienteForm />
                </home.formDiv>
            </div>
        </home.Container>
    );
};

export default CadastroPacientePage;