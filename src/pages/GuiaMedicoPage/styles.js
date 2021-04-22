import styled from "styled-components";
import { Theme } from "../../utils/Styles/Theme";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    .content{
        height:100%;
        width:100%;
        display: flex;
        flex-direction: row-reverse;
        .first-section{
           width: 60%;
           height: 100%;
        } 
        .second-section{
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .exames-button{
                width: 100%;
                height: 30%;
                display: flex;
                justify-content: center;
                .button{
                    margin-top: 0.5rem;
                    width: 40%;
                    height: 100%;
                }
            }

            .dados-paciente{
                display: flex;
                width: 65%;
                height: 35%;
                border: 5px solid ${Theme.colors.$sispocThird};
                border-radius: 10px;
                .first{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width:40%;
                    height: 100%;
                }
                .second{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 60%;
                    height: 100%;
                    .info{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        height: 60%;
                        width: 100%;
                        >p{
                            color: gray;
                        }
                    }
                }
            }
            .filaEspera-terminarConsulta{
                height: 35%;
                width: 60%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }   
    }
`;

export const HeaderDiv = styled.div`
    height: 12%;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 20%;
    width: 8%;
    margin-top: 2rem;
`;
export const FichaCompletaBotao = styled.button`
  margin-top: 1rem;
  width: 10rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.$sispocThird};
  color: white;
  border: none;
  transition: all 0.3s ease 0s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`

export const FilaEsperaBotao = styled.button`
    margin-top: 1rem;
    width: 12.5rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    background-color: ${Theme.colors.$sispocThird};
    color: white;
    border: none;
    transition: all 0.3s ease 0s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    
    &:hover {
        background-color: #ff7800;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }

`

export const TerminarConsultaBotao = styled.button`
    width: 12.5rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    background-color: #16E01E;
    color: white;
    border: none;
    transition: all 0.3s ease 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
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
    
