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

  // const handleCEP = (event) => {​​​​​

  //   const CEP = event;

  //   if(CEP.length > 6){​​​​​

  //     axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  //     axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

  //     axios.get(`http://viacep.com.br/ws/${​​​​​CEP}​​​​​/json/`)
  //     .then((res) =>{​​​​​

  //       setCep(res.endereco.cep);

  //       setCity(res.endereco.localidade);

  //       setLogradouro(res.endereco.logradouro);

  //       console.log(res)

  //     }​​​​​)
  //     .catch((err) =>{​​​​​

  //       console.log(err)

  //     }​​​​​)
  //   }​​​​​
  // }​​​​​

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
      });
  };

  const handleCEP = (event, setCep) =>{

      setCep(event.target.value)
      let CEP = event.target.value
      fetch(`http://viacep.com.br/ws/${CEP}/json/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let _result = [data.logradouro, data.bairro]
          _result = _result.toString()
          setLogradouro(_result);
          setCity(data.localidade);
        });
          
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
        // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        // axios.get(`http://viacep.com.br/ws/${CEP}/json/`)
        // .then((res) =>{
        //   setCep(res.endereco.cep);
        //   setCity(res.endereco.localidade);
        //   setLogradouro(res.endereco.logradouro);
        //   console.log(res)
        // })
        // .catch((err) =>{
        //   console.log(err)
        // })
      

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
        numero:'',
        city:''
      }}
      validateOnMount
      validationSchema={validationSchema}
    >
      {
        ({handleChange, values, touched, errors, dirty}) => (
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
               name="nomeCompleto"
               label="Nome-Completo"
               variant="outlined"
               inputProps={{ className: "inputProps" }}
               InputLabelProps={{ className: "inputLabelProps" }}
              //  onChange={(e) => setNomeCompleto(e.target.value)}
               value={values.nomeCompleto}
               onChange={(e) => {handleChange(e); setNomeCompleto(e.target.value)}}
               error={Boolean(errors.nomeCompleto) && dirty}
               helperText={(errors.nomeCompleto && dirty) ?  errors.nomeCompleto : false}
             />
             <br />
             <div className="Linha-CPF-Data">
               <InputCPF
                 name="cpf"
                 label="CPF"
                 variant="outlined"
                //  onChange={(e) => setCpf(e.target.value)}
                 type="text"
                 value={values.cpf}
                 onChange={(e) => {handleChange(e); setCpf(e.target.value)}}
                 error={Boolean(errors.cpf) && dirty}
                 helperText={(errors.cpf && dirty) ?  errors.cpf : false}
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
                 error={Boolean(errors.email) && dirty}
                 helperText={(errors.email && dirty) ?  errors.email : false}
               />
               <InputCRM
                 name="crm"
                 label="CRM"
                 variant="outlined"
                 type="xnutmber"
                 value={values.crm}
                 onChange={(e) => {handleChange(e); setCrm(e.target.value)}}
                 error={Boolean(errors.crm) && dirty}
                 helperText={(errors.crm && dirty) ?  errors.crm : false}
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
                 error={Boolean(errors.telefone) && dirty}
                 helperText={(errors.telefone && dirty) ?  errors.telefone : false}
               />
             </div>
   
             <br />
             <div className="Linha-CEP-Cidade">
               <InputCEP
                 name="cep"
                 label="CEP"
                 variant="outlined"
                 onChange={(e) => {handleChange(e); handleCEP(e, setCep) }} 
                 error={Boolean(errors.cep) && dirty}
                 helperText={(errors.cep && dirty) ?  errors.cep : false}        
               />
               <InputCidade
                 name="city"
                 label="Cidade"
                 variant="outlined"
                 value={values.city}
                 onChange={(e) => {handleChange(e); setCity(e.target.value)}}
                 error={Boolean(errors.city) && dirty}
                 helperText={(errors.city && dirty) ?  errors.city : false}
               />
             </div>
   
             <br />
             <div className="Linha-Logradouro-Numero">
               <InputLogradouro
                 name="logradouro"
                 label="Logradouro"
                 variant="outlined"
                 value={values.logradouro}
                 onChange={(e) => {handleChange(e); setLogradouro(e.target.value)}}
                 error={Boolean(errors.logradouro) && dirty}
                 helperText={(errors.logradouro && dirty) ?  errors.logradouro : false}
               />
               <InputNumero
                 name="numero"
                 label="Numero"
                 variant="outlined"
                //  onChange={(e) => setNumero(e.target.value)}
                 value={values.numero}
                 onChange={(e) => {handleChange(e); setNumero(e.target.value)}}
                 error={Boolean(errors.numero) && dirty}
                 helperText={(errors.numero && dirty) ?  errors.numero : false}
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
