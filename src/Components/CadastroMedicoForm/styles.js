import styled from "styled-components";
import TextField from "@material-ui/core/TextField";      

export const CadastroMedicoFormWrapper = styled.div`
    height: 100vh;
    width: 100%;
    /* overflow-y: scroll; */
    scroll-snap-type: y mandatory;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


export const InputSection = styled.div`
    width: 100%;
  height: 35%;
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
    .linha1{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .linha2{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .linha3{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .linha4{
        width: 40%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .linha5{
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

export const CadastrarMedicoButton = styled.button`
     width: 12.5rem;
     height: 2.5rem;
     border-radius: 10px;
     box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`



export const InputNome = styled(TextField)`
    height: 3.4rem;
    width: 40%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
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
    width: 69.5%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputCRM = styled(TextField)`
    height: 3.4rem;
    width: 30%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputEspecialidade = styled(TextField)`
    height: 3.4rem;
    width: 60%;
    padding-left: 1rem;
    margin-top: 1rem;
    color: gray;
    .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`;

export const InputTelefone = styled(TextField)`
    height: 3.4rem;
    width: 39.5%;
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