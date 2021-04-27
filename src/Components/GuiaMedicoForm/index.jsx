import React from "react";
import * as home from "./styles"



const GuiaMedicoForm = () =>{
    const [anamnese, setAnamnese] = React.useState("")
    const [exames, setExames] = React.useState("")
    const [diagnostico, setDiagnostico] = React.useState("")
    const [receita, setReceita] = React.useState("")

    return(
        <home.Container>
            <div className="camposPreenchimento">
                <home.Anamnese
                    label = "Anamnese"
                    variant= "outlined"
                    onChange={(e) => setAnamnese(e.target.value)}
                    multiline={true}
                    rows={5}
                />

                <home.Exames
                    label = "Exames"
                    variant= "outlined"
                    onChange={(e) => setExames(e.target.value)}
                    multiline={true}
                    rows={5}
                />
            
                <home.Diagnostico
                    label = "Diagnóstico"
                    variant = "outlined"
                    onChange={(e) => setDiagnostico(e.target.value)}
                    multiline={true}
                    rows={5}
                />

                <home.Receita
                    label = "Receita"
                    variant = "outlined"
                    onChange = {(e) => setReceita(e.target.value)}
                    multiline={true}
                    rows={5}
                />
            </div>
        </home.Container>




    );

}

export default GuiaMedicoForm