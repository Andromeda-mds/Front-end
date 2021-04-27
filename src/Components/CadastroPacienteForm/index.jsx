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
            .post("http://localhost:3001/paciente",{
                nomeCompleto: nomeCompleto,
                cpf: cpf,
                email: email,
                telefone: telefone,
                convenio: convenio,
                dataDeNascimento: dataDeNascimento,
                endereco: _endereco,
            })
            .then((res) => {
                console.log(res.data.message);
                setTimeout(() => setShowCircularProgress(false), 3000);
                setClientData(res.data.item);
                alert(res.data.message);
                setTimeout(() => setOpenDialog(!openDialog), 3000);
            })
            .catch((err) => {
                console.log("Ocorreu um erro: ", err);
                setTimeout(() => setShowCircularProgress(false), 3000);
            });
    };

    return(
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
                        label="Nome-Completo"
                        variant="outlined"
                        inputProps={{ className:"inputProps" }}
                        InputLabelProps={{ className:"inputLabelProps" }}
                        onChange={(e) => setNomeCompleto(e.target.value)}
                    />
                    <br />
                    <div className="Linha-CPF-Data">
                        <InputCPF 
                            label="CPF"
                            variant="outlined"
                            onChange={(e) => setCpf(e.target.value)}    
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
                            label="Email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                        <InputTelefone
                            label = "Telefone"
                            variant= "outlined"
                            onChange={(e) => setTelefone(e.target.value)}
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
                            label = "CEP"
                            variant= "outlined"
                            onChange={(e) => setCep(e.target.value)}
                        />

                        <InputCidade
                            label = "Cidade"
                            variant= "outlined"
                            onChange={(e) => setCity(e.target.value)}
                         />
                    </div>

                    <br />
                    <div className="Linha-Logradouro-Numero">
                       <InputLogradouro
                            label = "Logradouro"
                            variant= "outlined"
                            onChange={(e) => setLogradouro(e.target.value)}
                        />
                        <InputNumero
                            label = "Numero"
                            variant= "outlined"
                            onChange={(e) => setNumero(e.target.value)}
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
    );
};

export default CadastroPacienteForm;