import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function BoardRoute({ path, render }) {
  
  return (
      <>
        { localStorage.getItem("loginToken") ? (
        localStorage.getItem("userRole") === "Admin" ? (
          <Route path={path} render={render} />
        ) : (
          <>
            <Redirect
              to={{pathname: "/homepage"}}
              />
            {errorNotification("Autorização negada", "Você não tem autorização para acessar essa página.")}
          </>
        )
      ) : (
        <>
          {successNotification("Acesse sua conta", "Você precisa acessar sua conta antes de acessar essa página.")}
          <Redirect to={{pathname: "/login" }}/>
        </>
      )}
    </>
  );
}