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


const CadastroSecretarioForm = () => {
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
                       <InputTelefone
                            label = "Telefone"
                            variant= "outlined"
                        />
                    </div>
                    
                    <br/>
                    <div className="linha3">
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
                    <div className="linha4">
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
                <CadastrarSecretarioButton>
                    <h1>Cadastrar Secretário</h1>
                    <Check/>
                </CadastrarSecretarioButton>
            </ButtonSection>
        </Container>


    );

}

export default CadastroSecretarioForm;