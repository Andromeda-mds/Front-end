import React from "react";
import * as home from "./styles";
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { backendURL } from "../../services/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import BotaoPerfilUsuario from "./styles";

const PaginaBusca_secretario = () =>{

    const [nome, setNome] = React.useState("");
    const [valorSelecionado, setValorSelecionado] = React.useState("paciente")
    const [showCircularProgress, setShowCircularProgress] = React.useState(false);
    const [info, setInfo] = React.useState({});
    const [clientToken, setClientToken] = React.useState(
        localStorage.getItem("loginToken")
      );
    const handlePesquisa = () =>{
        setShowCircularProgress(true);
        if(valorSelecionado === "medico"){
            axios
                .get(
                    `${backendURL}medico/nome/${nome}`,
                    { headers: {"x-access-token" : `${clientToken}`}}
                )
                .then((res) => {
                    console.log(res)
                    setInfo(res)
                    setTimeout(() => setShowCircularProgress(false), 3000);
                })
                .catch((err) =>{
                    console.log(err)
                    setTimeout(() => setShowCircularProgress(false), 3000);
                })

        }
        else if(valorSelecionado === "paciente"){
            axios
                .get(
                    `${backendURL}paciente/nome/${nome}`,
                    { headers: {"x-access-token" : `${clientToken}`}}
                )
                .then((res) => {
                    console.log(res)
                    setInfo(res)
                    setTimeout(() => setShowCircularProgress(false), 3000);
                })
                .catch((err) =>{
                    console.log(err)
                    setTimeout(() => setShowCircularProgress(false), 3000);
                })
        }


    }

    
    return (
        <home.Container>
            <Backdrop open={showCircularProgress}>
                <CircularProgress />
            </Backdrop>
            <home.HeaderDiv>
                <Header/>
            </home.HeaderDiv>
            <div className="content">
                <home.Titulo>
                    <div className="cabecalho">
                        <SearchIcon style={{ fontSize: 60 }}/>
                        <h1>Busca</h1>
                    </div>
                    
                    <home.ProfileWrapper>
                        <ProfileIcon/>
                    </home.ProfileWrapper>
                </home.Titulo>
                <div className="busca">
                    <div className="barra">
                      <home.BarraPesquisa
                        label="Insira o nome"
                        variant="filled"
                        InputProps={{ className: "inputProps" }}
                        InputLabelProps={{ className: "inputLabelProps" }}
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                    />  
                    </div>
                    <div className="selecaoPesquisa">
                        <div className="selecaoMedico">
                            <h1>Médicos</h1>
                            <home.BotaoSelecao
                            color="primary"
                            value="medico"
                            onChange={(e) => setValorSelecionado(e.target.value)}
                            checked={valorSelecionado === "medico"}
                        />
                        </div>
                        <div className="selecaoPaciente">
                            <h1>Pacientes</h1>
                            <home.BotaoSelecao
                                color="primary"
                                value="paciente"
                                onChange={(e) => setValorSelecionado(e.target.value)}
                                checked={valorSelecionado === "paciente"}
                            />

                        </div>
                         
                    </div>
                    <div className="botaoPesquisar">
                        <home.BotaoPesquisa onClick={handlePesquisa}>Pesquisar</home.BotaoPesquisa>
                    </div>
                </div>
               
                    {valorSelecionado == "medico" ? (
                        <div className="resultados">
                            {info.data && (
                                <div className="wrapper">
                                {info.data.map((medico) => (
                                    <div className="itemResultado" key={medico._id}>
                                        <div className="iconeUsuario">
                                            <PersonOutlineIcon style={{ fontSize: 60 }}/>
                                        </div>
                                        <div className="dadosUsuario">
                                            <p> <b>Nome:</b> {medico.nomeCompleto} </p>
                                            <p>  <b>CRM:</b> {medico.crm}  </p>
                                            <p> <b>Especialidade:</b> {medico.especialidade}</p>
                                        </div>
                                        <div className="botaoPerfil">
                                            <BotaoPerfilUsuario>Visualizar perfil completo</BotaoPerfilUsuario>
                                        </div>
                                    </div>
                                    
                                    
                                    ))}  
                                </div> 
                            )}
                        </div>

                    ) : (
                       <div className="resultados">
                            {info.data && (
                                <div className="wrapper">
                                {info.data.map((paciente) => (
                                    <div className="itemResultado" key={paciente._id}>
                                        <div className="iconeUsuario">
                                            <PersonOutlineIcon style={{ fontSize: 60 }}/>
                                        </div>
                                        <div className="dadosUsuario">
                                            <p> <b>Nome:</b> {paciente.nomeCompleto} </p>
                                            <p>  <b>CPF:</b> {paciente.cpf}  </p>
                                            <p> <b>Convenio:</b> {paciente.convenio}</p>
                                        </div>
                                        <div className="botaoPerfil">
                                            <BotaoPerfilUsuario>Visualizar perfil completo</BotaoPerfilUsuario>
                                        </div>
                                    </div>
                                    
                                    
                                    ))}  
                                </div> 
                            )}
                        </div>
                    )}
                    
                
                
            </div>


        </home.Container>





    );



}

export default PaginaBusca_secretario