import React from "react";
import { Container, LoginPageWrapper } from "./styles";
import LoginPage from "../LoginPage";

const Wrapper = () => {
  const [loginToken, setLoginToken] = React.useState(
    localStorage.getItem("id")
  );

  return (
    <Container>
      {loginToken ?? (
        <LoginPageWrapper>
          <LoginPage />
        </LoginPageWrapper>
      )}
    </Container>
  );
};
export default Wrapper;
