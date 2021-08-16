import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/editAccountComponent.css";
import { userRegistration } from "../Store/authActions";
import { connect } from "react-redux";
import profileImg from "../assets/images/userImage.png";
import { FaRegImage } from "react-icons/fa";

class EditAccountComponent extends Component {
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
                alt="profile Picture"
                className="profileImage"
              />
            </div>

            <div className="chooseImgButtonContainer-EditAcntComponent">
              <label
                htmlFor="profileImg-EditAcntComponent"
                className="image-upload"
              >
                <div className="chooseImgButton-EditAcntComponent">
                  Choose image
                </div>
                <input
                  type="file"
                  required="true"
                  name="profileImg"
                  id="profileImg-EditAcntComponent"
                  accept="image/*"
                  onChange={this.imageHandler}
                />
              </label>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="accntInfoText-EditAcntComponent">
              Account Information
            </div>
            <div className="firstAndOtherNamesContainer-EditAcntComponent">
              <div className="firstNameContainer-EditAcntComponent">
                <input
                  className="firstNameInput-EditAcntComponent"
                  id="firstNameInputId-EditAcntComponent"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="otherNamesContainer-EditAcntComponent">
                <input
                  className="otherNamesInput-EditAcntComponent"
                  id="otherNamesInputId-EditAcntComponent"
                  type="text"
                  name="otherNames"
                  placeholder="Other Names"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="emailAndPhoneNumberContainer-EditAcntComponent">
              <div className="emailContainer-EditAcntComponent">
                <input
                  className="emailInput-EditAcntComponent"
                  id="emailInputId-EditAcntComponent"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
              </div>
              <div className="phoneNumberContainer-EditAcntComponent">
                <input
                  className="phoneNumberInput-EditAcntComponent"
                  id="phoneNumberInputId"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="passwordDetailsText-EditAcntComponent">
              Password Details
            </div>
            <div className="passwordContainer-EditAcntComponent">
              <input
                className="passwordInput-EditAcntComponent"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>

            <div className="confirmPasswordContainer-EditAcntComponent">
              <input
                className="confirmPasswordInput-EditAcntComponent"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="registerButtonContainer-EditAcntComponent">
              <input
                className="registerButton-EditAcntComponent"
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
)(EditAccountComponent);
