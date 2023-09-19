import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/FrontendComponents/Navbar";
import NavbarDetails from "./components/FrontendComponents/NavbarDetails";
import Showcase from "./components/FrontendComponents/Showcase";
import About from "./components/FrontendComponents/About";
import Footer from "./components/FrontendComponents/Footer";

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
