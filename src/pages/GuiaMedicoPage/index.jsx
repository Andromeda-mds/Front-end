import React from "react";
import * as home from "./styles"
import Header from "../../Components/Header";
import GuiaMedicoForm from "../../Components/GuiaMedicoForm";
import ProfileIcon from "../../Components/ProfileIcon";
import BotaoQuadrado from "../../Components/BotaoQuadrado";
import DescriptionIcon from '@material-ui/icons/Description';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Check from "@material-ui/icons/Check";



const GuiaMedicoPage = () => {

    return (
        <home.Container>
            <home.HeaderDiv>
                <Header/>
            </home.HeaderDiv>
            <div className="content">
                <home.ProfileWrapper>
                    <ProfileIcon/>
                </home.ProfileWrapper>
                <div className="second-section">
                    <div className="exames-button">
                        <div className="button">
                            <BotaoQuadrado
                                title={"Solicitar Exames"}
                                image={DescriptionIcon}
                            />
                        </div>
                    </div>
                    <div className="dados-paciente">
                        <div className="first">
                            <PersonOutlineIcon style={{ fontSize: 70 , color: "gray" }}/>
                        </div>
                        <div className="second">
                            <div className="info">
                                <p>Nome: <b>Antonio</b></p>
                                <p>Idade:</p>
                                <p>Convênio</p>
                            </div>
                            <home.FichaCompletaBotao>Ficha completa</home.FichaCompletaBotao>
                        </div>
                    </div>
                    <div className="filaEspera-terminarConsulta">
                        <home.FilaEsperaBotao>Ver fila de espera</home.FilaEsperaBotao>
                        
                        <home.TerminarConsultaBotao>
                            <h1>Terminar consulta</h1>
                            <Check/>
                        </home.TerminarConsultaBotao>
                    </div>
                </div>
                <div className="first-section">
                    <GuiaMedicoForm/>
                </div>
            </div>
        </home.Container>

    );
}

export default GuiaMedicoPage