import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class HeaderPage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <LinkContainer to="">
            <Navbar.Brand>3WishesHookah</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >

              <LinkContainer to="/login">
                <Nav.Link className="mr-sm-5">Login</Nav.Link>

              <LinkContainer to="/home">
                <Nav.Link className="mr-sm-5">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="mr-sm-5">Contact</Nav.Link>

              </LinkContainer>

              <LinkContainer to="/shop">
                <Nav.Link className="mr-sm-5">Shop</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link className="mr-sm-5">Contact</Nav.Link>
              </LinkContainer>

              <Nav.Link href="#action3" className="ml-sm-5">
                <i className="bi-alarm"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderPage;
