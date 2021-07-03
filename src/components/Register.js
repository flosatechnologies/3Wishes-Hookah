import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
// import SignIn from "../components/SignIn";
import { connect } from "react-redux";
import { registerWithEmail } from "../Store/authActions";
import { combineReducers } from "../Store/mainReducer";

class Register extends Component {
  state = {

    fullname: "",
    email: "",
    password: "",
    userRole: ["user"],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
//=======
    isPasswordShown: false,
  };

  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    this.props.registerWithEmail(email, password);
  };
  render() {
    const { isPasswordShown } = this.state;
    return (
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
              width: "40% ",
              // height: "10%!important",
              // alignContent: "center",
              padding: "20px",
              // boxSizing: " border-box",
              borderRadius: "5px",
            }}
            className=" wrapper"
          >
            <div>
              <h3 className="title">Create Account</h3>
            </div>


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerWithEmail(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #98d8a6, #56be6c)",
          width: "100%",
          minHeight: "98vh",
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
              width: "20%",
              // height: "10%!important",
              // alignContent: "center",
              padding: "10px",
              // boxSizing: " border-box",
              borderRadius: "5px",
            }}
            className=" wrapper"
          >
            <div>
              <h3 className="title">Create Account</h3>
            </div>
//=======
            <form onSubmit={this.handleSubmit} className="form-wrapper">
              <div className="name">
                <label className="label">Full Name</label>
                <input
                  style={{
                    color: "#bac3bc",
                    fontSize: " 16px",
                    height: "32px",
                    outline: "none",
                    width: "98%",
                    background: "lightgray",
                    borderRadius: "5px",
                    borderBottomStyle: "2px solid #000",
                    marginBottom: "7px",
                  }}
                  className="input1"
                  type="text"
                  name="fullname"
                />
              </div>
              <div className="email">
                <label className="label">Email</label>
                <input
                  // style={{ margin: "20px", color: "#bac3bc", fontSize: " 16px" }}
                  className="inputt"
                  type="email"
                  name="email"
                />
              </div>
              <div style={{}} className="password">
                <label className="label">Password</label>
                <input
                  className="inputt"
                  type={isPasswordShown ? "text" : "password"}
                  name="password"
                />

                <i
                  style={{
                    position: "absolute",
                    right: "10px",
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
    );
  }
}

            <form onSubmit={this.handleSubmit} className="form-wrapper">
              <div className="name">
                <label className="label">Full Name</label>
                <input
                  className="input1"
                  type="text"
                  id="fullname"
                  onChange={this.handleChange}
                />
              </div>

              <div className="email">
                <label className="label">Email</label>
                <input
                  // style={{ margin: "20px", color: "#bac3bc", fontSize: " 16px" }}
                  className="inputt"
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="password">
                <label className="label">Password</label>
                <input
                  className="inputt"
                  type="password"
                  id="password"
                  onChange={this.handleChange}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerWithEmail: (newUser) => dispatch(registerWithEmail(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
