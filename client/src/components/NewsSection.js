import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Header, Segment, Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewsSection() {
  const [formData, setFormData] = useState({
    news: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setMessage("Post Successful!");
        setFormData({
          news: "",
        });

        setTimeout(() => {
          navigate("/news");
        }, 1000);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Create error:", error);
    }
  };
  return (
    <Container className="p-5">
      <Header as="h2">
        <Segment>Create Post</Segment>
      </Header>
      <Form onSubmit={handleSubmit} error={!!message}>
        <Form.Group>
          <Form.TextArea
            className="w-100"
            placeholder="Create... Read... Update... Delete..."
            required
            maxLength="250"
            columns="5"
            name="news"
            type="text"
            value={formData.news}
            onChange={handleChange}
          ></Form.TextArea>
        </Form.Group>
        <Button color="black">Post</Button>
      </Form>
    </Container>
  );
}

export default NewsSection;
