import React from 'react';
import {
    Container,
    InputSection,
    InputNome,
    InputCEP,
    InputCPF,
    InputCidade,
    InputDataNascimento,
    InputEmail,
    InputLogradouro,
    InputNumero,
    InputTelefone,
    ButtonSection,
    CadastrarSecretarioButton,
    

} from "./styles"
import InputLabel from '@material-ui/core/InputLabel';
import Check from "@material-ui/icons/Check";
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import decode from 'jwt-decode';
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle } from "@material-ui/core";
import { backendURL } from "../../services/api";
import {Formik} from 'formik';
import validationSchema from '../CadastroMedicoForm/schema'


const CadastroSecretarioForm = () => {
    const [telefone, setTelefone] = React.useState("");
    const [nomeCompleto, setNomeCompleto] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [city, setCity] = React.useState("");
    const [logradouro, setLogradouro] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [dataDeNascimento, setDataDeNascimento] = React.useState("");
    const [showCircularProgress, setShowCircularProgress] = React.useState(false);
    const [clientToken, setClientToken] = React.useState(localStorage.getItem("loginToken"));
    const [openDialog, setOpenDialog] = React.useState(false);
    const [clientData, setClientData] = React.useState({});

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
        let _result = [
        cep,
        city,
        logradouro,
        numero
        ]

        return _result.toString();
    }

    const handleForm = () => {
        let _senhaAcesso = makeid(8);
        let _matricula = makeid(5);
        let _endereco = handleEndereco();
        setShowCircularProgress(true);
        console.log(clientToken)
        axios
        .post(
            `${backendURL}secretario`, 
            {
                nomeCompleto: nomeCompleto,
                cpf: cpf,
                email: email,
                telefone: telefone,
                dataDeNascimento: dataDeNascimento,
                endereco: _endereco,
                matricula: _matricula,
                senhaAcesso: _senhaAcesso
            }, { headers: {"x-access-token" : `${clientToken}`}})
        .then((res) => {
            console.log(res.data.message);
            setClientData(res.data.item);
            setTimeout(() => setShowCircularProgress(false), 3000);
            setTimeout(() => setOpenDialog(!openDialog), 3000);
            alert(res.data.message);
        })
        .catch((err) => {
            console.log("Ocorreu um erro: ", err);
            setTimeout(() => setShowCircularProgress(false), 3000);
        });
    };

    const handleCEP = (event, setCep) =>{

        let CEP = event.target.value
        console.log(CEP)
          if(CEP.length === 8){
              axios.get(`http://viacep.com.br/ws/${CEP}/json/`)
            .then((res) =>{
              console.log(res)
              setCep(res.data.cep);
              setCity(res.data.localidade);
              setLogradouro(res.data.logradouro);
            })
            .catch((err) =>{
              console.log(err)
            })
        
          }
          
  
    }


    return(
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
        {({handleChange, values, touched, errors, handleBlur}) =>(
            <Container>
                <Dialog onClose={() => setOpenDialog(!openDialog)} open={openDialog}>
                    <div className="caixaDialogo">
                        <DialogTitle>Dados do secretário</DialogTitle>
                        <hr style={{width: "100%"}}/>
                        <DialogContent>
                            <p>Nome: <b>{clientData.nomeCompleto}</b></p>
                            <br/>
                            <p>CPF: <b>{clientData.cpf}</b></p>
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
                            label = "Nome-Completo"
                            name="nomeCompleto"
                            variant= "outlined"
                            inputProps={{className: "inputProps"}}
                            InputLabelProps={{className:"inputLabelProps"}}
                            value={values.nomeCompleto}
                            onChange={(e) => {handleChange(e); setNomeCompleto(e.target.value)}}
                            helperText={touched.nomeCompleto ? errors.nomeCompleto : ''}
                            error={touched.nomeCompleto && Boolean(errors.nomeCompleto)}
                            onBlur={handleBlur}
                        />
                        <br/>
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
                                variant= "outlined"
                                type= "date"
                                onChange={(e) => setDataDeNascimento(e.target.value)}
                            />
                        </div>
                        
                        <br/>
                        <div className="Linha-Email-Telefone">
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
                        
                        <br/>
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
                        
                        <br/>
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
                </InputSection>
                <ButtonSection>
                    <CadastrarSecretarioButton onClick={handleForm}>
                        <h1>Cadastrar Secretário</h1>
                        <Check/>
                    </CadastrarSecretarioButton>
                </ButtonSection>
            </Container>
        )
        }
        </Formik>
        

    );

}


export default CadastroSecretarioForm;