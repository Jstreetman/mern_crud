import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="position-absolute w-100">
      <footer className="bg-dark">
        <div className="container">
          <p className="card-text text-light text-center fs-3">
            Copyright © 2023 <span className="text-warning">J</span>streetman
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
