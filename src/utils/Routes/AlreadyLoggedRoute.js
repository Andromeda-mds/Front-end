import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

export default function AlreadyLoggedRoute({ path, render, exact }) {
  const [storageIsValid, setStorageIsValid] = React.useState(
    localStorage.getItem("loginToken")
  );
  if (storageIsValid) {
    if (storageIsValid.length < 10) localStorage.clear();
  }

  const decodedToken = storageIsValid
    ? decode(localStorage.getItem("loginToken"))
    : 1;

  return (
    <>
      {!localStorage.getItem("loginToken") ||
      decodedToken.exp <= Math.floor(new Date() / 1000) ? (
        <Redirect to={{ pathname: "/login" }} />
      ) : (
        <Route path={path} exact={exact} render={render} />
      )}
    </>
  );
}
