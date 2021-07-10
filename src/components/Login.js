import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignIn.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginWithEmail } from "../Store/authActions";
import { Component } from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

class LogIn extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidUpdate() {
    console.log(this.props.auth);
    const loaded = await this.props.state.firebase.auth.isEmpty;
    console.log(loaded);

    if (loaded === false) {
      if (this.props.state.users.user.loggedInUser.role === "admin") {
        this.props.history.push("/dashboard");
        // <Redirect to="/dashboard" />;
      }
      if (this.props.state.users.user.loggedInUser.role === "customer") {
        this.props.history.push("/shop");
        // <Redirect to="/shop" />;
      }
    }
    if (loaded) {
      fire();
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
        <div className="container-fluid loginBackground">
          <div className="app-wrapper">
            <div>
              <h3
                style={{
                  color: "#f80759",
                  textAlign: "center",
                  margin: "40px 0px 40px 0px",
                }}
                className="title"
              >
                Login
              </h3>
            </div>

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
        <FooterPage />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    state,
  };
};

const mapDispatchToProps = {
  loginWithEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
