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
  LoginPageWrapper,
  OptionsBarDiv,
  OptionsBarWrapper,
  TabBarRigth,
  TabBarLeft,
  LogoDiv
} from "./styles";
import LoginForm from "../../Components/LoginForm";
import loginImage from "../../Assets/loginImage.svg";
import logo from "../../Assets/logo.svg";


const LoginPage = () => {
  const [changeTab, setChangeTab] = React.useState(1);

  return (
    <LoginPageWrapper>
      <Container>
        <FirstSection>
          <LoginTitle>
            <LogoDiv style={{ backgroundImage: `url(${logo})`}} />
            {/* <h1>SisPOC</h1> */}
          </LoginTitle>
          <LoginDescription>
            <DescriptionTitle>
              <h1>Sistema Para Organização de Consultórios</h1>
            </DescriptionTitle>
            <DescriptionText>
              <p>Bem vindo! Entre com sua conta para ter acesso.</p>
            </DescriptionText>
          </LoginDescription>
          <OptionsBarWrapper>
            <OptionsBarDiv>
              <TabBarLeft
                className={changeTab === 1 ? "active" : ""}
                label="médico"
                onClick={() => setChangeTab(1)}
              >
                médico
              </TabBarLeft>
              <TabBarRigth
                className={changeTab === 2 ? "active" : ""}
                label="secretário"
                onClick={() => setChangeTab(2)}
              >
                secretário
              </TabBarRigth>
            </OptionsBarDiv>
          </OptionsBarWrapper>
          <LoginForm Role={changeTab} />
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
