import React, { useState } from "react";
import { Container, Form, Message, Header, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
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

        // Redirect to login after a delay
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Container className="p-5 my-5" text>
      <Form onSubmit={handleSubmit} error={!!message}>
        <Header as="h1" textAlign="center">
          Register
        </Header>
        <Form.Input
          label="Username"
          placeholder="Create Username..."
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Form.Input
          label="Email"
          placeholder="Email..."
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Form.Input
          label="Password"
          placeholder="Create Password..."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="mt-3" color="black">
          Register
        </Button>
        {message && <Message error content={message} />}
      </Form>
    </Container>
  );
}

export default Register;
