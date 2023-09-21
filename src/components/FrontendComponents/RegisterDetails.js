import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Navbar from "./Navbar";
import FormFooter from "./FormFooter";
import "./App.css";

function RegisterDetails() {
  return (
    <div>
      <Navbar />
      <Register />
      <FormFooter />
    </div>
  );
}

export default RegisterDetails;
