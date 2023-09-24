import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Header, Segment, Form, Button } from "semantic-ui-react";

function NewsSection() {
  const [formData, setFormData] = useState({
    news: "",
  });
  return (
    <Container className="p-5">
      <Header as="h2">
        <Segment>Create Post</Segment>
      </Header>
      <Form>
        <Form.Group>
          <Form.TextArea
            className="w-100"
            placeHolder="Create... Read... Update... Delete..."
            required
            maxLength="250"
            columns="5"
            name="news"
          ></Form.TextArea>
        </Form.Group>
        <Button color="black">Post</Button>
      </Form>
    </Container>
  );
}

export default NewsSection;
