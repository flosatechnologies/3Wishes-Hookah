import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import SignIn from "../components/SignIn";
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

        <div
          style={{
            background: "linear-gradient(135deg, #98d8a6, #56be6c)",
            width: "100%",
            minHeight: "88vh",
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
                    margin: "10px 0px 20px 0px",
                  }}
                  className="title"
                >
                  Create Account
                </h3>
              </div>

              <form onSubmit={this.handleSubmit} className="form-wrapper">
                <div className="firstAndOtherNamesBox">
                  <div className="firstNameBox">
                    <label className="label">First Name</label>
                    <input
                      required
                      className="firstName_Input"
                      type="text"
                      name="fullname"
                      id="firstName"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="otherNamesBox">
                    <label className="label">Other Names</label>
                    <input
                      className="otherNames_Input"
                      type="text"
                      name="fullname"
                      id="otherNames"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="emailBox">
                  <label className="label">Email</label>
                  <input
                    required
                    className="email_Input"
                    type="email"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="phoneNumberBox">
                  <label className="label">Phone Number</label>
                  <input
                    required
                    className="phoneNumber_Input"
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="passwordAndIconBox">
                  <div className="passwordBox">
                    <label className="label">Password</label>
                    <input
                      required
                      className="password_Input"
                      type={isPasswordShown ? "text" : "password"}
                      name="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="iconBox">
                    <i
                      style={{
                        margin: "35px 0px 0px 15px",
                        cursor: "pointer",
                        color: "gray",
                      }}
                      class={`fa ${
                        isPasswordShown ? "fa-eye-slash" : "fa-eye"
                      } password-icon`}
                      onClick={this.togglePasswordVisibility}
                    />
                  </div>
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
