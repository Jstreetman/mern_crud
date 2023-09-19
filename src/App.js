import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/frontendcomponents/Navbar";
import NavbarDetails from "./components/frontendcomponents/NavbarDetails";
import Showcase from "./components/frontendcomponents/Showcase";
import About from "./components/frontendcomponents/About";
import Footer from "./components/frontendcomponents/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Showcase />
      <About />
      <Footer />
    </div>
  );
}

export default App;
