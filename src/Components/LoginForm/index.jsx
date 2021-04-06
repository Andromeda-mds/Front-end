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

import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import decode from 'jwt-decode'

const LoginForm = (props) => {
  const [loginToken, setLoginToken] = React.useState(
    localStorage.getItem("loginToken")
  );

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  // const [objectLogin, setObjectLogin] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);
  const [showCircularProgress, setShowCircularProgress] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const defineRole = (token) => {

    var name = decode(token).nome;
    console.log(name);
    console.log(props.Role);
    
    if(props.Role === 2 && name === "Adm"){
      return "adm"
    }else if(props.Role === 2){
      return "secretario"
    }else{
      return "medico"
    }
  }

  const handleSubmit = () => {
    // console.log(props.Role);
    setShowCircularProgress(true);
    axios
      .post(
        `${backendURL}${
          props.Role === 1 ? "medico" : "secretario"
        }/authenticate`,
        {
          email: email,
          senhaAcesso: password,
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("loginToken", res.data.token);

        localStorage.setItem(
          "role",
          `${defineRole(res.data.token)}`
        );
        setLoginToken(localStorage.getItem("loginToken"));
        setTimeout(() => {
          setShowCircularProgress(false);
          setLogin(!login);
        }, 3000);
      })
      .catch(async (err) => {
        setTimeout(() => {
          setShowCircularProgress(false);
          // alert("usuário ou senha inválido.");
          setOpen(true);
        }, 3000);
        console.log(err);
        // alert("usuário ou senha inválido.");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Container>
      {login ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <InputSection>
          <Backdrop style={{ zIndex: "99999" }} open={showCircularProgress}>
            <CircularProgress style={{ color: "#FF7800" }} />
          </Backdrop>
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
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          usuário ou senha inválido
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginForm;
