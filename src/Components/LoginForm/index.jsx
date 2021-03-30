import React from "react";
import {
  Container,
  ButtonSection,
  InputSection,
  LoginInput,
  LoginButton,
} from "./styles";

const LoginForm = () => {
  const [loginToken, setLoginToken] = React.useState(
    localStorage.getItem("loginToken")
  );
  // const [objectLogin, setObjectLogin] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    console.log(email);
    if (password === "clear-login-token")
      return localStorage.removeItem("loginToken");
    if (email.length > 0) {
      setLoginToken(`${email}-id`);
    }
    localStorage.setItem("loginToken", loginToken);
    console.log(loginToken);
    console.log(password);
  };

  return (
    <Container>
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
          <LoginInput
            label="Senha"
            variant="filled"
            InputProps={{ className: "inputProps" }}
            InputLabelProps={{ className: "inputLabelProps" }}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </InputSection>
      <ButtonSection>
        <LoginButton onClick={() => handleSubmit()}>Login</LoginButton>
      </ButtonSection>
    </Container>
  );
};

export default LoginForm;
