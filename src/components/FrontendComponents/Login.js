import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div>
      <section className="p-5 position-absolute top-50 start-50 translate-middle">
        <div className="card border-dark">
          <form>
            <div className="bg-dark text-center">
              <h1 className="text-light">Login</h1>
            </div>
            <div className="container">
              <div className="row col my-3">
                <label className="form-label">Username</label>
                <input
                  className="form-control"
                  placeholder="Username..."
                  name="username"
                  type="text"
                  required
                />
              </div>
              <div className="row col my-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  placeholder="Password..."
                  type="password"
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <input
                className="btn border-dark a-con mt-3 mb-2"
                type="submit"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
