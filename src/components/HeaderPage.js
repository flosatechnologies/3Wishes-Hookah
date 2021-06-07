import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.jpeg";

export class HeaderPage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          {/* <Container> */}
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img alt="" width="30" height="30" src={logo} />{" "}
              <Navbar.Text className="text-light">3wisheslounge</Navbar.Text>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/home">
                <Nav.Link className="mr-sm-5">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link className="mr-sm-5">Shop</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link className="mr-sm-5">Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="">
                <Nav.Link>
                  <i className="fab fa-facebook-square text-primary"></i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="">
                <Nav.Link>
                  <i className="fab fa-twitter-square text-primary"></i>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="">
                <Nav.Link>
                  <i className="fab fa-instagram-square text-primary"></i>
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/Dashboard">
                <Nav.Link className="mr-sm-5">Dashboard</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    );
  }
}

export default HeaderPage;
