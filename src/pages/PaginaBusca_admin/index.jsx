import React from "react";
import * as home from "./styles";
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { backendURL } from "../../services/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { BotaoPerfilUsuario } from "./styles";
import { Redirect } from "react-router-dom";

const PaginaBusca_admin = () => {
  const [nome, setNome] = React.useState("");
  const [valorSelecionado, setValorSelecionado] = React.useState("secretario");
  const [showCircularProgress, setShowCircularProgress] = React.useState(false);
  const [info, setInfo] = React.useState({});
  const [redirectIsMedico, setRedirectIsMedico] = React.useState(false);
  const [isRedirect, setIsRedirect] = React.useState(false);
  const [idSecretario, setIdSecretario] = React.useState("");
  const usuario = "admin"

  const [clientToken, setClientToken] = React.useState(
    localStorage.getItem("loginToken")
  );

  const handlePesquisa = () => {
    setShowCircularProgress(true);
    if (valorSelecionado === "medico") {
      axios
        .get(`${backendURL}medico/nome/${nome}`, {
          headers: {
            "x-access-token": `${clientToken}`,
          },
        })
        .then((res) => {
          console.log(res.data.length);
          if(res.data.length === 0) {
            setInfo(false);
            alert("Nenhum médico encontrado!")
          }
          setInfo(res);
          setTimeout(() => setShowCircularProgress(false), 3000);
        })
        .catch((err) => {
          console.log(err.status);
          alert("Nenhum médico encontrado!");
          setTimeout(() => setShowCircularProgress(false), 3000);
        });
    } else if (valorSelecionado === "secretario") {
      axios
        .get(`${backendURL}secretario/nome/${nome}`, {
          headers: {
            "x-access-token": `${clientToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          setInfo(res);
          console.log(info)
          console.log("id aqui",res.data)
          setTimeout(() => setShowCircularProgress(false), 3000);
        })
        .catch((err) => {
          console.log(err);
          setInfo(false);
          alert("Secretário não encontrado!")
          setTimeout(() => setShowCircularProgress(false), 3000);
        });
    }
  };

  const handleRedirect = (valorSelecionado, id) => {
    axios.get(`${backendURL}secretario/${id}`,
    {headers: {"x-access-token": `${clientToken}`}})
    .then(async _res => {
      setIdSecretario(_res.data._id);
    })
    .catch(err => {console.log("secretario: ", err);})
    if (valorSelecionado === "medico") {
      setRedirectIsMedico(true)
    }
    setTimeout(() => setIsRedirect(true), 1000)
  };

  return (
    <home.Container>
      <Backdrop open={showCircularProgress}>
        <CircularProgress />
      </Backdrop>
      <home.HeaderDiv>
        <Header />
      </home.HeaderDiv>
      {isRedirect ? (

        <Redirect
          to={{
            pathname: redirectIsMedico
              ? "/perfilMedico"
              : "/secretario/perfilSecretario",
            state: { info: info, idSecretario: idSecretario, usuario: usuario }
            }}
          
        />
      ) : (
        <div className="content">
          <home.Titulo>
            <div className="cabecalho">
              <SearchIcon style={{ fontSize: 60 }} />
              <h1>Busca</h1>
            </div>
            <home.ProfileWrapper>
              <ProfileIcon />
            </home.ProfileWrapper>
          </home.Titulo>
          <div className="busca">
            <div className="barra">
              <home.BarraPesquisa
                label="Insira o nome"
                variant="filled"
                InputProps={{ className: "inputProps" }}
                InputLabelProps={{ className: "inputLabelProps" }}
                type="text"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="selecaoPesquisa">
              <div className="selecaoMedico">
                <h1>Médicos</h1>
                <home.BotaoSelecao
                  color="primary"
                  value="medico"
                  onChange={(e) => {setValorSelecionado(e.target.value); setInfo({})}}
                  checked={valorSelecionado === "medico"}
                />
              </div>
              <div className="selecaoSecretario">
                <h1>Secretários</h1>
                <home.BotaoSelecao
                  color="primary"
                  value="secretario"
                  onChange={(e) => {setValorSelecionado(e.target.value); setInfo({})}}
                  checked={valorSelecionado === "secretario"}
                />
              </div>
            </div>
            <div className="botaoPesquisar">
              <home.BotaoPesquisa onClick={handlePesquisa}>
                Pesquisar
              </home.BotaoPesquisa>
            </div>
          </div>
          {valorSelecionado === "medico" ? (
            <div className="resultados">
              {info.data && (
                <div className="wrapper">
                  {info.data.map((medico) => (
                    <div className="itemResultado" key={medico._id}>
                      <div className="iconeUsuario">
                        <PersonOutlineIcon style={{ fontSize: 60 }} />
                      </div>
                      <div className="dadosUsuario">
                        <p>
                          <b>Nome: </b>
                          {medico.nomeCompleto}{" "}
                        </p>
                        <p>
                          <b>CRM: </b>
                          {medico.crm}{" "}
                        </p>
                        <p>
                          <b>Especialidade: </b>
                          {medico.especialidade}
                        </p>
                      </div>
                      <div className="botaoPerfil">
                        <BotaoPerfilUsuario
                          onClick={() => {handleRedirect(valorSelecionado, medico._id); setInfo(medico)}}
                        >
                          Visualizar perfil completo
                        </BotaoPerfilUsuario>
                      </div>
                    </div>
                  ))}{" "}
                </div>
              )}{" "}
            </div>
          ) : (
            <div className="resultados">
              {info.data && (
                <div className="wrapper">
                  {info.data.map((secretario) => (
                    <div className="itemResultado" key={secretario._id}>
                      <div className="iconeUsuario">
                        <PersonOutlineIcon style={{ fontSize: 60 }} />
                      </div>
                      <div className="dadosUsuario">
                        <p>
                          <b>Nome: </b>
                          {secretario.nomeCompleto}{" "}
                        </p>
                        <p>
                          <b>CPF: </b>
                          {secretario.cpf}{" "}
                        </p>
                      </div>
                      <div className="botaoPerfil">
                        <BotaoPerfilUsuario
                            
                        >
                          Visualizar perfil completo
                        </BotaoPerfilUsuario>
                      </div>
                    </div>
                  ))}{" "}
                </div>
              )}{" "}
            </div>
          )}{" "}
        </div>
      )}
    </home.Container>
  );
};

export default PaginaBusca_admin;
