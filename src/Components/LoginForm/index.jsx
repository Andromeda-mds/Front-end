import axios from "axios";
import React from "react";
import {
  Container,
  ButtonSection,
  InputSection,
  LoginInput,
  LoginButton,
} from "./styles";

import { Redirect } from "react-router-dom";


const LoginForm = () => {
  const [loginToken, setLoginToken] = React.useState(
    localStorage.getItem("loginToken")
  );
  // const [objectLogin, setObjectLogin] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const handleSubmit = () => {
    // console.log(email);
    // if (password === "clear-login-token")
    //   return localStorage.removeItem("loginToken");
    // if (email.length > 0) {
    //   setLoginToken(`${email}-id`);
    // }
    // localStorage.setItem("loginToken", loginToken);
    // console.log(loginToken);
    // console.log(password);

    axios
      .post("http://localhost:3001/login", {
        username: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        setLogin(!login);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      {login ? (
        <Redirect to={{ pathname: "/homepage" }} />
      ) : (
        <InputSection>
          <form className="form">
            <LoginInput
              label="E-mail"
              variant="filled"
              InputProps={{ className: "inputProps" }}
              InputLabelProps={{ className: "inputLabelProps" }}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          <br />
          <div className="input-password">
            <LoginInput
              id="password"
              label="Senha"
              variant="filled"
              InputProps={{ className: "inputProps" }}
              InputLabelProps={{ className: "inputLabelProps" }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </form>
        </InputSection>
      )}
      <ButtonSection>
        <LoginButton onClick={() => handleSubmit()}>Login</LoginButton>
      </ButtonSection>
    </Container>
  );
};

export default LoginForm;
