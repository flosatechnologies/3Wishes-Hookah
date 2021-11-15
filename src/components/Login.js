import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginWithEmail } from "../Store/authActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import HeaderPage from "./HeaderPage";
import Footer from "../components/FooterComponent";
import { Helmet } from "react-helmet";

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
      if (this.props.location.state.from === "register") {
        this.props.history.push("/cart");
      } else {
        this.props.history.goBack();
      }
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
        <Helmet>
          <title>LogIn - 3Wishesgh</title>
          <meta name="description" content="3Wishes Hookah LogIn" />
        </Helmet>
        <Container fluid={true} className=" loginBackground">
          <Row>
            <Col
              xxl={{ span: 4, offset: 4 }}
              xl={{ span: 4, offset: 4 }}
              lg={{ span: 4, offset: 4 }}
              md={{ span: 6, offset: 3 }}
              sm={{ span: 8, offset: 2 }}
              xs={{ span: 8, offset: 2 }}
              className="loginFrame"
            >
              <Row>
                <h3 className="loginHeaderText">Login</h3>
              </Row>
              <Row>
                <Form onSubmit={this.handleSubmit} className="form-wrapper">
                  <Form.Group className="labelAndInput-Login">
                    <Form.Label className="label-Login">Email</Form.Label>
                    <Form.Control
                      className="allInput-Login"
                      type="email"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group className="labelAndInput-Login">
                    <Form.Label className="label-Login">Password</Form.Label>
                    <Form.Control
                      className="allInput-Login"
                      type="password"
                      name="password"
                    />
                  </Form.Group>

                  <Form.Group className="theLoginButtonContainer">
                    <Form.Control
                      variant="primary"
                      className="loginSubmit"
                      type="submit"
                      value="Log in"
                    />
                  </Form.Group>

                  <Row className="forgotPasswordContainer">
                    <Link className="forgotPassLinkText" to={"/ForgotPassword"}>
                      Forgot Password?{" "}
                    </Link>
                  </Row>
                  <Row>
                    <Col
                      style={{
                        color: "white",
                        fontSize: "12px",
                        paddingTop: "5px",
                        textAlign: "center",
                      }}
                    >
                      Don't have an account?
                      <Link to={"/signup"}> Register </Link>
                    </Col>
                  </Row>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
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
