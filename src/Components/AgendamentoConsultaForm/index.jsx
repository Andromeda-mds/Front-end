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
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { DialogContent, DialogTitle } from "@material-ui/core";
import { Formik, ErrorMessage, useFormik, validateYupSchema } from "formik";
import { ChangeHistory } from "@material-ui/icons";

const AgendamentoConsultaForm = () => {
  var Profissional = [];

  const [nomePaciente, setNomePaciente] = React.useState("");
  const [pacientes, setPaciente] = React.useState([]);
  const [dataConsulta, setDataConsulta] = React.useState("");
  const [profissional, setProfissional] = React.useState("");
  const [medicos, setMedicos] = React.useState([]);
  const [horarioConsulta, setHorarioConsulta] = React.useState("");
  const [token, setToken] = React.useState(localStorage.getItem("loginToken"));

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
        console.log(res);
        setPaciente(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleMedico = () => {
    let arr = [];
    Profissional.map((v) => {
      var object = {};
      object.nome = v.nomeCompleto;
      object.value = v.nomeCompleto.toLowerCase();
      arr.push(object);
    });
    setMedicos(arr);
  };

  const handleProfissional = (event) => {
    setProfissional(event.target.value);
  };

  const handlePacienteName = (event) => {
    let name = event.target.value;
    if (name.length > 3) {
      setNomePaciente(event.target.value);
      fetchPaciente();
    }
  };

  React.useEffect(() => {
    fetchMedico();
  }, []);

  return (
    <Container>
      <InputSection>
        <form className="form">
          <div className="Linha-Nome-Paciente">
            <InputNomePaciente
              name="nomePaciente"
              label="Nome-Paciente"
              variant="outlined"
              inputProps={{ className: "inputProps" }}
              inputLabelProps={{ className: "inputLabelProps" }}
              onChange={handlePacienteName}
            />
            <div className="BotaoCadastrarPaciente">
              <ButtonCadastrarPaciente>
                Cadastar novo paciente
              </ButtonCadastrarPaciente>
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
                    </MenuItem>
                  );
                })}
              </InputProfissional>
            </FormControl>
            <div className="BotaoVerAgenda">
              <ButtonVerAgenda disabled={profissional === "" ? true : false}>
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
        </form>
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
