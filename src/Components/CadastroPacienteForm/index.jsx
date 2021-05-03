import React from "react";
import {
    Container,
    InputSection,
    InputNome,
    InputConvenio,
    InputCEP,
    InputCPF,
    InputCidade,
    InputDataNascimento,
    InputEmail,
    InputLogradouro,
    InputNumero,
    InputTelefone,
    ButtonSection,
    CadastrarPacienteButton,
    CadastroPacienteFormWrapper
  } from "./styles";
import InputLabel from "@material-ui/core/InputLabel";
import Check from "@material-ui/icons/Check";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle } from "@material-ui/core";
import { backendURL } from "../../services/api";
import {Formik} from 'formik';
import validationSchema from "../CadastroMedicoForm/schema"


const CadastroPacienteForm = () => {
    const Convenios = [
        {
            label: "Bradesco",
            value: "bradesco"
        },
        {
            label: "Unimed",
            value: "unimed"
        }
    ];

    const [showCircularProgress, setShowCircularProgress] = React.useState(false);
    const [nomeCompleto, setNomeCompleto] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [dataDeNascimento, setDataDeNascimento] = React.useState("");
    const [convenio, setConvenio] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [logradouro, setLogradouro] = React.useState("");
    const [city, setCity] = React.useState("");
    const [openDialog, setOpenDialog] = React.useState(false);
    const [clientData, setClientData] = React.useState({});
    const [clientToken, setClientToken] = React.useState(
        localStorage.getItem("loginToken")
      );

    const handleConvenio = (event) =>{
        setConvenio(event.target.value);
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
        let _endereco = handleEndereco();
        setShowCircularProgress(true);
        axios
            .post(`${backendURL}paciente`,{
                nomeCompleto: nomeCompleto,
                cpf: cpf,
                email: email,
                telefone: telefone,
                convenio: convenio,
                dataNascimento: dataDeNascimento,
                endereco: _endereco,
            },
            { headers: { "x-access-token": `${clientToken}` } }
            )
            .then((res) => {
                console.log(res.data);
                setTimeout(() => setShowCircularProgress(false), 3000);
                setClientData(res.data.item.paciente);
                alert(res.data.message);
                setTimeout(() => setOpenDialog(!openDialog), 3000);
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

    return(
        <Formik
            initialValues={{
                nomeCompleto: '',
                cpf: '',
                email: '',
                telefone: '',
                cep: '',
                numero:''
            }}
            validationSchema={validationSchema}
        >
        {({handleChange, values, touched, errors, handleBlur}) => (
            <Container>
                <Dialog onClose={() => setOpenDialog(!openDialog)} open={openDialog}>
                <div className="caixaDialogo">
                    <DialogTitle>Dados do paciente</DialogTitle>
                    <hr style={{width: "100%"}}/>
                    <DialogContent>
                        <p>Nome: <b>{clientData.nomeCompleto}</b></p>
                        <br/>
                        <p>CPF: <b>{clientData.cpf}</b></p>
                        <br/>
                        <p>E-mail: <b>{clientData.email}</b></p>
                        <br/>
                        <p>Convênio: <b>{clientData.convenio}</b></p>
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

                        <br />
                        <div className="Linha-Convenio">
                            <FormControl variant="outlined" style={{ width: "100%"}}>
                                <InputLabel id="convenio">Convênio</InputLabel>
                                <InputConvenio
                                    labelId="convenio"
                                    label="Convenio"
                                    variant="outlined"
                                    value={convenio}
                                    onChange={handleConvenio}
                                >
                                    {Convenios.map((v) => {
                                        return <MenuItem value={v.value}>{v.label}</MenuItem>
                                    })}   
                                </InputConvenio>
                            </FormControl>
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
                </InputSection>
                <ButtonSection>
                    <CadastrarPacienteButton onClick={handleForm}>
                        <h1>Cadastrar Paciente</h1>
                        <Check />
                    </CadastrarPacienteButton>
                </ButtonSection>    
            </Container>
        )}
        </Formik>
    );
};

export default CadastroPacienteForm;