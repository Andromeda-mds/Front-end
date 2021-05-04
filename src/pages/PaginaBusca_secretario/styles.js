import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';

export const Container = styled.div`
    height: 110vh;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    .content{
        height:89%;
        width:100%;
        .busca{
            display: flex;
            flex-direction: space-around;
            width: 100%;
            height: 17%;
            /* background-color: red; */
            .barra{
                /* background-color: red; */
                width: 40%;
                margin-left: 2rem;
            }
            .selecaoPesquisa{
                /* background-color: red; */
                width: 15%;
                display: flex;
                justify-content: space-around;
                .selecaoMedico{
                    display: flex;
                    flex-direction: column;
                    align-content: center;
                }
                .selecaoPaciente{
                    display: flex;
                    flex-direction: column;
                }
            }
            .botaoPesquisar{
                width: 25%;
                margin-left: 3rem;
            }
        }
        .resultados{
            height: 70%;
            /* background-color: lightblue; */
        }
    }
`;

export const HeaderDiv = styled.div`
    height: 12%;
`;

export const Titulo = styled.div`
    width: 100%;
    height: 15%;
    padding: 0.5rem;
    /* background-color:green; */
    display: flex;
    justify-content: space-between;
    .cabecalho{
        /* background-color: lightblue; */
        display: flex;
        width: 15%;
        >h1{
            font-size: 2rem;
            line-height: 40px;
            margin-left: 2rem;
            margin-top: 1rem;
        }
    }
`;

export const ProfileWrapper = styled.div`
    /* background-color: red; */
    height: 100%;
    width: 10%;
    justify-self: flex-end;
`;

export const BarraPesquisa = styled(TextField)`
  height: 3.4rem;
  width: 80%;
  padding-left: 1rem;
  margin-top: 1rem;
  color: gray;
  margin-left: 2rem;
`;

export const BotaoPesquisa = styled.button`
  width: 12.5rem;
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

  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const BotaoSelecao = styled(Radio)`
    display: flex;
    align-self: center;

`;