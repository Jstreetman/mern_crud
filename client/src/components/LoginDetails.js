import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Navbar from "./Navbar";
import FormFooter from "./FormFooter";

function LoginDetails() {
  return (
    <div>
      <Navbar />
      <Login />
      <FormFooter />
    </div>
  );
}

export default LoginDetails;
