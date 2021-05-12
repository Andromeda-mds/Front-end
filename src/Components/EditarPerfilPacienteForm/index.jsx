import React from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle } from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { backendURL } from "../../services/api";
import * as home from "./styles";
import { useEffect } from "react";

import { FormatAlignLeftSharp } from "@material-ui/icons";





const EditarPerfilPacienteForm = (props) => {

const [showCircularProgress, setShowCircularProgress] = React.useState(false);
const [clientData, setClientData] = React.useState({});
const [nomeCompleto, setNomeCompleto] = React.useState(props.nomeCompleto);
const [telefone, setTelefone] = React.useState(props.telefone);
const [email, setEmail] = React.useState(props.email);
const [dataDeNascimento, setDataDeNascimento] = React.useState(props.dataNascimento);
const [convenio, setConvenio] = React.useState(props.convenio);
const [cep, setCep] = React.useState(props.cep);
const [numero, setNumero] = React.useState(props.numero);
const [cpf, setCpf] = React.useState(props.cpf);
const [logradouro, setLogradouro] = React.useState(props.logradouro);
const [city, setCity] = React.useState(props.city);
const [openDialog, setOpenDialog] = React.useState(false);



const [clientToken, setClientToken] = React.useState(
    localStorage.getItem("loginToken")
  );

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
    let id = props.id
    console.log("id paciente", id)
    setShowCircularProgress(true);
    axios
        .put(`${backendURL}paciente/${id}`,{
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
            props.message(res.data.message);
            props.openSnack(true)
            setTimeout(() => setOpenDialog(!openDialog), 3000);
            var informacoes = {
                nomeCompleto: nomeCompleto,
                cpf: cpf,
                email: email,
                telefone: telefone,
                convenio: convenio,
                dataNascimento: dataDeNascimento,
                endereco: _endereco
            }
            props.data(informacoes) 
            props.trigger()
            props.mudou(true)
        })
        .catch((err) => {
            console.log("Ocorreu um erro: ", err);
            props.message("Dados inválidos")
            props.openErrorSnack(true)
            setTimeout(() => setShowCircularProgress(false), 3000);
        });
        
};

    const Convenios = [
        {
            label: "Nenhum",
            value: "nenhum"
        },
        {
            label: "Bradesco",
            value: "bradesco"
        },
        {
            label: "Unimed",
            value: "unimed"
        }
    ];

    const handleConvenio = (event) =>{
        setConvenio(event.target.value);
    }
    return (
        <home.Container>
           
            {/* <Dialog onClose={() => { setOpenDialog(!openDialog)}} open={openDialog}>
                <div className="caixaDialogo">
                    <DialogTitle>Dados salvos com sucesso!</DialogTitle>
                </div>
            </Dialog> */}
            <Backdrop open={showCircularProgress}>
                <CircularProgress />
            </Backdrop>
            <home.InputSection>
                <form className="form">
                    <home.InputNome
                        label="Nome-Completo"
                        name="nomeCompleto"
                        variant="outlined"
                        inputProps={{ className: "inputProps" }}
                        InputLabelProps={{ className: "inputLabelProps" }}
                        value={nomeCompleto}
                        onChange={(e) =>  setNomeCompleto(e.target.value) }
                        
                        
                    />
                    <br />
                    <div className="Linha-CPF-Data">
                        <home.InputCPF
                            name="cpf"
                            label="CPF"
                            variant="outlined"
                            type="text"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value) }
                        />
                        <home.InputDataNascimento
                            variant="outlined"
                            type="date"
                            value={dataDeNascimento}
                            onChange={(e) => setDataDeNascimento(e.target.value)}
                        />
                    </div>

                    <br />
                    <div className="Linha-Email-Telefone">
                        <home.InputEmail
                            name="email"
                            label="Email"
                            variant="outlined"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value) }
                        />
                        <home.InputTelefone
                            name="telefone"
                            label="Telefone"
                            variant="outlined"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value) }
                        />
                    </div>

                    <br />
                    <div className="Linha-Convenio">
                        <FormControl variant="outlined" style={{ width: "100%" }}>
                            <InputLabel id="convenio">Convênio</InputLabel>
                            <home.InputConvenio
                                labelId="convenio"
                                label="Convenio"
                                variant="outlined"
                                value={convenio}
                                onChange={handleConvenio}
                            >
                                {Convenios.map((v) => {
                                    return <MenuItem value={v.value}>{v.label}</MenuItem>
                                })}
                            </home.InputConvenio>
                        </FormControl>
                    </div>

                    <br />
                    <div className="Linha-CEP-Cidade">
                        <home.InputCEP
                            name="cep"
                            label="CEP"
                            variant="outlined"
                            value={cep}
                            onChange={(e) => setCep(e.target.value) }
                        />

                        <home.InputCidade
                            name="city"
                            label="Cidade"
                            variant="outlined"
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                    </div>

                    <br />
                    <div className="Linha-Logradouro-Numero">
                        <home.InputLogradouro
                            name="logradouro"
                            label="Logradouro"
                            variant="outlined"
                            value={logradouro}
                            onChange={(e) => { setLogradouro(e.target.value) }}
                        />
                        <home.InputNumero
                            name="numero"
                            label="Numero"
                            variant="outlined"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value) }
                        />
                    </div>
                </form>
            </home.InputSection>
            <home.ButtonSection>
                <home.EditarPacienteButton onClick={handleForm}>
                    <h1>Salvar alterações</h1>
                    <Check />
                </home.EditarPacienteButton>
            </home.ButtonSection>
        </home.Container>

    );


}
export default EditarPerfilPacienteForm;