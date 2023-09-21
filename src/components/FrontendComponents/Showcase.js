import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Showcase.css";
import logo from "./react.svg";

function Showcase() {
  return (
    <div>
      <section className="bg-dark  text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                <span className="text-warning">J</span>
                <span className="text-light">
                  streetman's <span className="text-warning">Mern Project</span>{" "}
                </span>
              </h1>
              <p className="lead my-4">
                {" "}
                <span className="text-danger">MERN project</span> with{" "}
                <span className="text-warning">user registration/login</span>{" "}
              </p>
              <a
                href="https://www.linkedin.com/in/jonathan-streetman-483267287/"
                target="_blank"
              >
                <i className="bi bi-linkedin i-con text-light"></i>
              </a>
              <a
                className="ms-4"
                href="https://github.com/Jstreetman"
                target="_blank"
              >
                <i className="bi bi-github i-con text-light"></i>
              </a>
              <a
                className=" ms-4 mb-2 a-con btn border-light "
                href="https://jrsportfolio.com"
                target="_blank"
              >
                <i className="bi bi-person-circle "></i>
                Visit my website
              </a>
            </div>
            <img
              className="img-fluid rounded-circle p-con  w-50 d-none d-sm-block"
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Showcase;
