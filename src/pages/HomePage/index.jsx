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
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { backendURL } from "../../services/api";
import {Redirect} from 'react-router-dom'
import GuiaMedico from '../GuiaMedicoPage';
import ProfileIcon from "../../Components/ProfileIcon";
import BotaoQuadrado from "../../Components/BotaoQuadrado";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const HomePage = () => {
  const [role, setRole] = React.useState(localStorage.getItem("role"));
  const [clientData, setClientData] = React.useState({});
  // const [clientId, setClientId] = React.useState("");
  var clientId;


  return (

    <home.Wrapper>
      <home.Container>
        <home.ContentPage>
          <home.HeaderDiv>
            <Header />
          </home.HeaderDiv>
          <div className="content-div">
            {role === "medico" || role === "secretario" ? (
              role === "medico" ? (
                <div className="content-medico">
                  <div className="buttonSectionMedico">
                    <a href="/medico/agenda" style={{ textDecoration: "none" }}>
                      <BotaoQuadrado
                        title="Agenda"
                        image={EventIcon}
                      />
                    </a>
                    <a href="/guiamedico" style={{textDecoration: "none"}}>
                      <BotaoQuadrado 
                        title="Guia Médico"
                        image={AssignmentIcon}
                      />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="content-secretario">
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
                    <div className="cadastrarPacienteButton">
                      <BotaoQuadrado 
                        title="Buscar ficha de paciente"
                        image={FindInPageIcon}
                      />
                      </div>
                    <home.NovaConsultaButton>
                      <div className="calendario">
                        <CalendarToday style={{ fontSize: 70 }} />
                        <div className="add">
                          <AddIcon style={{ fontSize: 30 }} />
                        </div>
                      </div>
                      <h1>Nova consulta</h1>
                    </home.NovaConsultaButton>
                    <a href="/cadastro/paciente" style={{textDecoration: "none"}}>
                      <div className="cadastrarPacienteButton">
                        <BotaoQuadrado
                          image={PersonAddIcon}
                          title="Cadastrar Paciente"
                        />
                      </div>
                    </a>
                    
                  </div>
                </div>
              )
            ) : (
              <div className="content-Admin">
                <div className="buttonSectionAdmin">
                  <home.BuscarMedicosAdmButton>
                    <div className="buscarMedicosAdm">
                      <AccountBoxIcon style={{ fontSize: 70 }} />
                      <LocalHospitalIcon style={{ fontSize: 30 }} />
                      <h1>Buscar Médicos</h1>
                    </div>
                  </home.BuscarMedicosAdmButton>
                  <home.BuscarSecretariosAdmButton>
                    <div className="buscarSecretariosAdm">
                      <AccountBoxIcon style={{ fontSize: 70 }} />
                      <AssignmentIcon style={{ fontSize: 30 }} />
                    </div>
                    <h1>Buscar Secretários</h1>
                  </home.BuscarSecretariosAdmButton>
                  <home.CadastrarMedicoButton>
                    <a href="/cadastro/medico" style={{textDecoration: "none"} }>
                      <div className="cadastrarMedico">
                        <AccountBoxIcon style={{ fontSize: 70 }} />
                        <LocalHospitalIcon style={{ fontSize: 30 }} />
                        <h1>Cadastrar Médico</h1>
                      </div>
                    </a>
                  </home.CadastrarMedicoButton>
                  <home.CadastrarSecretario>
                    <a href="/cadastro/secretario" style={{textDecoration: "none"} }>
                    <div className="cadastrarSecretario">
                      <AccountBoxIcon style={{ fontSize: 70 }} />
                      <AssignmentIcon style={{ fontSize: 30 }} />
                      <h1>Cadastrar Secretário</h1>
                    </div>
                    </a>
                  </home.CadastrarSecretario>
                </div>
              </div>
            )}

            <home.ProfileWrapper>
              <ProfileIcon/>
            </home.ProfileWrapper>
          </div>
        </home.ContentPage>
      </home.Container>
    </home.Wrapper>
  );
};

export default HomePage;
