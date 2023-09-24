import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function NewsNavbar() {
  const navigate = useNavigate(); // Access the navigate function

  const [activeItem, setActiveItem] = React.useState(null);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    if (name === "logout") {
      // Call the logout function when "Logout" is clicked
      handleLogout();
    }
  };

  const handleLogout = () => {
    // Clear the authentication token and user object
    localStorage.removeItem("token");
    // Redirect to the login page using navigate
    navigate("/login");
  };

  return (
    <Menu className="navbar d-flex justify-content-end bg-dark rounded-0">
      <Menu.Item
        className="text-light"
        name="profile"
        active={activeItem === "Profile"}
        onClick={handleItemClick}
      >
        Profile
      </Menu.Item>

      <Menu.Item
        className="text-light"
        name="logout"
        active={activeItem === "Logout"}
        onClick={() => handleItemClick(null, { name: "logout" })}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
}
