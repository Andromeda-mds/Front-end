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
import moment from 'moment'

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

    let _horarioConsulta = handleAppointmentData();
    if(_horarioConsulta === 0) return alert("Horário inválido.");
    if(medico.id === null || medico.id === undefined) return alert("Médico inválido");
    if(fichaPaciente?._id === null || fichaPaciente?._id === undefined) return alert("Paciente inválido ou não cadastrado")

    axios
      .post(
        `${backendURL}consulta/${fichaPaciente._id}`,
        {
          medico: medico.id,
          data: _horarioConsulta,
        },
        { headers: { "x-access-token": `${token}` } }
      )
      .then((res) => {console.log(res); alert("Consulta marcada com sucesso.")})
      .catch((err) => {console.log(err.response.data.message); alert(err.response.data.message)});
  };

  const handleAppointmentData = () => {
    if(dataConsulta === "") return 0;
    let data = dataConsulta.split("-").reverse().join("-").replaceAll("-", "/");
    let horario;
    let periodo;
    switch(horarioConsulta){
      case "08:00": horario = "1";  periodo = "manha";
        break;
      case "09:00": horario = "2"; periodo = "manha";
        break;
      case "10:00": horario = "3"; periodo = "manha";
        break;
      case "11:00": horario = "4"; periodo = "manha";
        break;
      case "13:00": horario = "1"; periodo = "tarde";
        break;
      case "14:00": horario = "2"; periodo = "tarde";
        break;
      case "15:00": horario = "3"; periodo = "tarde";
        break;
      case "16:00": horario = "4"; periodo = "tarde";
        break;
      default: horario = 0; periodo = 0;
    }
    if(horario === 0 && periodo === 0) return 0;
    let object = {
      dia: data,
      periodo: periodo,
      horario: horario
    }
    console.log("horario consulta", horarioConsulta);
    return object;
  }

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
                <ButtonCadastrarPaciente onClick={() => handleAppointmentData()}>
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
              formatDate={(date) => moment(date).format('DD-MM-YYYY')}
            />
            <HorarioDaConsulta
              label="Horário Da Consulta"
              type="time"
              defaultValue="00:00"
              onChange={(e) => setHorarioConsulta(e.target.value)}
            />
          </div>
        </div>
        <ButtonSection>
          <ConcluidoButton onClick={() => registerAppointment()}>
            <h1>Concluir Agendamento</h1>
            <Check />
          </ConcluidoButton>
        </ButtonSection>
      </InputSection>
    </Container>
  );
};

export default AgendamentoConsultaForm;
