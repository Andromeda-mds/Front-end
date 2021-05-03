import React from "react";
import { Container, LoginPageWrapper } from "./styles";
import LoginPage from "../LoginPage";
import CadastroMedico from '../CadastroMedicoPage'

const Wrapper = () => {
  const [loginToken, setLoginToken] = React.useState(
    localStorage.getItem("loginToken")
  );

  return (
    <Container>
      {/* {loginToken !== null || loginToken === undefined ? (
        <LoginPageWrapper>
          <LoginPage />
        </LoginPageWrapper>
      ): <CadastroMedico /> */}
      <CadastroMedico />
    </Container>
  );
};
export default Wrapper;
