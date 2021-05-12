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
import EditarPerfilPacienteForm from "../../Components/EditarPerfilPacienteForm";
import Dialog from "@material-ui/core/Dialog";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const FichaPaciente = () => {
  const location = useLocation();

  const [redirectBack, setRedirectBack] = React.useState(false);
  const [consultasPaciente, setConsultasPaciente] = React.useState([]);
  const [editar, setEditar] = React.useState(false);
  const [pacienteData, setPacienteData] = React.useState({})
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openErrorSnack, setOpenErrorSnack] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [nomeCompleto, setNomeCompleto] = React.useState(location.state.info.nomeCompleto);
  const [telefone, setTelefone] = React.useState(location.state.info.telefone);
  const [email, setEmail] = React.useState(location.state.info.email);
  const [dataNascimento, setDataDeNascimento] = React.useState(location.state.info.dataNascimento);
  const [convenio, setConvenio] = React.useState(location.state.info.convenio);
  const [cep, setCep] = React.useState(location.state.info.cep);
  const [cpf, setCpf] = React.useState(location.state.info.cpf);
  const [mudouRecentemente, setMudouRecentemente] = React.useState(false)
  const [numero, setNumero] = React.useState("");
  const [logradouro, setLogradouro] = React.useState("");
  const [city, setCity] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [clientToken, setClientToken] = React.useState(
    localStorage.getItem("loginToken")
  );


  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
    setOpenErrorSnack(false);
  };

  const handleClose = () => {
    setEditar(false);
    console.log("entrei")
    axios
    .get(`${backendURL}paciente/${location.state.info._id}`, {headers: {"x-access-token": `${clientToken}`}})
    .then(res => {
      console.log(res)
      setNomeCompleto(res.data.item.nomeCompleto)
      setEmail(res.data.item.email)
      setConvenio(res.data.item.convenio)
      setCpf(res.data.item.cpf)
      setTelefone(res.data.item.telefone)
      setDataDeNascimento(res.data.item.dataNascimento)
      let _endereco = res.data.item.endereco.split(",")
      setCep(_endereco[0])
      _endereco = res.data.item.endereco.slice(8)
      setEndereco(_endereco)
    }).catch(err => {
      console.log(err)
    })
  };

  useEffect(() => {
    let _endereco = location.state.info.endereco.split(",")
    console.log("_endereco", _endereco)
    setCep(_endereco[0])
    setCity(_endereco[1])
    setLogradouro(_endereco[2])
    setNumero(_endereco[3])
    _endereco = location.state.info.endereco.slice(8)
    setEndereco(_endereco)
    console.log("id paciente", location.state.info._id);
    console.log("ID FICHA", location.state.idFicha);
    
    axios
      .get(`${backendURL}ficha/consultas/${location.state.idFicha}`, {
        headers: {
          "x-access-token": `${clientToken}`,
        },
      })
      .then(async res => {
        console.log(res.data.item)
        setConsultasPaciente(res.data.item)
        setTimeout(() => console.log("consultas: ", consultasPaciente), 2500)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [])


  return (
    <home.Container>
      <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success">
          {message}
        </Alert>
      </Snackbar>
      <Snackbar open={openErrorSnack} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleCloseSnack} severity="error">
          {message}
        </Alert>
      </Snackbar>
      <Dialog open={editar} onClose={handleClose} fullWidth={true}>
        <EditarPerfilPacienteForm
          nomeCompleto={nomeCompleto}
          cpf={cpf}
          email={email}
          telefone={telefone}
          convenio={convenio}
          cep={cep}
          dataNascimento={dataNascimento}
          logradouro={logradouro}
          numero={numero}
          city={city}
          id={location.state.info._id}
          data={setPacienteData}
          trigger={() => handleClose()}
          openSnack={setOpenSnack}
          openErrorSnack={setOpenErrorSnack}
          message={setMessage}
          mudou={setMudouRecentemente}
        />
      </Dialog>
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
              <b>Nome:</b> {nomeCompleto}
            </p>
            <p>
              <b>Data de nascimento:</b> {dataNascimento}
            </p>
            <p>
              <b>Convênio:</b> {convenio}
            </p>
            <p>
              <b>CPF:</b> {cpf}
            </p>
            <p>
              <b>Endereço:</b> {endereco}
            </p>
            <p>
              <b>Telefone:</b> {telefone}
            </p>
            <p>
              <b>Email:</b> {email}
            </p>
            <p>
              <b>CEP:</b> {cep}
            </p>
            <div className="botaoEdicao">
              <home.BotaoEditarDados
                onClick={() => setEditar(true)}
              >
                Editar dados
              </home.BotaoEditarDados>
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
                  <p>Data:</p>
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
