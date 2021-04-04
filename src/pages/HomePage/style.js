import styled from "styled-components";
import { Theme } from "../../utils/Styles/Theme";

export const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .content-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 15%;
  }
  .buttonSectionSecretario {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40%;
    padding: 4rem;
  }
  .buttonSectionMedico {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40%;
    padding: 4rem;
  }
`;

export const BuscarMedicosButton = styled.button`
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
  margin-left: 15%;
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  > h1 {
    font-weight: 600;
    width: 80%;
  }
  .buscarMedicos {
    display: flex;
    flex-direction: row;
  }
`;

export const BuscarPacientesButton = styled.button`
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
  margin-left: 15%;
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  > h1 {
    font-weight: 600;
    width: 80%;
  }
`;

export const NovaConsultaButton = styled.button`
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
  margin-left: 15%;
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  > h1 {
    font-weight: 600;
    width: 80%;
  }
  .calendario {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const AgendaButton = styled.button`
  width: 12.5rem;
  height: 11rem;
  border-radius: 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  background: ${Theme.colors.$sispocPrimary};
  color: #1b1b1b;
  border: none;
  display: flex;
  transition: all 0.3s ease 0s;
  justify-content: center;
  flex-direction: column;
  margin-left: 15%;
  align-items: center;
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  > h1 {
    font-weight: 600;
    width: 95%;
  }
`;

export const GuiaMedicoButton = styled.button`
  width: 12.5rem;
  height: 11rem;
  border-radius: 1.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
  background: ${Theme.colors.$sispocPrimary};
  color: #1b1b1b;
  border: none;
  display: flex;
  transition: all 0.3s ease 0s;
  justify-content: center;
  flex-direction: column;
  margin-left: 15%;
  align-items: center;
  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  > h1 {
    font-weight: 600;
    width: 96%;
    justify-content: center;
  }
`;

export const HeaderDiv = styled.div`
  height: 12%;
`;
