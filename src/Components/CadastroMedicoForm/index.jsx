import React from 'react';
import {
    Container,
    InputSection,
    InputNome,
    InputCEP,
    InputCPF,
    InputCRM,
    InputCidade,
    InputDataNascimento,
    InputEmail,
    InputEspecialidade,
    InputLogradouro,
    InputNumero,
    InputTelefone,
    ButtonSection,
    CadastrarMedicoButton,
    CadastroMedicoFormWrapper

} from "./styles"
import InputLabel from '@material-ui/core/InputLabel';
import Check from "@material-ui/icons/Check";


const CadastroMedicoForm = () => {
    return(
        <Container>
                <InputSection>
                <form className="form">
                    <InputNome
                        label = "Nome-Completo"
                        variant= "outlined"
                        inputProps={{className: "inputProps"}}
                        InputLabelProps={{className:"inputLabelProps"}}
    
                    />
                    <br/>
                    <div className="linha1">
                        <InputCPF
                            label = "CPF"
                            variant= "outlined"
                        />
                        <InputDataNascimento
                            variant= "outlined"
                            type= "date"
                        />
                    </div>
                    
                    <br/>
                    <div className="linha2">
                        <InputEmail
                            label = "Email"
                            variant= "outlined"
                        />
                        <InputCRM
                            label = "CRM"
                            variant= "outlined"
                        />
                    </div>
                    
                    <br/>
                    <div className="linha3">
                        
                        <InputEspecialidade
                            label = "Especialidade"
                            variant= "outlined"
                        >
                            <option aria-label="None" value="" />
                            <option value={"Cardiologista"}>Cardiologista</option>
                        </InputEspecialidade>

                        <InputTelefone
                            label = "Telefone"
                            variant= "outlined"
                        />
                    </div>
                    
                    <br/>
                    <div className="linha4">
                        <InputCEP
                            label = "CEP"
                            variant= "outlined"
                        />

                        <InputCidade
                            label = "Cidade"
                            variant= "outlined"
                         />
                    </div>
                   
                    <br/>
                    <div className="linha5">
                       <InputLogradouro
                            label = "Logradouro"
                            variant= "outlined"
                        />
                        <InputNumero
                            label = "Numero"
                            variant= "outlined"
                        /> 
                    </div>
                    
                </form>
                </InputSection>
            <ButtonSection>
                <CadastrarMedicoButton>
                    <h1>Cadastrar Médico</h1>
                    <Check/>
                </CadastrarMedicoButton>
            </ButtonSection>
        </Container>


    );

}

export default CadastroMedicoForm;