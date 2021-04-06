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
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';



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
              <div className="paginaMedico">
                <h1>Sou médico</h1>
                <div className="buttonSectionMedico">
                  <home.AgendaButton>
                    <EventIcon style={{ fontSize: 80 }} />
                    <h1>Agenda</h1>
                  </home.AgendaButton>
                  <home.GuiaMedicoButton>
                    <AssignmentIcon style= {{ fontSize: 70 }}/>
                    <h1>Guia Médico</h1>
                  </home.GuiaMedicoButton>
                </div>
              </div>
              :
              // <div className="paginaAdmin">
              //   <h1>Sou Admin</h1>
              //   <div className="buttonSectionAdmin">
              //     <home.BuscarMedicosAdmButton>
              //       <div className="buscarMedicosAdm">
              //         <AccountBoxIcon style={{  fontSize: 70 }} />
              //         <LocalHospitalIcon style={{  fontSize: 30}}/>
              //         <h1>Buscar Médicos</h1>
              //       </div>
              //     </home.BuscarMedicosAdmButton>
              //     <home.BuscarSecretariosAdmButton>
              //        <div className="buscarSecretariosAdm">
              //           <AccountBoxIcon style={{  fontSize: 70 }} />
              //           <AssignmentIcon style={{  fontSize: 30}} />
              //        </div>
              //         <h1>Buscar Secretários</h1>
              //     </home.BuscarSecretariosAdmButton>
              //     <home.CadastrarMedicoButton>
              //         <div className="cadastrarMedico">
              //           <AccountBoxIcon style={{  fontSize: 70 }} />
              //           <LocalHospitalIcon style={{  fontSize: 30}}/>
              //           <h1>Cadastrar Médico</h1>
              //         </div>
              //     </home.CadastrarMedicoButton>
              //     <home.CadastrarSecretario>
              //         <div className="cadastrarSecretario"> 
              //           <AccountBoxIcon style={{  fontSize: 70 }} />
              //           <AssignmentIcon style={{  fontSize: 30}} />
              //           <h1>Cadastrar Secretário</h1>
              //         </div>
              //     </home.CadastrarSecretario>

              //  </div>
              // </div>
              <div className="paginaSecretario">
                <h1>Sou secretário</h1>
                <div className="buttonSectionSecretario">
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
              </div>
            }
          </div>
        </home.ContentPage>
      </home.Container>
    </home.Wrapper>
  );
};

export default HomePage;
