import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
// import SignIn from "../components/SignIn";
import { connect } from "react-redux";
import { userRegistration } from "../Store/authActions";
import { combineReducers } from "../Store/mainReducer";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

class Register extends Component {
  state = {
    firstName: "",
    otherNames: "",
    email: "",
    phoneNumber: "0240000000",
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
    // e.preventDefault();
    // let email = e.target.elements.email.value;
    // let password = e.target.elements.password.value;
    // this.props.userRegistration(email, password);
    e.preventDefault();
    this.props.userRegistration(this.state);
  };
  render() {
    const { isPasswordShown } = this.state;
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <HeaderPage />

        <div
          style={{
            background: "linear-gradient(135deg, #98d8a6, #56be6c)",
            width: "100%",
            minHeight: "97vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="container-fluid"
        >
          <Row>
            <Col
              style={{
                backgroundColor: "rgb(44, 40, 40)",
                width: "120% ",
                // height: "10%!important",
                // alignContent: "center",
                padding: "20px",
                boxSizing: " border-box",
                borderRadius: "5px",
              }}
              className=" wrapper"
            >
              <div>
                <h3
                  style={{
                    color: "#f80759",
                    textAlign: "center",
                    margin: "40px 0px 40px 0px",
                  }}
                  className="title"
                >
                  Create Account
                </h3>
              </div>

              <form onSubmit={this.handleSubmit} className="form-wrapper">
                <div className="name">
                  <label
                    style={{
                      width: "100%",
                      marginTop: " 0.4rem",
                      display: " flex",
                      justifyContent: "left !important",
                      color: "#fff",
                    }}
                    className="label"
                  >
                    First Name
                  </label>
                  <input
                    style={{
                      color: "#000",
                      fontSize: " 16px",
                      height: "32px",
                      outline: "none",
                      width: "98%",
                      background: "lightgray",
                      borderRadius: "5px",
                      borderBottomStyle: "2px solid #000",
                      marginBottom: "7px",
                      marginLeft: "0",
                    }}
                    className="inputt"
                    type="text"
                    name="fullname"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label
                    style={{
                      width: "100%",
                      marginTop: " 0.4rem",
                      display: " flex",
                      justifyContent: "left !important",
                      color: "#fff",
                    }}
                    className="label"
                  >
                    Other Names
                  </label>
                  <input
                    style={{
                      color: "#000",
                      fontSize: " 16px",
                      height: "32px",
                      outline: "none",
                      width: "98%",
                      background: "lightgray",
                      borderRadius: "5px",
                      borderBottomStyle: "2px solid #000",
                      marginBottom: "7px",
                      marginLeft: "0",
                    }}
                    className="inputt"
                    type="text"
                    name="fullname"
                    id="otherNames"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="email">
                  <label
                    style={{
                      width: "100%",
                      marginTop: " 0.4rem",
                      display: " flex",
                      justifyContent: "left !important",
                      color: "#fff",
                    }}
                    className="label"
                  >
                    Email
                  </label>
                  <input
                    style={{
                      color: "#000",
                      fontSize: " 16px",
                      height: "32px",
                      outline: "none",
                      width: "98%",
                      background: "lightgray",
                      borderRadius: "5px",
                      borderBottomStyle: "2px solid #000",
                      marginBottom: "7px",
                      marginLeft: "0",
                    }}
                    className="inputt"
                    type="email"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div style={{}} className="password">
                  <label
                    style={{
                      width: "100%",
                      marginTop: " 0.4rem",
                      display: " flex",
                      justifyContent: "left !important",
                      color: "#fff",
                    }}
                    className="label"
                  >
                    Password
                  </label>
                  <input
                    style={{
                      color: "#000",
                      fontSize: " 16px",
                      height: "32px",
                      outline: "none",
                      width: "98%",
                      background: "lightgray",
                      borderRadius: "5px",
                      borderBottomStyle: "2px solid #000",
                      marginBottom: "7px",
                      marginLeft: "0",
                    }}
                    className="inputt"
                    type={isPasswordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={this.handleChange}
                  />

                  <i
                    style={{
                      position: "absolute",
                      right: "8px",
                      cursor: "pointer",
                    }}
                    class={`fa ${
                      isPasswordShown ? "fa-eye-slash" : "fa-eye"
                    } password-icon`}
                    onClick={this.togglePasswordVisibility}
                  />
                </div>

                <div>
                  <button className="submit">Sign up</button>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#fff",
                      paddingTop: "25px",
                      marginLeft: "50px",
                      fontSize: "12px",
                    }}
                  >
                    Have an account?
                  </p>
                  <button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "#f80759",
                      background: "none",
                      border: "none",
                      marginLeft: "10px",
                      paddingTop: "25px",
                      fontSize: "12px",
                    }}
                  >
                    <li>
                      <Link to={"/login"}>Sign in </Link>
                    </li>
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
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
