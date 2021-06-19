import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.png";
import { IoMdCart } from "react-icons/io";

export class HeaderPage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          {/* <Container> */}
          <LinkContainer to="/" exact={true}>
            <Navbar.Brand>
              <img alt="" width="80" height="80" src={logo} />{" "}
              <Navbar.Text className="text-light"> </Navbar.Text>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/" exact={true}>
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

              <LinkContainer to="/login">
                <Nav.Link className="mr-sm-5">Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    );
  }
}

export default HeaderPage;
