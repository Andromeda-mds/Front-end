import React from "react";
import {
  Container,
  ButtonSection,
  InputSection,
  LoginInput,
  LoginButton,
} from "./styles";

const LoginForm = () => {
  return (
    <Container>
      <InputSection>
        <form className="form">
          <LoginInput
            label="E-mail"
            variant="filled"
            InputProps={{ className: "inputProps" }}
            InputLabelProps={{className: "inputLabelProps"}}
            type="text"
          />
          <br/>
          <LoginInput
            label="Senha"
            variant="filled"
            InputProps={{ className: "inputProps" }}
            InputLabelProps={{className: "inputLabelProps"}}
            type="password"
          />
        </form>
      </InputSection>
      <ButtonSection>
        <LoginButton>Login</LoginButton>
      </ButtonSection>
    </Container>
  );
};

export default LoginForm;
