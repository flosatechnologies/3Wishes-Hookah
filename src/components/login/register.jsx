/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import loginImage from "../../assets/images/welcome.png";

export class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container">
        <div className="header"></div>
        <div className="content">
          {/* <div className="image">
            <img className="imag" src={loginImage} />
          </div> */}

          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" placeholder="Username" />
            </div>

            <div className="form-group">
              <label htmlFor="username">Email:</label>
              <input type="email" name="email" placeholder="Email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="text" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
