import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.png";
import { IoMdCart } from "react-icons/io";
import { connect } from "react-redux";
import { logoutUser } from "../Store/authActions";
import { BsPerson } from "react-icons/bs";

export class HeaderPage extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidUpdate() {

  // }

  render() {
    const login = JSON.parse(localStorage.getItem("login"));
    const role = JSON.parse(localStorage.getItem("role"));

    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          {/* <Container> */}
          <LinkContainer to="/" exact={true}>
            <Navbar.Brand>
              <img alt="" width="50" height="50" src={logo} />
              <Navbar.Text className="text-light font-weight-bold">
                3Wishes Hookah
              </Navbar.Text>
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
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      {this.props.cart.length === 0 ? (
                        ""
                      ) : (
                        <div
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontSize: "11px",
                            backgroundColor: "#007bff",
                            borderRadius: "75px",
                            width: "1.2vw",
                          }}
                        >
                          {this.props.cart.length}
                        </div>
                      )}
                    </div>
                    <div>
                      <i className="fas fa-shopping-cart"></i> Cart
                    </div>
                  </div>
                </Nav.Link>
              </LinkContainer>
              {!login || (login && role === "admin") ? (
                <LinkContainer to="/login">
                  <Nav.Link className="mr-sm-5">Login</Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown title={<BsPerson />} id="collasible-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                  <NavDropdown.Item href="#action/3.2">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Address
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    <button
                      style={{
                        borderStyle: "none",
                        backgroundColor: "transparent",
                        margin: "0px",
                      }}
                      onClick={() => this.props.logoutUser()}
                    >
                      logout
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {/* <LinkContainer to="/logOut">
                <Nav.Link className="mr-sm-5">LogOut</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    state,
    name: state.users.displayName,
    cart: state.cart.cart,
  };
};
const mapDispatchToProps = () => {
  return {
    logoutUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(HeaderPage);
