import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Header,
  Segment,
  Form,
  Button,
  List,
} from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewsSection() {
  const [formData, setFormData] = useState({
    news: "",
  });
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null); // Store the user data
  const [posts, setPosts] = useState([]); // Store the posts data

  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Fetch the user data from the API
    fetch("/api/users")
      .then((response) => response.json())
      .then((userData) => setUser(userData))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch the posts data from the API
    fetchPosts();
  }, []); // Initial fetch when the component mounts

  const fetchPosts = () => {
    fetch("/api/users/posts")
      .then((response) => response.json())
      .then((postsData) => setPosts(postsData))
      .catch((error) => {
        console.error("Error fetching posts data:", error);
      });
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

        // Fetch the updated list of posts
        fetchPosts();

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
        <Segment>
          {/* Display the username */}
          {user && `Welcome, ${user.username}`} Create Post
        </Segment>
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

      <Container className="p-5 bg-white my-5" text>
        <Header as="h2">Posts</Header>
        <List>
          {posts.map((post) => (
            <List.Item key={post._id}>
              <List.Content>
                <List.Header>{post.username}</List.Header>
                <List.Description>{post.news}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default NewsSection;
