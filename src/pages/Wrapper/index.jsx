import React from "react";
import { Container } from "./styles";
import LoginPage from "../LoginPage";

const Wrapper = () => {
  const [loginToken, setLoginToken] = React.useState(
    localStorage.getItem("id")
  );

  return <Container>{loginToken ?? <LoginPage />}</Container>;
};
export default Wrapper;
