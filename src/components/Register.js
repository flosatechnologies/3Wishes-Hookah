import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userRegistration } from "../Store/authActions";
import "../css/register.css";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

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

        <Container
          fluid={true}
          style={{
            background: "linear-gradient(135deg, #98d8a6, #56be6c)",
            minHeight: "80vh",
          }}
          className="registerScreenMainContainer"
        >
          <Row>
            <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}></Col>
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={4}
              sm={6}
              xs={6}
              style={{
                backgroundColor: "rgb(44, 40, 40)",
              }}
              className="registerSecondContainer"
            >
              <Row>
                <h3
                  style={{
                    color: "#f80759",
                    textAlign: "center",
                    margin: "10px 0px 20px 0px",
                  }}
                  className="title"
                >
                  Create Account
                </h3>
              </Row>
              <Row>
                <form onSubmit={this.handleSubmit} className="form-wrapper">
                  <Container fluid={true}>
                    <Row className="">
                      <Col
                        xxl={4}
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={4}
                        className=""
                      >
                        <Row>
                          <label className="registerLabel">First Name</label>
                        </Row>
                        <Row>
                          <input
                            required
                            className="firstName_Input"
                            type="text"
                            name="fullname"
                            id="firstName"
                            onChange={this.handleChange}
                          />
                        </Row>
                      </Col>
                      <Col
                        xxl={8}
                        xl={8}
                        lg={8}
                        md={8}
                        sm={8}
                        xs={8}
                        className=""
                      >
                        <Row>
                          <label className="registerLabel">Other Names</label>
                        </Row>
                        <Row>
                          <input
                            required
                            className="otherNames_Input"
                            type="text"
                            name="fullname"
                            id="otherNames"
                            onChange={this.handleChange}
                          />
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xxl={11}
                        xl={11}
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        className="registerInputAndTextContainer"
                      >
                        <Row>
                          <label className="registerLabel">Email</label>
                        </Row>
                        <Row>
                          <input
                            required
                            className="registerEmailInput"
                            type="email"
                            name="email"
                            id="email"
                            onChange={this.handleChange}
                          />
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xxl={11}
                        xl={11}
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        className="registerInputAndTextContainer"
                      >
                        <Row>
                          <label className="registerLabel">Phone Number</label>
                        </Row>
                        <Row>
                          <input
                            required
                            className="registerPhoneNumber_Input"
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            onChange={this.handleChange}
                          />
                        </Row>
                      </Col>
                    </Row>

                    <Row className="passwordAndIconBox">
                      <Col className="registerInputAndTextContainer">
                        <Row>
                          <label className="registerLabel">Password</label>
                        </Row>
                        <Row>
                          <input
                            required
                            className="registePassword_Input"
                            type={isPasswordShown ? "text" : "password"}
                            name="password"
                            id="password"
                            onChange={this.handleChange}
                          />
                        </Row>
                      </Col>

                      <Col className="iconBox">
                        <i
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
                      <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                      <Col
                        xxl={8}
                        xl={8}
                        lg={8}
                        md={8}
                        sm={8}
                        xs={8}
                        className="registerSubmitBtnContainer"
                      >
                        <button className="registerSubmitBtn">Sign up</button>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="haveAccountText">Have an account?</Col>
                      <Col className="signInTextContainer">
                        <li
                          style={{
                            listStyle: "none",
                          }}
                        >
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
                        </li>
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
