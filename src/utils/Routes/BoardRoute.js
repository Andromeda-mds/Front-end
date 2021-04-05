import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

export default function BoardRoute({ path, render }) {
  const [storageIsValid, setStorageIsValid] = React.useState(localStorage.getItem("loginToken"))
  if (storageIsValid) {
    if (storageIsValid.length < 10) localStorage.clear();
  }
  const decodedToken = storageIsValid ? decode(localStorage.getItem("loginToken")) : 1;

  return (
    <>
      {!localStorage.getItem("loginToken") ||
      decodedToken.exp <= Math.floor(new Date() / 1000) ? (
        <Route path={path} render={render} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </>
  );
}
