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
import {Formik, ErrorMessage, useFormik} from 'formik';
import validationSchema from './schema'
import { ChangeHistory } from "@material-ui/icons";

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
      })
      .catch((err) => {
        console.log("Ocorreu um erro: ", err);
        setTimeout(() => setShowCircularProgress(false), 3000);
        alert("Dados inválidos");
      });
  };

  const handleCEP = (event, setCep) =>{

      let CEP = event.target.value
      console.log(CEP)
        if(CEP.length === 8){
            axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
          .then((res) =>{
            console.log(res)
            let logradouroCompleto = [res.data.logradouro, res.data.bairro]
            setCep(res.data.cep);
            setCity(res.data.localidade);
            setLogradouro(logradouroCompleto);
          })
          .catch((err) =>{
            console.log(err)
          })
      
        }
        

  }

  return (
    <Formik
      initialValues={{
        nomeCompleto: '',
        cpf: '',
        email: '',
        crm: '',
        telefone: '',
        cep: '',
        numero:''
      }}
      validationSchema={validationSchema}
    >
      {
        ({handleChange, values, touched, errors, handleBlur}) => (
          <Container>
            <Dialog onClose={() => setOpenDialog(!openDialog)} open={openDialog}>
              <div className="caixaDialogo">
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
                  name="nomeCompleto"
                  label="Nome-Completo"
                  variant="outlined"
                  inputProps={{ className: "inputProps" }}
                  InputLabelProps={{ className: "inputLabelProps" }}
                  value={values.nomeCompleto}
                  onChange={(e) => {handleChange(e); setNomeCompleto(e.target.value)}}
                  helperText={touched.nomeCompleto ? errors.nomeCompleto : ''}
                  error={touched.nomeCompleto && Boolean(errors.nomeCompleto)}
                  onBlur={handleBlur}
                />
                <br />
                <div className="Linha-CPF-Data">
                  <InputCPF
                    name="cpf"
                    label="CPF"
                    variant="outlined"
                    type="text"
                    value={values.cpf}
                    onChange={(e) => {handleChange(e); setCpf(e.target.value)}}
                    error={touched.cpf && Boolean(errors.cpf)}
                    helperText={touched.cpf ? errors.cpf : ''}
                    onBlur={handleBlur}
                  />
                  <InputDataNascimento
                    variant="outlined"
                    type="date"
                    onChange={(e) => setDataDeNascimento(e.target.value)}
                  />
                </div>
      
                <br />
                <div className="Linha-Email-CRM">
                  <InputEmail
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={values.email}
                    onChange={(e) => {handleChange(e); setEmail(e.target.value)}}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email ? errors.email : ''}
                    onBlur={handleBlur}
                  />
                  <InputCRM
                    name="crm"
                    label="CRM"
                    variant="outlined"
                    type="xnutmber"
                    value={values.crm}
                    onChange={(e) => {handleChange(e); setCrm(e.target.value)}}
                    error={touched.crm && Boolean(errors.crm)}
                    helperText={touched.crm ? errors.crm : ''}
                    onBlur={handleBlur}
                  />
                </div>
      
                <br />
                <div className="Linha-Especialidade-Telefone">
                  <FormControl variant="outlined" style={{ width: "60%" }}>
                    <InputLabel id="especialidades">Especialidade</InputLabel>
                    <InputEspecialidade
                      labelId="especialidades"
                      label="Especialid"
                      variant="outlined"
                      value={especialidade}
                      onChange={handleEspecialidade}
                    >
                      {Especialidades.map((v,i) => {
                        return <MenuItem key={i} value={v.value}>{v.label}</MenuItem>;
                      })}
                    </InputEspecialidade>
                  </FormControl>
                  <InputTelefone
                    name="telefone"
                    label="Telefone"
                    variant="outlined"
                    value={values.telefone}
                    onChange={(e) => {handleChange(e); setTelefone(e.target.value)}}
                    error={touched.telefone && Boolean(errors.telefone)}
                    helperText={touched.telefone ? errors.telefone : ''}
                    onBlur={handleBlur}
                  />
                </div>
      
                <br />
                <div className="Linha-CEP-Cidade">
                  <InputCEP
                    name="cep"
                    label="CEP"
                    variant="outlined"
                    value={values.cep}
                    onChange={(e) => {handleChange(e); handleCEP(e, setCep); setCep(e.target.value)}} 
                    error={touched.cep && Boolean(errors.cep)}
                    helperText={touched.cep ? errors.cep : ''} 
                    onBlur={handleBlur}        
                  />
                  <InputCidade
                    name="city"
                    label="Cidade"
                    variant="outlined"
                    value={city}
                    onChange={(e) => {setCity(e.target.value)}}
                  />
                </div>
      
                  <br />
                <div className="Linha-Logradouro-Numero">
                    <InputLogradouro
                      name="logradouro"
                      label="Logradouro"
                      variant="outlined"
                      value={logradouro}
                      onChange={(e) => {setLogradouro(e.target.value)}}
                  />
                    <InputNumero
                      name="numero"
                      label="Numero"
                      variant="outlined"
                      value={values.numero}
                      onChange={(e) => {handleChange(e); setNumero(e.target.value)}}
                      error={touched.numero && Boolean(errors.numero)}
                      helperText={touched.numero ? errors.numero : ''}
                      onBlur={handleBlur}
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
         )
       }
     </Formik>
   );
 };

export default CadastroMedicoForm;


