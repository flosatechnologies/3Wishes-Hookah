import React, { useState } from "react";
import "../css/ForgotPassword.css";

import { toast } from "react-toastify";

import firebase from "firebase";
import "firebase/auth";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };
    const auth = firebase.auth();
    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
        alert("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        alert("Error msg in Forgot Password");
        console.log("Error msg in Forgot Password", error);
      });
  };

  return (
    <div className="mainContainerForgotPass">
      {loading ? (
        <h4 style={{ color: "red" }}>loading</h4>
      ) : (
        <h5>Forgot Password</h5>
      )}
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="email">
          <label className="emailLabel">Email</label>
          <input
            className="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            autoFocus
          />
        </div>

        <div>
          <button className="submitReset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
