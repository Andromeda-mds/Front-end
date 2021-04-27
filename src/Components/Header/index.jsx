import React from "react";
import * as header from "./styles";
import logo from "../../Assets/logo.svg";
import ligthLogo from "../../Assets/ligthLogo.svg";
import darkLogo from "../../Assets/darkLogo.svg";
import { Redirect } from "react-router-dom";

const Header = () => {
  return (
    <header.Container>
      <header.section1>
        <a href="/homepage">
          <header.logoDiv style={{ backgroundImage: `url(${darkLogo})` }} />
        </a>
      </header.section1>
    </header.Container>
  );
};

export default Header