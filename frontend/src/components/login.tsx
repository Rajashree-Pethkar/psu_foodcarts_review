import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

// Not used at the moment. Directly integrated in navmain
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <a onClick={() => loginWithRedirect()}>Login</a>;
};

export default LoginButton;