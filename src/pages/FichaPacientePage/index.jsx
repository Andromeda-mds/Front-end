import React from "react";
import * as home from "./styles";
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useLocation } from "react-router-dom";
import BotaoQuadrado from "../../Components/BotaoQuadrado";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import WarningIcon from "@material-ui/icons/Warning";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { backendURL } from "../../services/api";

const FichaPaciente = () => {
  const location = useLocation();

  const [redirectBack, setRedirectBack] = React.useState(false);
  const [consultasPaciente, setconsultasPaciente] = React.useState(false);


//   useEffect(() =>{
//     axios
//         .get(`${backendURL}ficha/consultas/${nome}`)
//         .then()
//         .catch()
//   }, [])

  return (
    <home.Container>
      <home.HeaderDiv>
        <Header />
      </home.HeaderDiv>
      <div className="content">
        <home.Voltar>
          <a href="/secretario/busca">
            <span onClick={() => setRedirectBack(true)}>
              <ArrowBackIcon style={{ fontSize: 50 }} />
              <h1>Voltar</h1>
            </span>
          </a>
        </home.Voltar>
        <home.Titulo>
          <div className="cabecalho">
            <AssignmentIndIcon style={{ fontSize: 60 }} />
            <h1>Ficha de {location.state.info.nomeCompleto}</h1>
          </div>
          <home.ProfileWrapper>
            <ProfileIcon />
          </home.ProfileWrapper>
        </home.Titulo>
        <div className="Dados-Botoes">
          <div className="DadosUsuario">
            <p>
              <b>Nome:</b> {location.state.info.nomeCompleto}
            </p>
            <p>
              <b>Data de nascimento:</b> {location.state.info.dataNascimento}
            </p>
            <p>
              <b>Convênio:</b> {location.state.info.convenio}
            </p>
            <p>
              <b>CPF:</b> {location.state.info.cpf}
            </p>
            <p>
              <b>Endereço:</b> {location.state.info.endereco}
            </p>
            <p>
              <b>Telefone:</b> {location.state.info.telefone}
            </p>
            <p>
              <b>Email:</b> {location.state.info.email}
            </p>
            <div className="botaoEdicao">
              <home.BotaoEditarDados>Editar dados</home.BotaoEditarDados>
            </div>
          </div>
          <div className="Botoes">
            <div className="prontuario-consulta">
              <div className="prontuarioPaciente">
                <home.BotaoProntuario>
                  <FolderSharedIcon
                    style={{ fontSize: 70, marginLeft: "3rem" }}
                  />
                  <h1>Visualizar prontuário do paciente</h1>
                </home.BotaoProntuario>
              </div>
              <home.BotaoAlertaConsulta>
                <WarningIcon style={{ fontSize: 30, alignSelf: "center" }} />
                <span>
                  <p>Este paciente tem consulta </p>
                   <p> agendada para:</p>
                  <p>Data da consulta</p>
                  <p>Horário da consulta</p>
                  <p>Medico da consulta</p>
                </span>
                  <p style={{ alignSelf: "center" }}>
                    <u>Clique para ver mais detalhes</u>
                  </p>
              </home.BotaoAlertaConsulta>
            </div>
            <div className="botoes-FilaEspera-DesmarcarConsulta">
              <home.BotaoColocarFilaEspera>
                Colocar na fila de espera
              </home.BotaoColocarFilaEspera>
              <home.BotaoDesmarcarConsulta>
                Desmarcar consulta
              </home.BotaoDesmarcarConsulta>
            </div>
          </div>
        </div>
      </div>
    </home.Container>
  );
};

export default FichaPaciente;