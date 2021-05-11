import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroMedico from "./pages/CadastroMedicoPage";
import { GlobalStyles } from "./styles/Global";
import AlreadyLoggedRoute from "./utils/Routes/AlreadyLoggedRoute";
import BoardRoute from './utils/Routes/BoardRoute';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./utils/Routes/ProtectedRoute";
import CadastroSecretario from "./pages/CadastroSecretarioPage";
import AgendaMedico from "./pages/AgendaMedico";
import CadastroPaciente from "./pages/CadastroPacientePage";
import GuiaMedico from './pages/GuiaMedicoPage';
import PaginaBusca_secretario from './pages/PaginaBusca_secretario';
import AgendamentoConsultaPage from "./pages/AgendamentoConsulta";
import FichaPaciente from "./pages/FichaPacientePage";
import SolicitarExamePage from "./pages/SolicitarExamePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            path="/cadastro/medico"
            render={() => <CadastroMedico />}
          />
          <ProtectedRoute
            path="/cadastro/secretario"
            render={() => <CadastroSecretario />}
          />
          <ProtectedRoute
            path="/cadastro/paciente"
            render={() => <CadastroPaciente />}
          />  
          <ProtectedRoute
            path="/medico/agenda"
            render={() => <AgendaMedico />}
          />
          <ProtectedRoute
            path="/secretario/busca"
            render={() => <PaginaBusca_secretario/>}
          />
          <ProtectedRoute
            path="/guiamedico/solicitarExame"
            render={() => <SolicitarExamePage/>}
          />
          <ProtectedRoute path="/agendamentoconsulta" render={() => <AgendamentoConsultaPage />}/>
          <ProtectedRoute path="/guiamedico" render={() => <GuiaMedico />}/>
          <ProtectedRoute
            path="/secretario/fichaPaciente"
            render={() => <FichaPaciente/>}
          />
          <BoardRoute path="/login" render={() => <LoginPage />} />
          <AlreadyLoggedRoute path="/homepage" render={() => <HomePage />} />
          <AlreadyLoggedRoute path="/" render={() => <HomePage />} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
