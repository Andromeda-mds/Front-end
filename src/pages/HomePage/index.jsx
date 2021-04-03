import React from "react";

import * as home from "./style";
import Header from "../../Components/Header";
import FindInPageIcon from '@material-ui/icons/FindInPage';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CalendarToday from "@material-ui/icons/CalendarToday";
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddIcon from '@material-ui/icons/Add';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';

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
          <div className="buttonSection">
            <home.BuscarMedicosButton>
              <div className="buscarMedicos">
                <AccountBoxIcon style={{  fontSize: 70 }} />
                <SearchIcon style={{  fontSize: 60 }}/>
              </div>
              <h1>Buscar Médicos</h1>
            </home.BuscarMedicosButton>
            <home.BuscarPacientesButton>
              <FindInPageIcon style={{  fontSize: 70 }}/>
              <h1>Buscar ficha de paciente</h1>
            </home.BuscarPacientesButton>
            <home.NovaConsultaButton>
              <div className="calendario">
                <CalendarToday style={{  fontSize: 70 }}/>
                <div className="add">
                  <AddIcon style={{  fontSize: 30}}/>
                </div>
              </div>
              <h1>Nova consulta</h1>
            </home.NovaConsultaButton>
          </div>
        </home.ContentPage>
      </home.Container>
    </home.Wrapper>
  );
};

export default HomePage;
