import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignIn.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginWithEmail } from "../Store/authActions";
import { Component } from "react";
// import HeaderPage from "./HeaderPage";
// import FooterPage from "./FooterPage";

class LogIn extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    if (this.props.check.isLoaded) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;
      this.props.loginWithEmail(email, password);
    };

    return (
      <div>
        <div className="container-fluid loginBackground">
          <div className="app-wrapper">
            <div>
              <h3 className="title">Login </h3>
            </div>

            <form onSubmit={handleSubmit} className="form-wrapper">
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
                    // color: "#f80759",
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.users,
    check: state.firebase.auth,
  };
};

const mapDispatchToProps = {
  loginWithEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
