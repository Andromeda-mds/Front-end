import React from "react";

import * as home from "./style";
import Header from "../../Components/Header";

const HomePage = () => {

  const [isMedico, setIsMedico] = React.useState(false);

  return (
    <home.Wrapper>
      <home.Container>
        <home.ContentPage>
          <Header />
          <div className="content-div">
            <h1>content</h1>
            {
              isMedico ? 
              <div>
                <h1>Sou médico</h1>
              </div>
              :
              <div>
                <h1>Sou secretário</h1>
              </div>
            }
          </div>
        </home.ContentPage>
      </home.Container>
    </home.Wrapper>
  );
};

export default HomePage;
