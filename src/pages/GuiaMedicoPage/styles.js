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
export const Button = styled.button`
  margin-top: 1rem;
  width: 10rem;
  height: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.$sispocThird};
  color: #1b1b1b;
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