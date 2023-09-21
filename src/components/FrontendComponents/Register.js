import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
//

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessage("Registration successful!");
        // Clear form fields if registration is successful
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <section className="p-5 position-absolute top-50 start-50 translate-middle">
      <div className="card border-dark">
        <div>
          {/* Form */}
          <form className="form-control-lg" onSubmit={handleSubmit}>
            {/* Username input */}
            <div className="text-center">
              <h1 className="text-dark">Register</h1>
            </div>
            <div className="row col my-3">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                placeholder="Create Username..."
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email input */}
            <div className="row col my-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                placeholder="Email..."
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Password input */}
            <div className="row col my-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                placeholder="Create Password..."
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* Submit button */}
            <div className="text-center">
              <input
                className="btn border-dark a-con mt-3 mb-2"
                type="submit"
              />
            </div>
          </form>
          {/* Display registration message */}
          {message && <p>{message}</p>}
        </div>
      </div>
    </section>
  );
}

export default Register;
