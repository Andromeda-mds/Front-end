import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4f0f0;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Container = styled.div`
  height: 85%;
  width: 95%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: #fff;
`;

export const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  background: #77e8ea;
`;

export const LoginTitle = styled.div`
  //display: flex;
  //align-items: center;
  width: 100%;
  height: 20%;
  //background-color: green;
  /* > h1 {
    color: #77e8ea;
    font-size: 1.2rem;
    line-height: 49.03px;
  } */
`;

export const LoginImageCard = styled.div`
  width: 100%;
  height: 71%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ImageCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 80%;
`;

export const LoginDescription = styled.div`
  width: 100%;
  height: 30%;
`;

export const DescriptionTitle = styled.div`
  margin: 0 0 0 2rem;
  > h1 {
    color: #77e8ea;
    font-size: 2rem;
    line-height: 40px;
  }
`;

export const DescriptionText = styled.div`
  margin: 1rem 0 0 2rem;
  > p {
    color: gray;
    font-size: 1rem;
    line-height: 40px;
  }
`;

export const OptionsBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const OptionsBarDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  border-radius: 3rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .active {
    transition: 0.3s;
    background-color: #FF7800;
    color: white;
  }
`;

export const TabBarRigth = styled.span`
  height: 3rem;
  width: 100%;
  cursor: pointer;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  border-radius: 0 3rem 3rem 0;

`;
export const TabBarLeft = styled.span`
  height: 3rem;
  width: 100%;
  cursor: pointer;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  border-radius: 3rem 0 0 3rem;
`;

export const LogoDiv = styled.div`
    width: 15%;
    height: 100%;
    background: no-repeat center;
    background-size: 7rem 7rem;
    margin-left: 12rem;
    padding: 3rem 3rem 3rem 3rem;
`;
