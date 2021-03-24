import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Wrapper from './pages/Wrapper';
import {GlobalStyles} from './styles/Global'

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
