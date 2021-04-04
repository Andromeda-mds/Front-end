import React from "react";
import {
  Container,
  ButtonSection,
  InputSection,
  LoginInput,
  LoginButton,
} from "./styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const LoginForm = (props) => {
  const [passwordVisibility, setPasswordVisibility] = React.useState(true);


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

          <div className="input-password">
            <LoginInput
              id="password"
              label="Senha"
              variant="filled"
              InputProps={{ className: "inputProps" }}
              InputLabelProps={{ className: "inputLabelProps" }}
              type={passwordVisibility ? "password" : "text"}
            />

            <span
              className="icon"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              {passwordVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>

        </form>
      </InputSection>
      <ButtonSection>
        <LoginButton onClick={() => handleSubmit()}>Login</LoginButton>
      </ButtonSection>
    </Container>
  );
};

export default LoginForm;
