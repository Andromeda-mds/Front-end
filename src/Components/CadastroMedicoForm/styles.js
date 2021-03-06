import styled from "styled-components";
import TextField from "@material-ui/core/TextField";   
import InputLabel from '@material-ui/core/InputLabel';   
import  Select  from "@material-ui/core/Select";
import {Field} from "formik"


export const CadastroMedicoFormWrapper = styled.div`
    height: 100vh;
    width: 100%;
    /* overflow-y: scroll; */
    scroll-snap-type: y mandatory;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    //background-color: green;
    height: 85%;
`;


export const InputSection = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 100%;
    height: 90%;
    padding: 2rem 0 0 2rem;
    .Linha-CPF-Data{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .Linha-Email-CRM{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .Linha-Especialidade-Telefone{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .Linha-CEP-Cidade{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .Linha-Logradouro-Numero{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
  }
`;



export const ButtonSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-left: 15rem;

`;

export const CadastrarMedicoButton = styled.button`
    width: 12.5rem;
    height: 2.5rem;
    border-radius: 0.625rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #16E01E;
    color: white;
    border: none;
    transition: all 0.3s ease 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #ff7800;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    >h1{
        font-weight: 500;
        width: 80%;
    }
    
`



export const InputNome = styled(TextField)`
    height: 4rem;
    width: 40%;
    padding-left: 1rem;
    margin-top: 1rem;
    .MuiOutlinedInput-root{
        border-radius: 8px;
        .Mui-focused{
            border-color: green;
        }
    }
`;

export const InputCPF = styled(TextField)`
    height: 4rem;
    width: 49.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
    

`;

export const InputDataNascimento = styled(TextField)`
    height: 4rem;
    width: 49.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
    .Mui-focused{
        border-color: green;
    }
`;

export const InputEmail = styled(TextField)`
    height: 4rem;
    width: 69.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputCRM = styled(TextField)`
    height:4rem;
    width: 30%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputEspecialidade = styled(Select)`
        height: 3.4rem;
        .MuiSelect-root{
            
        }
        .MuiSelect-outlined {
            border-radius: 8px;
            padding-left: 1rem;
            margin-top: 1rem; 
        }
        
        
`;

export const InputTelefone = styled(TextField)`
    height: 4rem;
    width: 39.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputCEP = styled(TextField)`
    height: 4rem;
    width: 30%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputCidade = styled(TextField)`
    height: 4rem;
    width: 69.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputLogradouro = styled(TextField)`
    height: 4rem;
    width: 79.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputNumero = styled(TextField)`
    height: 4rem;
    width: 20%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    border-radius: 50px;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

