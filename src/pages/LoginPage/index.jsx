import React from "react";
import {
  Container,
  FirstSection,
  SecondSection,
  LoginTitle,
  LoginImageCard,
  ImageCardWrapper,
  LoginDescription,
  DescriptionTitle,
  DescriptionText,
  LoginPageWrapper
} from "./styles";
import LoginForm from "../../Components/LoginForm";
import loginImage from "../../Assets/loginImage.svg";

const LoginPage = () => {
  return(
    <LoginPageWrapper>
    <Container>
      <FirstSection>
        <LoginTitle><h1>SisPOC</h1></LoginTitle>
        <LoginDescription>
            <DescriptionTitle><h1>Sistema Para Organização de Consultórios</h1></DescriptionTitle>
            <DescriptionText><p>Bem vindo! Entre com  sua conta para ter acesso.</p></DescriptionText>
        </LoginDescription>
        
        <LoginForm />
      </FirstSection>
      <SecondSection>
        <ImageCardWrapper>
          <LoginImageCard style={{ backgroundImage: `url(${loginImage})` }} />
        </ImageCardWrapper>
      </SecondSection>
    </Container>
    </LoginPageWrapper>
  );
};

export default LoginPage;
