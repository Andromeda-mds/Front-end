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
    /* flex-direction: column; */
    width: 100%;
    height: 50%;
    justify-content: center;
    
    .content-secretario{
      display: flex;
      width: 100%;
      justify-content: center;
    }

    .content-medico {
      display: flex;
      width: 100%;
      justify-content: center;
    }

    .content-Admin{
      display: flex;
      height: 100vh;
      width: 100%;
      justify-content: center;
    }
  }
  .buttonSectionSecretario {
    display: flex;
    width: 100%;
    height: 40%;
    padding: 4rem;
  }
  .buttonSectionMedico {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 40%;
    padding: 4rem;
  }
  .buttonSectionAdmin{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        padding: 2rem;
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
  margin-left: 9%;
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

  .buscarMedicos{
    display: flex;
    justify-content: center;
    /* margin-bottom: 1rem; */
    padding-left: 3rem;
    position: relative;
    .search{
      position: absolute;
    }
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
    position: relative;
    .add{
      position: fixed;
      padding: 1.7rem;
    }
  }
`;





export const HeaderDiv = styled.div`
  height: 12%;
  /* box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4); */
`;


export const BuscarMedicosAdmButton = styled.button`
    width: 12.5rem;
    height: 11rem;
    border-radius: 1.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    background: ${Theme.colors.$sispocPrimary};
    color: #1B1B1B;
    border: none;
    display: flex;
    transition: all 0.3s ease 0s;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    outline-style: none;
    &:hover{
        background-color: #ff7800;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    >h1{
      font-weight: 600;
      width: 80%;
    }
    .buscarMedicosAdm{
      //display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      position: relative;
      /* .lupa{
        background-color: green;
        position: fixed;
        top: 18.5rem;
        left: 8.3rem;
        color: ${Theme.colors.$sispocPrimary};
      } */
    }

`;

export const BuscarSecretariosAdmButton = styled.button`
    width: 12.5rem;
    height: 11rem;
    border-radius: 1.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    background: ${Theme.colors.$sispocPrimary};
    color: #1B1B1B;
    border: none;
    display: flex;
    transition: all 0.3s ease 0s;
    justify-content: center;
    flex-direction: column;
    margin-left: 10%;
    align-items: center;
    outline-style: none;
    &:hover{
        background-color: #ff7800;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    >h1{
        font-weight: 600;
        width: 96%;
        justify-content: center;
    }

`;

export const CadastrarMedicoButton = styled.button`
    width: 12.5rem;
    height: 11rem;
    border-radius: 1.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    background: ${Theme.colors.$sispocPrimary};
    color: #1B1B1B;
    border: none;
    display: flex;
    transition: all 0.3s ease 0s;
    justify-content: center;
    flex-direction: column;
    margin-left: 10%;
    align-items: center;
    outline-style: none;
    &:hover{
        background-color: #ff7800;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    >h1{
        font-weight: 600;
        width: 96%;
        justify-content: center;
    }
    .cadastrarMedico{
        padding: 2.5rem;
        height: 100%;
        width: 100%;
        color: black;
    }
    >a{
      height: 100%;
      width: 100%;
    }

`;

export const CadastrarSecretario = styled.button`
    width: 12.5rem;
    height: 11rem;
    border-radius: 1.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    background: ${Theme.colors.$sispocPrimary};
    color: #1B1B1B;
    border: none;
    display: flex;
    transition: all 0.3s ease 0s;
    justify-content: center;
    flex-direction: column;
    margin-left: 10%;
    align-items: center;
    outline-style: none;
    &:hover{
        background-color: #ff7800;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    >h1{
        font-weight: 600;
        width: 96%;
        justify-content: center;
    }
    .cadastrarSecretario{
      padding: 2.5rem;
      height: 100%;
      width: 100%;
      color: black;
    }
    >a{
      height: 100%;
      width: 100%;
    }
`

export const ProfileWrapper = styled.div`
    height: 5%;
    width: 5%;
    margin-top: 5%;
`;
