import React, { useState } from "react";
import { Container, Form, Header, Message, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        setFormData({
          email: "",
          password: "",
        });

        // Redirect to /news after a delay
        setTimeout(() => {
          navigate("/news");
        }, 1000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Container>
      <section className="p-5 my-5">
        <Form onSubmit={handleSubmit} error={!!message}>
          <div className="text-center">
            <Header as="h1" className="text-dark">
              Login
            </Header>
          </div>
          <div className="container">
            <Form.Field className="my-3">
              <label>Email</label>
              <input
                placeholder="Email..."
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="my-3">
              <label>Password</label>
              <input
                placeholder="Password..."
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Field>
          </div>
          <div className="text-center">
            <Button type="submit" className="mt-3" color="black">
              Login
            </Button>
            {message && <Message error content={message} />}
          </div>
        </Form>
      </section>
    </Container>
  );
}

export default Login;
