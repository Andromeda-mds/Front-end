import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Wrapper from './pages/Wrapper';
import CadastroMedico from './pages/CadastroMedicoPage'
import {GlobalStyles} from './styles/Global'
import AlreadyLoggedRoute from './utils/Routes/AlreadyLoggedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './utils/Routes/ProtectedRoute'
import CadastroSecretario from './pages/CadastroSecretarioPage'


function App() {
  return (
    <>
      <BrowserRouter>
          {/* <Wrapper /> */}
          <Switch>
            <ProtectedRoute path="/cadastro/medico" render={() => <CadastroMedico />} />
            <ProtectedRoute path="/cadastro/secretario" render={() => <CadastroSecretario />} />
            <Route path="/login" render={() => <LoginPage />} />
            <AlreadyLoggedRoute path="/homepage" render={() => <HomePage />}/>
          </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
