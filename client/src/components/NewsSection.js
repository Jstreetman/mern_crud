import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Header,
  Segment,
  Form,
  Button,
  List,
  Modal,
  Input,
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
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updatedPostData, setUpdatedPostData] = useState({
    news: "",
    postId: "",
  });

  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const openUpdateModal = (postId, news) => {
    setUpdatedPostData({ postId, news });
    setUpdateModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("FormData.news:", formData.news); // Add this line to check the value
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

  const handleUpdatePost = async (postId) => {
    console.log("Button clicked!"); // Add this line to check if the function is triggered
    console.log("Updating post with ID:", postId);
    console.log("Update post data:", { news: updatedPostData.news });
    try {
      // Check if formData.news is not empty
      if (!updatedPostData.news.trim()) {
        setMessage("News content cannot be empty");
        return;
      }

      // Updated post data including "news"
      const updatedData = {
        news: updatedPostData.news,
      };

      // Implement logic to update the post with the given postId
      const response = await axios.put(
        `/api/users/posts/update/${postId}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMessage("Post Updated Successfully!");
        setFormData({
          news: "",
        });

        // Fetch the updated list of posts
        // Close the modal
        setUpdateModalOpen(false);
        fetchPosts();
      } else {
        setMessage(response.data.message);
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      // Implement logic to delete the post with the given postId
      const response = await axios.delete(`/api/users/posts/${postId}`);

      if (response.status === 200) {
        setMessage("Post Deleted Successfully!");

        // Fetch the updated list of posts
        fetchPosts();
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Delete error:", error);
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
                <Button
                  onClick={() => openUpdateModal(post._id, post.news)}
                  color="green"
                >
                  Update
                </Button>

                <Button onClick={() => handleDeletePost(post._id)} color="red">
                  Delete
                </Button>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Container>
      <Modal
        open={updateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        size="small"
      >
        <Modal.Header>Update Post</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field
              control={Input}
              label="Updated Post"
              placeholder="Update your post..."
              value={updatedPostData.news}
              onChange={(e, { value }) =>
                setUpdatedPostData({ ...updatedPostData, news: value })
              }
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            onClick={() => handleUpdatePost(updatedPostData.postId)}
          >
            Update
          </Button>
          <Button color="black" onClick={() => setUpdateModalOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
}

export default NewsSection;
