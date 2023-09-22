import React from "react";
import { Container, Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Login() {
  return (
    <Container>
      <section className="p-5">
        <Form>
          <div className=" text-center">
            <Header as="h1" className="text-dark">
              Login
            </Header>
          </div>
          <div className="container">
            <Form.Field className="my-3">
              <label>Username</label>
              <input
                placeholder="Username..."
                name="username"
                type="text"
                required
              />
            </Form.Field>
            <Form.Field className="my-3">
              <label>Password</label>
              <input
                placeholder="Password..."
                type="password"
                name="password"
                required
              />
            </Form.Field>
          </div>
          <div className="text-center">
            <Button type="submit" className="mt-3" color="black">
              Login
            </Button>
          </div>
        </Form>
      </section>
    </Container>
  );
}

export default Login;
