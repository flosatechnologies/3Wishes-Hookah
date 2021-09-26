import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CreateAccountDashboard.css";
import { userRegistration } from "../Store/authActions";
import { connect } from "react-redux";
import profileImg from "../assets/images/userImage.png";

class CreateAccountDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      otherNames: "",
      phoneNumber: "",
      email: "",
      role: "admin",
      password: "",

      confirmPassword: "",
      profileImg: "",
      profileImgDisplayVersion: profileImg,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords do not match");
    } else {
      this.props.userRegistration(this.state);
    }
  };

  imageHandler = (e) => {
    if (e.target.files[0]) {
      this.setState({
        profileImgDisplayVersion: URL.createObjectURL(e.target.files[0]),
        profileImg: e.target.files[0],
      });
    }

    console.log(e.target.files[0]);
  };

  render() {
    return (
      <div className="firstLevelContainer">
        <div className="theMainContainer">
          <div className="profileImgSection">
            <div className="profileImgContainer">
              <img
                src={this.state.profileImgDisplayVersion}
                alt=""
                className="profileImage"
              />
            </div>

            <div className="chooseImgButtonContainer">
              <label htmlFor="profileImg" className="image-upload">
                <div className="chooseImgButton">Choose image</div>
                <input
                  type="file"
                  required="true"
                  name="profileImg"
                  id="profileImg"
                  accept="image/*"
                  onChange={this.imageHandler}
                />
              </label>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="accntInfoText">Account Information</div>
            <div className="firstAndOtherNamesContainer">
              <div className="firstNameContainer">
                <input
                  className="firstNameInput"
                  id="firstNameInputId"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="otherNamesContainer">
                <input
                  className="otherNamesInput"
                  id="otherNamesInputId"
                  type="text"
                  name="otherNames"
                  placeholder="Other Names"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="emailAndPhoneNumberContainer">
              <div className="emailContainer">
                <input
                  className="emailInput"
                  id="emailInputId"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
              </div>
              <div className="phoneNumberContainer">
                <input
                  className="phoneNumberInput"
                  id="phoneNumberInputId"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="passwordDetailsText">Password Details</div>
            <div className="passwordContainer">
              <input
                className="passwordInput"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>

            <div className="confirmPasswordContainer">
              <input
                className="confirmPasswordInput"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="registerButtonContainer">
              <input
                className="registerButton"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.users,
  };
};

const mapDispatchToProps = () => {
  return {
    userRegistration,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CreateAccountDashboard);
