import React from "react";
import Navbar from "./components/FrontendComponents/Navbar";
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
