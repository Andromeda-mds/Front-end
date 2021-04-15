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
        let _endereco = handleEndereco();
        setShowCircularProgress(true);
        console.log(clientToken)
        axios
        .post(
            `${backendURL}pessoa`, 
            {
                nomeCompleto: nomeCompleto,
                cpf: cpf,
                email: email,
                telefone: telefone,
                dataDeNascimento: dataDeNascimento,
                endereco: _endereco,
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


    return(
        <Container>
                 <Dialog onClose={() => setOpenDialog(!openDialog)} open={openDialog}>
                    <div >
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
                        variant= "outlined"
                        inputProps={{className: "inputProps"}}
                        InputLabelProps={{className:"inputLabelProps"}}
                        onChange={(e) => setNomeCompleto(e.target.value)}
                    />
                    <br/>
                    <div className="linha1">
                        <InputCPF
                            label = "CPF"
                            variant= "outlined"
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <InputDataNascimento
                            variant= "outlined"
                            type= "date"
                            onChange={(e) => setDataDeNascimento(e.target.value)}
                        />
                    </div>
                    
                    <br/>
                    <div className="linha2">
                        <InputEmail
                            label = "Email"
                            variant= "outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                       <InputTelefone
                            label = "Telefone"
                            variant= "outlined"
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>
                    
                    <br/>
                    <div className="linha3">
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
                   
                    <br/>
                    <div className="linha4">
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
                <CadastrarSecretarioButton onClick={handleForm}>
                    <h1>Cadastrar Secretário</h1>
                    <Check/>
                </CadastrarSecretarioButton>
            </ButtonSection>
        </Container>


    );

}

export default CadastroSecretarioForm;