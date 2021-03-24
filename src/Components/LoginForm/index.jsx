import React from "react";
import { Container, ButtonSection, InputSection, LoginInput, LoginButton } from "./styles";

const LoginForm = () => {
  return (
    <Container>
      <InputSection>
        <LoginInput />
        <LoginInput style={{borderTop: "none"}}/>
      </InputSection>
      <ButtonSection>
        <LoginButton>Login</LoginButton>
      </ButtonSection>
    </Container>
  );
};

export default LoginForm;
