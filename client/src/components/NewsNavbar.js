import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NewsNavbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="navbar d-flex justify-content-end bg-dark rounded-0">
        <Menu.Item
          className="text-light"
          name="profile"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>

        <Menu.Item
          className="text-light"
          name="logout"
          active={activeItem === "upcomingEvents"}
          onClick={this.handleItemClick}
        >
          Logout
        </Menu.Item>
      </Menu>
    );
  }
}
