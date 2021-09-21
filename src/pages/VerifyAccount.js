import React, { Component } from "react";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import firebase from "firebase/app";
import "firebase/auth";

export default class VerifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSendVerification = () => {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
      window.alert("Verification sent");
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#56be6c" }}>
        <HeaderPage />
        <div>
          <h3 style={{ textAlign: "center", paddingTop: 30 }}>
            Email Verification
          </h3>
          <h5
            style={{
              color: "red",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Email Not Verified
          </h5>
        </div>

        <div style={{ marginBottom: 225 }}>
          <button
            onClick={this.handleSendVerification}
            style={{ marginTop: 150 }}
            className="submit"
          >
            Send Verification
          </button>
        </div>

        <FooterPage />
      </div>
    );
  }
}
