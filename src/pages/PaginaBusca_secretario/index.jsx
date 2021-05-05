import React from "react";
import * as home from "./styles";
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { backendURL } from "../../services/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

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

        }


    }

    var listaMedicos = []
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
                <div className="resultados">
                    {info.data && (
                        <ul>
                          {info.data.map((medico) => {
                            <li key={medico._id}></li>
                            })}  
                        </ul> 
                    )}
                    
                </div>
            </div>


        </home.Container>





    );



}

export default PaginaBusca_secretario