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
        <LoginButton>Login</LoginButton>
      </ButtonSection>
    </Container>
  );
};

export default LoginForm;
