import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import SignIn from "../components/SignIn";
import { connect } from "react-redux";
import { registerWithEmail } from "../Store/authActions";

const Register = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.registerWithEmail(email, password);
  };

  return (
    <div className="container-fluid">
      <div className="app-wrapper">
        <div>
          <h3 className="title">Create Account</h3>
        </div>

        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="name">
            <label className="label">Full Name</label>
            <input className="input1" type="text" name="fullname" />
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input className="inputt" type="email" name="email" />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input className="inputt" type="password" name="password" />
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
      </div>
    </div>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = {
  registerWithEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
