import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignIn.css";
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
          <Row
            style={{
              padding: "10px 0px",
            }}
          >
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
                  <Container>
                    <Row>
                      <Col className="email">
                        <label className="label-Login">Email</label>
                        <input
                          className="allInput-Login"
                          type="email"
                          name="email"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="password">
                        <label className="label">Password</label>
                        <input
                          className="allInput-Login"
                          type="password"
                          name="password"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xxl={{ span: 6, offset: 3 }}
                        xl={{ span: 6, offset: 3 }}
                        lg={{ span: 6, offset: 3 }}
                        md={{ span: 6, offset: 3 }}
                        sm={{ span: 6, offset: 3 }}
                        xs={{ span: 6, offset: 3 }}
                      >
                        <button className="loginSubmit">Log In</button>
                      </Col>
                    </Row>
                    <Row className="forgotPassword ">
                      <button
                        style={{
                          color: "#f80759",
                          marginTop: 10,
                          textAlign: "center",
                          fontSize: 12,
                          backgroundColor: "transparent",
                          borderStyle: "none",
                        }}
                      >
                        <Link to={"/ForgotPassword"}>Forgot Password? </Link>
                      </button>
                    </Row>
                    <Row
                      style={{
                        marginTop: "13px",
                      }}
                    >
                      <Col
                        xxl={8}
                        xl={8}
                        lg={8}
                        md={8}
                        sm={8}
                        xs={8}
                        style={{
                          color: "white",
                          fontSize: "12px",
                          paddingTop: "4px",
                          textAlign: "right",
                        }}
                      >
                        Don't have an account?
                      </Col>
                      <Col
                        style={{
                          textAlign: "left",
                        }}
                      >
                        <button
                          style={{
                            color: "#f80759",
                            backgroundColor: "transparent",
                            borderStyle: "none",
                            fontSize: "12px",
                          }}
                        >
                          <Link to={"/signup"}>Register </Link>
                        </button>
                      </Col>
                    </Row>
                  </Container>
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
