import React, { Component } from "react";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import About from "./About";
import Footer from "./Footer";
import io from "socket.io-client";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor() {
    super();

    this.server = process.env.REACT_APP_API_URL || "";
    this.socket = io.connect(this.server);
  }

  render() {
    return (
      <div>
        <Navbar server={this.socket} socket={this.server} />
        <Showcase />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
