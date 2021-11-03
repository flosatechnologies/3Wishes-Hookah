import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userRegistration } from "../Store/authActions";
import "../css/register.css";
import HeaderPage from "./HeaderPage";
import Footer from "../components/FooterComponent";
import { Helmet } from "react-helmet";

class Register extends Component {
  state = {
    firstName: "",
    otherNames: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "customer",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userRegistration(this.state);
  };
  render() {
    const { isPasswordShown } = this.state;

    return (
      <div>
        <HeaderPage />

        <Helmet>
          <title>Register - 3Wishesgh</title>
          <meta name="description" content="3Wishes Hookah Shop Register" />
        </Helmet>

        <Container fluid={true} className="registerScreenMainContainer">
          <Row>
            <Col xxl={4} xl={4} lg={4} md={3} sm={2} xs={2}></Col>
            <Col
              xxl={{ span: 4, offset: 4 }}
              xl={{ span: 4, offset: 4 }}
              lg={{ span: 4, offset: 4 }}
              md={{ span: 6, offset: 3 }}
              sm={{ span: 8, offset: 2 }}
              xs={{ span: 8, offset: 2 }}
              className="registerSecondContainer"
            >
              <Row>
                <h3 className="title">Create Account</h3>
              </Row>
              <Row>
                <Form onSubmit={this.handleSubmit} className="form-wrapper">
                  <Row className="">
                    <Col
                      xxl={5}
                      xl={5}
                      lg={5}
                      md={5}
                      sm={5}
                      xs={5}
                      className=""
                    >
                      <Form.Group>
                        <Form.Label className="registerLabel">
                          First Name
                        </Form.Label>

                        <Form.Control
                          required
                          className="theRegister_Input"
                          type="text"
                          name="fullname"
                          id="firstName"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      xxl={7}
                      xl={7}
                      lg={7}
                      md={7}
                      sm={7}
                      xs={7}
                      className=""
                    >
                      <Form.Group>
                        <Form.Label className="registerLabel">
                          Other Names
                        </Form.Label>

                        <Form.Control
                          required
                          className="theRegister_Input"
                          type="text"
                          name="fullname"
                          id="otherNames"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xxl={12}
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="registerInputAndTextContainer"
                    >
                      <Form.Group>
                        <Form.Label className="registerLabel">Email</Form.Label>

                        <Form.Control
                          required
                          className="theRegister_Input"
                          type="email"
                          name="email"
                          id="email"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xxl={12}
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="registerInputAndTextContainer"
                    >
                      <Form.Group>
                        <Form.Label className="registerLabel">
                          Phone Number
                        </Form.Label>

                        <Form.Control
                          required
                          className="theRegister_Input"
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="passwordAndIconBox">
                    <Col
                      xxl={10}
                      xl={10}
                      lg={10}
                      md={10}
                      sm={9}
                      xs={9}
                      className="registerInputAndTextContainer"
                    >
                      <Form.Group>
                        <Form.Label className="registerLabel">
                          Password
                        </Form.Label>

                        <Form.Control
                          required
                          className="theRegister_Input"
                          type={isPasswordShown ? "text" : "password"}
                          name="password"
                          id="password"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col
                      xxl={2}
                      xl={2}
                      lg={2}
                      md={2}
                      sm={3}
                      xs={3}
                      className="iconBox"
                    >
                      <i
                        className="passIcon"
                        style={{
                          margin: "25px 0px 0px 5px",
                          cursor: "pointer",
                          color: "gray",
                        }}
                        class={`fa ${
                          isPasswordShown ? "fa-eye-slash" : "fa-eye"
                        } password-icon`}
                        onClick={this.togglePasswordVisibility}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xxl={12}
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="registerSubmitBtnContainer"
                    >
                      <Form.Group>
                        <Form.Control
                          className="registerSubmitBtn"
                          type="submit"
                          value="Sign up"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="haveAccountText">
                      Have an account?{" "}
                      <Link
                        style={{
                          textDecoration: "none",
                          listStyle: "none",
                          fontSize: "13px",
                        }}
                        to={"/login"}
                      >
                        Sign in
                      </Link>
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
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = () => {
  return {
    userRegistration,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Register);
