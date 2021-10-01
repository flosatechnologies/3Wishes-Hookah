import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginWithEmail } from "../Store/authActions";
import { Container, Row, Col } from "react-bootstrap";

import { Component } from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
    };
  }

  async componentDidUpdate() {
    const role = await this.props.allState.auth.role;

    if (role === "admin") {
      this.props.history.push("/dashboard");
    }
    if (role === "customer") {
      this.props.history.goBack();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    this.props.loginWithEmail(email, password);
  };

  render() {
    return (
      <div>
        <HeaderPage />
        <Container fluid={true} className=" loginBackground">
          <Row>
            <Col className="app-wrapper">
              <Row>
                <h3
                  style={{
                    color: "#f80759",
                    textAlign: "center",
                    margin: "40px 0px 10px 0px",
                  }}
                  className="title"
                >
                  Login
                </h3>
              </Row>
              <Row>
                <form onSubmit={this.handleSubmit} className="form-wrapper">
                  <div className="email">
                    <label className="label">Email</label>
                    <input className="inputt" type="email" name="email" />
                  </div>
                  <div className="password">
                    <label className="label">Password</label>
                    <input className="inputt" type="password" name="password" />
                  </div>

                  <div>
                    <button className="submit">Log In</button>
                  </div>
                  <p className="forgotPassword text-right">
                    <li
                      style={{
                        color: "#f80759",
                        marginTop: 10,
                        textAlign: "center",
                        fontSize: 12,
                      }}
                    >
                      <Link to={"/ForgotPassword"}>Forgot Password? </Link>
                    </li>
                  </p>
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        color: "#fff",
                        paddingTop: "25px",
                        marginLeft: "45px",
                        fontSize: "12px",
                      }}
                    >
                      Don't have an account?
                    </p>
                    <button
                      className="loginButton"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        background: "none",
                        border: "none",
                        paddingTop: "25px",
                        marginLeft: "10px",
                        fontSize: "12px",
                      }}
                    >
                      <li style={{ color: "#f80759" }}>
                        <Link to={"/signup"}>Register </Link>
                      </li>
                    </button>
                  </div>
                </form>
              </Row>
            </Col>
          </Row>
        </Container>
        <FooterPage />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.users);
  return {
    allState: state,
  };
};

const mapDispatchToProps = () => {
  return {
    loginWithEmail,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(LogIn);
