import React from "react";

import * as home from "./style";
import Header from "../../Components/Header";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CalendarToday from "@material-ui/icons/CalendarToday";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddIcon from "@material-ui/icons/Add";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SearchIcon from "@material-ui/icons/Search";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import decode from "jwt-decode";
import axios from "axios";
import { backendURL } from "../../services/api";

const HomePage = () => {
  const [role] = React.useState(localStorage.getItem("role"));
  const [clientData, setClientData] = React.useState({});
  // const [clientId, setClientId] = React.useState("");
  var clientId;
  const [clientName, setClientName] = React.useState("");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleDataClientByToken = async () => {
    setClientName(await decode(localStorage.getItem("loginToken")).nome);
    clientId = await decode(localStorage.getItem("loginToken"))._id;
    console.log(clientId);

    axios
      .get(
        `${backendURL}${
          role === "medico" ? "medico" : "secretario"
        }/${clientId}`,
        {
          headers: {
            "x-access-token": `${localStorage.getItem("loginToken")}`,
          },
        }
      )
      .then((res) => {
        setClientData(res.data);
        console.log(res);
      })
      .catch((err) => {
        alert("Ocorreu um erro na requisição");
        console.log(err);
      });
  };

  React.useEffect(() => {
    // setClientId(decode(localStorage.getItem("loginToken"))._id);
    handleDataClientByToken();
  }, []);

  return (
    <home.Wrapper>
      <home.Container>
        <home.ContentPage>
          <home.HeaderDiv>
            <Header />
          </home.HeaderDiv>
          <div className="content-div">
            {/* <h1>content</h1> */}
            {role === "medico" ? (
              <div className="content-medico">
                {/* <h1>Sou médico</h1> */}
                <div className="buttonSectionMedico">
                  <a href="/medico/agenda" style={{ textDecoration: "none" }}>
                    <home.AgendaButton>
                      <EventIcon style={{ fontSize: 80 }} />
                      <h1>Agenda</h1>
                    </home.AgendaButton>
                  </a>
                  <a>
                    <home.GuiaMedicoButton>
                      <AssignmentIcon style={{ fontSize: 70 }} />
                      <h1>Guia Médico</h1>
                    </home.GuiaMedicoButton>
                  </a>
                </div>
              </div>
            ) : (
              <div className="content-secretario">
                {/* <h1>Sou secretário</h1> */}
                <div className="buttonSectionSecretario">
                  <home.BuscarMedicosButton>
                    <div className="buscarMedicos">
                      <AccountBoxIcon style={{ fontSize: 70 }} />
                      <div className="search">
                        <SearchIcon style={{ fontSize: 60 }} />
                      </div>
                    </div>
                    <h1>Buscar Médicos</h1>
                  </home.BuscarMedicosButton>
                  <home.BuscarPacientesButton>
                    <FindInPageIcon style={{ fontSize: 70 }} />
                    <h1>Buscar ficha de paciente</h1>
                  </home.BuscarPacientesButton>
                  <home.NovaConsultaButton>
                    <div className="calendario">
                      <CalendarToday style={{ fontSize: 70 }} />
                      <div className="add">
                        <AddIcon style={{ fontSize: 30 }} />
                      </div>
                    </div>
                    <h1>Nova consulta</h1>
                  </home.NovaConsultaButton>
                </div>
              </div>
            )}
            <home.PersonDiv>
              <p>{clientName}</p>
              <PersonOutlineIcon fontSize="large" style={{ color: "gray" }} />
              <span onClick={handleLogout}>
                <p>Sair</p>
              </span>
            </home.PersonDiv>
          </div>
        </home.ContentPage>
      </home.Container>
    </home.Wrapper>
  );
};

export default HomePage;
