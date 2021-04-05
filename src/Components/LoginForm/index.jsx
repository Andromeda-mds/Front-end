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
import { backendURL } from "../../services/api";

const LoginForm = (props) => {
  const [loginToken, setLoginToken] = React.useState(
    localStorage.getItem("loginToken")
  );
  // const [objectLogin, setObjectLogin] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const handleSubmit = () => {

    console.log(props.Role)

    axios
      .post(
        `${backendURL}${props.Role === 1 ? "medico" : "secretario"}/authenticate`,
        {
          email: email,
          senhaAcesso: password,
        }
      )
      .then((res) => {
        console.log(res);

        localStorage.setItem("loginToken", res.data.token);
        localStorage.setItem("role", `${props.Role === 1 ? "medico" : "secretario" }`);
        setLoginToken(localStorage.getItem("loginToken"));
        setLogin(!login);
      })
      .catch((err) => {
        console.log(err);
        alert('usuário ou senha inválido.');
      });
  };
  return (
    <Container>
      {login ? (
        <Redirect to={{ pathname: "/" }} />
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
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
      </ButtonSection>
    </Container>
  );
};

export default LoginForm;
