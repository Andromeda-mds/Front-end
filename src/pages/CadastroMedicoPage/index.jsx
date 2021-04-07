import React from "react";
import * as home from "./styles";
import CadastroMedicoForm from "../../Components/CadastroMedicoForm";
import Header from "../../Components/Header";
import PersonDiv from "../HomePage/style";
import decode from "jwt-decode";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
const CadastroMedicoPage = () => {

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
        <Header />
      </home.HeaderDiv>
      <div className="content">
        <home.formDiv>
          <home.Titulo>
            <h1>Cadastrar Médico(a)</h1>
            <home.PersonDiv>
              <p>{clientName}</p>
              <PersonOutlineIcon fontSize="large" style={{ color: "gray" }} />
              <span onClick={handleLogout}>
                <p>Sair</p>
              </span>
            </home.PersonDiv>
          </home.Titulo>
          <CadastroMedicoForm />
        </home.formDiv>
      </div>
    </home.Container>
  );
};

export default CadastroMedicoPage;
