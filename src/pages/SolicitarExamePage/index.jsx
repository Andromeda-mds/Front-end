import React from "react";
import * as home from "./styles"
import Header from "../../Components/Header";
import ProfileIcon from "../../Components/ProfileIcon";
import DescriptionIcon from '@material-ui/icons/Description';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Check from "@material-ui/icons/Check";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {InputTipodeExame} from "./styles";
import MenuItem from "@material-ui/core/MenuItem";


const SolicitarExamePage = () => {
    const TiposDeExames = [
        {
          label: "Hemograma",
          value: "hemograma",
        },
        {
          label: "PCR",
          value: "pcr",
        },
        {
          label: "Albumina",
          value: "albumina",
        },
        {
          label: "Raio-X",
          value: "raio-x",
        },
        {
          label: "Colesterol",
          value: "colesterol",
        },
      ];


    return (
        <home.Container>
            <home.HeaderDiv>
                <Header/>
            </home.HeaderDiv>
            <div className="content">
            <home.Titulo>
               <h1>Solicitar Exame</h1>
                <home.ProfileWrapper>
                    <ProfileIcon/>
                </home.ProfileWrapper>       
            </home.Titulo>
            <div className="camposPreenchimento">
               <div className="TipoExame">
                <FormControl variant="outlined" style={{ width: "60%" }}>
                    <InputLabel id="tipoexame">Tipo do exame</InputLabel>
                        <InputTipodeExame 
                            labelId="Tipos de Exame"
                            label="Tipos de Exame"
                            variant="outlined"
                        >
                            {TiposDeExames.map((v,i) => {
                                return <MenuItem key={i} value={v.value}>{v.label}</MenuItem>;
                            })}
                        </InputTipodeExame>
                </FormControl>
                </div>
                <div className="DetalhesdoExame">
                    <home.DetalhesdoExame
                        label = "Detalhes do Exame"
                        variant= "outlined"
                        // onChange={(e) => setdetalhesdoExame(e.target.value)}
                        multiline={true}
                        rows={5}
                    />
                </div>
                <div className="BotaoSolicitarExame">
                    <home.AdicionarProntuarioBotao>
                        Adicionar ao prontuário
                    </home.AdicionarProntuarioBotao>
                </div>
            </div>  
            </div>
        </home.Container>
    );
}

export default SolicitarExamePage;