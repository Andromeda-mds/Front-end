import React from "react";

import * as home from "./style";
import Header from "../../Components/Header";

const HomePage = () => {
  return (
    <home.Wrapper>
      <home.Container>
        <home.SideBarDiv>
          <h1>sidebar</h1>
        </home.SideBarDiv>
        <home.ContentPage>
          <Header />
          <div className="content-div">
            <h1>content</h1>
          </div>
        </home.ContentPage>
      </home.Container>
    </home.Wrapper>
  );
};

export default HomePage;
