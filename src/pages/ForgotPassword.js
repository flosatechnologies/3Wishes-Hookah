import React, { Component } from "react";
import "../css/ForgotPassword.css";
import firebase from "../firebase/config";

export default class ForgotPassword extends Component {
  state = {
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  forgotPassword = (Email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then(function (user) {
        alert("Please check your email...");
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="mainContainer">
        <form onSubmit={this.handleSubmit} className="form-wrapper">
          <h5>Forgot Password</h5>
          <div className="email">
            <label className="emailLabel">Email</label>
            <input className="emailInput" type="email" name="email" />
          </div>

          <div>
            <button
              onClick={() => this.forgottenPassword()}
              className="submitReset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
