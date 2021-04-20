import styled from "styled-components";
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"

export const CadastroPacienteFormWrapper = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-type: y mandatory;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    padding: 2rem 0 0 2rem;
    .Linha-CPF-Data{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .Linha-Email-Telefone{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .Linha-Convenio{
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
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CadastrarPacienteButton = styled.button`
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
    height: 3.4rem;
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
    height: 3.4rem;
    width: 49.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }  
`;

export const InputDataNascimento = styled(TextField)`
    height: 3.4rem;
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
    height: 3.4rem;
    width: 70.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputConvenio = styled(Select)`
        height: 3.4rem;
        //width: 60%; 
        //background-color:red;
        .MuiSelect-root{
            
        }
        .MuiSelect-outlined {
            border-radius: 8px;
            padding-left: 1rem;
            margin-top: 1rem;
            //background-color: green; 
        }
        
        
`;

export const InputTelefone = styled(TextField)`
    height: 3.4rem;
    width: 29%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputCEP = styled(TextField)`
    height: 3.4rem;
    width: 30%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputCidade = styled(TextField)`
    height: 3.4rem;
    width: 69.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputLogradouro = styled(TextField)`
    height: 3.4rem;
    width: 79.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputNumero = styled(TextField)`
    height: 3.4rem;
    width: 20%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    border-radius: 50px;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;