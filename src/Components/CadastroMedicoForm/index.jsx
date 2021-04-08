import React from "react";
import {
  Container,
  InputSection,
  InputNome,
  InputCEP,
  InputCPF,
  InputCRM,
  InputCidade,
  InputDataNascimento,
  InputEmail,
  InputEspecialidade,
  InputLogradouro,
  InputNumero,
  InputTelefone,
  ButtonSection,
  CadastrarMedicoButton,
  CadastroMedicoFormWrapper,
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

const CadastroMedicoForm = () => {
  const Especialidades = [
    {
      label: "Cardiologia",
      value: "cardiologia",
    },
    {
      label: "Dermatologia",
      value: "dermatologia",
    },
    {
      label: "Endocrinologia",
      value: "endocrinologia",
    },
    {
      label: "Pediatria",
      value: "pediatria",
    },
    {
      label: "Urologia",
      value: "urologia",
    },
  ];

  const [especialidade, setEspecialidade] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [nomeCompleto, setNomeCompleto] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [crm, setCrm] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [city, setCity] = React.useState("");
  const [logradouro, setLogradouro] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [dataDeNascimento, setDataDeNascimento] = React.useState("");
  const [showCircularProgress, setShowCircularProgress] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [clientData, setClientData] = React.useState({});
  const [clientToken, setClientToken] = React.useState(
    localStorage.getItem("loginToken")
  );

  const handleEspecialidade = (event) => {
    setEspecialidade(event.target.value);
  };

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const handleEndereco = () => {
    let _result = [cep, city, logradouro, numero];

    return _result.toString();
  };

  const handleForm = () => {
    let _senhaAcesso = makeid(8);
    let _endereco = handleEndereco();
    setShowCircularProgress(true);
    axios
      .post(
        `${backendURL}medico`,
        {
          nomeCompleto: nomeCompleto,
          cpf: cpf,
          email: email,
          crm: crm,
          telefone: telefone,
          especialidade: especialidade,
          dataDeNascimento: dataDeNascimento,
          endereco: _endereco,
          senhaAcesso: _senhaAcesso,
        },
        { headers: { "x-access-token": `${clientToken}` } }
      )
      .then((res) => {
        console.log(res.data.message);
        console.log(res.data.item);
        setClientData(res.data.item);
        setTimeout(() => setShowCircularProgress(false), 3000);
        setTimeout(() => setOpenDialog(!openDialog), 3000);
        // alert(res.data.message);
      })
      .catch((err) => {
        console.log("Ocorreu um erro: ", err);
        setTimeout(() => setShowCircularProgress(false), 3000);
      });
  };

  return (
    <Container>
      <Dialog onClose={() => setOpenDialog(!openDialog)} open={openDialog}>
        <div >
          <DialogTitle>Dados do médico</DialogTitle>
          <hr style={{width: "100%"}}/>
          <DialogContent>
            <p>Nome: <b>{clientData.nomeCompleto}</b></p>
            <br/>
            <p>CRM: <b>{clientData.crm}</b></p>
            <br/>
            <p>E-mail: <b>{clientData.email}</b></p>
            <br/>
            <p>Senha: <b>{clientData.senhaAcesso}</b></p>
          </DialogContent>
        </div>
      </Dialog>
      <Backdrop open={showCircularProgress}>
        <CircularProgress />
      </Backdrop>
      <InputSection>
        <form className="form">
          <InputNome
            label="Nome-Completo"
            variant="outlined"
            inputProps={{ className: "inputProps" }}
            InputLabelProps={{ className: "inputLabelProps" }}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
          <br />
          <div className="linha1">
            <InputCPF
              label="CPF"
              variant="outlined"
              onChange={(e) => setCpf(e.target.value)}
              type="text"
            />
            <InputDataNascimento
              variant="outlined"
              type="date"
              onChange={(e) => setDataDeNascimento(e.target.value)}
            />
          </div>

          <br />
          <div className="linha2">
            <InputEmail
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <InputCRM
              label="CRM"
              variant="outlined"
              onChange={(e) => setCrm(e.target.value)}
              type="xnutmber"
            />
          </div>

          <br />
          <div className="linha3">
            <FormControl variant="outlined" style={{ width: "60%" }}>
              <InputLabel id="especialidades">Especialidade</InputLabel>
              <InputEspecialidade
                labelId="especialidades"
                label="Especialid"
                variant="outlined"
                value={especialidade}
                onChange={handleEspecialidade}
              >
                {Especialidades.map((v) => {
                  return <MenuItem value={v.value}>{v.label}</MenuItem>;
                })}
              </InputEspecialidade>
            </FormControl>
            <InputTelefone
              label="Telefone"
              variant="outlined"
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <br />
          <div className="linha4">
            <InputCEP
              label="CEP"
              variant="outlined"
              onChange={(e) => setCep(e.target.value)}
            />

            <InputCidade
              label="Cidade"
              variant="outlined"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <br />
          <div className="linha5">
            <InputLogradouro
              label="Logradouro"
              variant="outlined"
              onChange={(e) => setLogradouro(e.target.value)}
            />
            <InputNumero
              label="Numero"
              variant="outlined"
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
        </form>
        <ButtonSection>
          <CadastrarMedicoButton onClick={handleForm}>
            <h1>Cadastrar Médico</h1>
            <Check />
          </CadastrarMedicoButton>
        </ButtonSection>
      </InputSection>
    </Container>
  );
};

export default CadastroMedicoForm;
