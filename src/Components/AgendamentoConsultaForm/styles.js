import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
`;

export const DialogSchedule = styled(Dialog)`

  .MuiDialog-paperWidthSm {
    min-width: 70%;
  }
`;

export const AgendamentoConsultaWrapper = styled.div`
  height: 100%;
  width: 100;
  scroll-snap-type: y mandatory;
`;

export const InputSection = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    width: 100%;
    height: 100%;
    //padding: 2rem 0 0 2rem;
    margin-left: 2rem;
  }
  .Linha-Nome-Paciente {
    width: 100%;
    height: 30%;
    margin-top: 2rem;
    display: flex;
    .nome-email {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .buttons {
      width: 74%;
      height: 83%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    //justify-content: space-between;
    .BotaoCadastrarPaciente {
      width: 20%;
      margin-left: 2.5rem;
    }
  }
  .Linha-Profissional {
    width: 80%;
    height: 15%;
    margin-top: 2rem;
    //flex-direction: row;
    display: flex;
    .BotaoVerAgenda {
      width: 20%;
      margin-left: 2.5rem;
    }
  }
  .Linha-Data-Horario {
    width: 35%;
    height: 16%;
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ButtonSection = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-left: 5rem;
`;

export const ConcluidoButton = styled.button`
  width: 12.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #16e01e;
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
  > h1 {
    font-weight: 500;
    width: 80%;
  }
`;

export const InputNomePaciente = styled(TextField)`
  height: 6rem;
  width: 100%;
  .MuiOutlinedInput-root {
    border-radius: 8px;
    .Mui-focused {
      border-color: green;
    }
  }
`;

export const InputDataConsulta = styled(TextField)`
  height: 4rem;
  width: 40%;
  padding-left: 1rem;
  margin-top: 1rem;
  color: gray;
  .MuiOutlinedInput-root {
    border-radius: 8px;
  }
  .Mui-focused {
    border-color: green;
  }
`;

export const InputProfissional = styled(Select)`
  height: 6rem;
  width: 100%;
  .MuiSelect-outlined {
    border-radius: 8px;
    padding-left: 1rem;
    margin-top: 1rem;
  }
`;

export const ButtonCadastrarPaciente = styled.button`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.625rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #55cbcd;
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
  > h1 {
    font-weight: 500;
    width: 80%;
  }
`;

export const ButtonVerAgenda = styled.button`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.625rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #55cbcd;
  color: white;
  border: none;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  :disabled {
    background-color: gray;
    &:hover {
      transform: translate(0);
      background-color: gray;
      box-shadow: none;
    }
  }
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  > h1 {
    font-weight: 500;
    width: 80%;
  }
`;

export const HorarioDaConsulta = styled(TextField)`
  width: 40%;
  margin-left: 2.5rem;
`;

export const FormCadastrarPaciente = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    min-width: 70%;
  }
`;
