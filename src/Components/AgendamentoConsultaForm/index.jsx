import React from "react";
import {
  Container,
  AgendamentoConsultaWrapper,
  InputSection,
  ButtonSection,
  ConcluidoButton,
  InputNomePaciente,
  InputDataInput,
  InputProfissional,
  InputDataConsulta,
  ButtonCadastrarPaciente,
  ButtonVerAgenda,
  HorarioDaConsulta,
} from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import Check from "@material-ui/icons/Check";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { backendURL } from "../../services/api";
import { Redirect } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import AgendaMedico from "../../pages/AgendaMedico";

const AgendamentoConsultaForm = () => {
  var Profissional = [];

  const [nomePaciente, setNomePaciente] = React.useState("");
  const [emailPaciente, setEmailPaciente] = React.useState("");
  const [pacientes, setPacientes] = React.useState([]);
  const [fichaPaciente, setFichaPaciente] = React.useState({});
  const [dataConsulta, setDataConsulta] = React.useState("");
  const [profissional, setProfissional] = React.useState("");
  const [medicos, setMedicos] = React.useState([]);
  const [horarioConsulta, setHorarioConsulta] = React.useState("");
  const [token, setToken] = React.useState(localStorage.getItem("loginToken"));
  const [redirect, setIsRedirect] = React.useState(false);
  const [pacienteIsFetched, setPacienteIsFetched] = React.useState(false);
  const [messageFetched, setMessageFetched] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [medico, setMedico] = React.useState({});

  const fetchMedico = () => {
    axios
      .get(`${backendURL}medico`, { headers: { "x-access-token": `${token}` } })
      .then((res) => {
        Profissional = res.data;
        console.log(Profissional);
        handleMedico();
      })
      .catch((err) => console.log(err));
  };

  const fetchPaciente = () => {
    axios
      .get(`${backendURL}paciente/nome/${nomePaciente}`, {
        headers: { "x-access-token": `${token}` },
      })
      .then((res) => {
        console.log("paciente", res);
        res.data.map((value) => {
          if (value.email === emailPaciente) {
            setPacientes(res.data);
            setPacienteIsFetched(true);
            setMessageFetched("Paciente Encontrado");
            axios
              .get(`${backendURL}ficha/paciente/${value._id}`, {
                headers: { "x-access-token": `${token}` },
              })
              .then((res) => {
                console.log("Ficha paciente", res);
                setFichaPaciente(res.data);
              })
              .catch((err) => console.log(err));
          } else {
            setMessageFetched("Paciente não encontrado");
          }
        });
      })
      .catch((err) => {
        console.log("Paciente", err);
        setMessageFetched("Paciente não encontrado");
      });
  };

  const handleMedico = () => {
    let arr = [];
    Profissional.map((v) => {
      var object = {};
      object.nome = v.nomeCompleto;
      object.crm = v.crm;
      object.id = v._id;
      object.value = v.nomeCompleto.toLowerCase();
      arr.push(object);
    });
    setMedicos(arr);
  };

  const handleProfissional = (event) => {
    setProfissional(event.target.value);
    medicos.map((v) => {
      if (v.value === event.target.value) {
        setMedico(v);
      }
    });
    console.log("To aqui:", medico.id);
  };

  const registerAppointment = () => {
    axios
      .post(
        `${backendURL}consulta/${fichaPaciente._id}`,
        {
          medico: medico.id,
          data: {
            //TODO arrumar a formatação da data da consulta de acordo com o Back
          },
        },
        { headers: { "x-access-token": `${token}` } }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchMedico();
  }, []);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <InputSection>
        <Dialog open={modalOpen} onClose={handleClose}>
          <AgendaMedico medico={medico.id} />
        </Dialog>
        <div className="form">
          <div className="Linha-Nome-Paciente">
            <div className="nome-email">
              <InputNomePaciente
                name="nomePaciente"
                label="Nome-Paciente"
                variant="outlined"
                inputProps={{ className: "inputProps" }}
                inputLabelProps={{ className: "inputLabelProps" }}
                onChange={(e) => setNomePaciente(e.target.value)}
              />
              <InputNomePaciente
                name="emailPaciente"
                label="Email-Paciente"
                variant="outlined"
                inputProps={{ className: "inputProps" }}
                inputLabelProps={{ className: "inputLabelProps" }}
                onChange={(e) => setEmailPaciente(e.target.value)}
              />
              <span style={{ color: pacienteIsFetched ? "green" : "red" }}>
                <p>{messageFetched}</p>
              </span>
            </div>
            <div className="buttons">
              <div className="BotaoCadastrarPaciente">
                <ButtonCadastrarPaciente
                  onClick={() => {
                    fetchPaciente();
                    setPacienteIsFetched(false);
                  }}
                >
                  Buscar paciente
                </ButtonCadastrarPaciente>
              </div>
              <div className="BotaoCadastrarPaciente">
                <ButtonCadastrarPaciente>
                  Cadastar novo paciente
                </ButtonCadastrarPaciente>
              </div>
            </div>
          </div>

          <div className="Linha-Profissional">
            <FormControl variant="outlined" style={{ width: "56%" }}>
              <InputLabel id="profissional">Profissional</InputLabel>
              <InputProfissional
                labelId="profissional"
                label="Profissional"
                variant="outlined"
                value={profissional}
                onChange={handleProfissional}
              >
                {medicos.map((v, i) => {
                  return (
                    <MenuItem key={i} value={v.value}>
                      {v.nome}
                      <br />
                      CRM: {v.crm}
                    </MenuItem>
                  );
                })}
              </InputProfissional>
            </FormControl>
            <div className="BotaoVerAgenda">
              <ButtonVerAgenda
                disabled={profissional === "" ? true : false}
                onClick={() => /*setIsRedirect(true)*/ setModalOpen(true)}
              >
                Ver agenda desse profissional
              </ButtonVerAgenda>
            </div>
          </div>
          <br />
          <div className="Linha-Data-Horario">
            <InputDataConsulta
              variant="outlined"
              type="date"
              onChange={(e) => setDataConsulta(e.target.value)}
            />
            <HorarioDaConsulta
              label="Horário Da Consulta"
              type="time"
              defaultValue="00:00"
            />
          </div>
        </div>
        <ButtonSection>
          <ConcluidoButton>
            <h1>Concluir Agendamento</h1>
            <Check />
          </ConcluidoButton>
        </ButtonSection>
      </InputSection>
    </Container>
  );
};

export default AgendamentoConsultaForm;
