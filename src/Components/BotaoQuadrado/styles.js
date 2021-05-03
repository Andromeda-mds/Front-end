import styled from "styled-components";
import { Theme } from "../../utils/Styles/Theme";

export const BotaoQuadrado = styled.button`
  width: 12.5rem;
  height: 11rem;
  border-radius: 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.$sispocPrimary};
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
  > h1 {
    padding: 1.5rem 0.5rem 0.5rem 0.5rem;
    height: 20%;
    font-weight: 600;
    width: 80%;
  }
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;