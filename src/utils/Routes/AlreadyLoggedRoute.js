import React from 'react';
import { Route, Redirect } from 'react-router-dom';



export default function AlreadyLoggedRoute({path, render, exact}) {

  return (
      <>
        { !localStorage.getItem("loginToken") ? 
            (<Redirect to={{pathname: "/login" }}/>)
            :
            <Route path={path} exact={exact} render={render} />
            
        }
      </>
  );
}