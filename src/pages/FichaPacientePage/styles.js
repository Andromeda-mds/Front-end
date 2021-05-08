import styled from "styled-components";
import { Theme } from "../../utils/Styles/Theme";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* overflow-y: scroll;
  scroll-snap-type: y mandatory; */
  .content {
    height: 89%;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    .Dados-Botoes {
      height: 90%;
      width: 90%;
      display: flex;
      .DadosUsuario {
        height: 80%;
        width: 50%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        >p {
          margin-left: 2.5rem;
          margin-top: 1rem;
        }
        .botaoEdicao {
          height: 10%;
          width: 25%;
          display: flex;
          align-self: center;
          margin-top: 2rem;
        }
      }
      .Botoes {
        height: 80%;
        width: 60%;
        display: flex;
        flex-direction: column;
        .prontuarioPaciente {
          height: 10.625rem;
          width: 12rem;
          align-self: center;
          background-color: lightyellow;
        }
        .prontuario-consulta{
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .botoes-FilaEspera-DesmarcarConsulta {
          height: 6rem;
          width: 18rem;
          align-self: center;
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          /* background-color: lightseagreen; */
        }
      }
    }
  }
`;

export const Voltar = styled.div`
  width: 10%;
  height: 10%;
  >a{
    display: flex;
    text-decoration: none;
    align-items: center;
    color: grey;
    >span {
      margin-left: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      cursor: pointer;
      width: 100%;
      :hover {
        color: lightgrey;
        text-decoration: underline;
      }
    >h1 {
      font-size: 1.5rem;
      margin-left: 2rem;
      align-self: center;
    }
  }
  }
  
`;

export const Titulo = styled.div`
  width: 100%;
  height: 15%;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  .cabecalho {
    /* background-color: lightblue; */
    margin-left: 1.5rem;
    display: flex;
    width: 40%;
    > h1 {
      font-size: 2rem;
      line-height: 40px;
      margin-left: 2rem;
      margin-top: 1rem;
      /* background-color: red; */
    }
  }
`;

export const ProfileWrapper = styled.div`
  /* background-color: red; */
  height: 100%;
  width: 10%;
  justify-self: flex-end;
`;

export const HeaderDiv = styled.div`
  height: 12%;
`;

export const BotaoEditarDados = styled.button`
  width: 13rem;
  height: 2.5rem;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: #77e8ea;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ff7800;
    color: #fff;
  }
`;

export const BotaoProntuario = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.$sispocPrimary};
  color: white;
  border: none;
  transition: all 0.3s ease 0s;
  display: flex;
  flex-wrap: wrap;
  outline: none;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  > h1 {
    /* padding: 1.5rem 0.5rem 0.5rem 0.5rem; */
    height: 20%;
    font-weight: 500;
    width: 100%;
  }
`;

export const BotaoAlertaConsulta = styled.button`
  width: 20rem;
  height: 15rem;
  border-radius: 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.$sispocOrange};
  color: white;
  border: none;
  transition: all 0.3s ease 0s;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  align-self: center;
  > p {
    margin-top: 0.7rem;
  }
  >span{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const BotaoColocarFilaEspera = styled.button`
  width: 18rem;
  height: 2.5rem;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 400;
  color: white;
  background-color: ${Theme.colors.$sispocGreen};
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BotaoDesmarcarConsulta = styled.button`
  width: 18rem;
  height: 2.5rem;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: white;
  background-color: ${Theme.colors.$sispocRed};
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  > h1 {
    font-weight: 400;
  }
`;
