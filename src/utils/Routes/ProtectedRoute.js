import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function ProtectedRoute({path, render}) {

  return (
      <>
        {   localStorage.getItem("loginToken") ? 
            <Route path={path} render={render} />
            : (
              <>
                <Redirect to={{pathname: "/login" }}/>
                {alert("Acesse sua conta", "Você precisa acessar sua conta antes de acessar essa página.")}
              </>)
        }
      </>
  );
}