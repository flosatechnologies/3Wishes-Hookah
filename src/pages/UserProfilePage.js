import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserProfile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomerDetails from "./CustomerDetailsPage";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        profileBtn: "off",
        editProfileBtn: "off",
      },
    };
  }
  renderComponent = () => {
    if (this.state.button.profileBtn === "on") {
      return (
        <div>
          <Col>
            <h6 className="entries">Name:</h6>
            <h6 className="entries">Email:</h6>
            <h6 className="entries">Location:</h6>
            <h6 className="entries">Phone Number:</h6>
          </Col>
        </div>
      );
    }

    if (this.state.button.editProfileBtn === "on") {
      return (
        <div>
          <CustomerDetails />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container-fluid userProfileContainer">
        <Row>
          <h4 className="userProfileHeader">Your Profile</h4>
          <hr />
        </Row>
        <Row>
          <Col></Col>
          <Col className="but">
            <button
              onClick={() => {
                this.setState({ button: { profileBtn: "on" } });
              }}
              className="pro-edit"
            >
              Profile
            </button>
            <button
              onClick={() => {
                this.setState({ button: { editProfileBtn: "on" } });
              }}
              className="pro-editt"
            >
              Edit Profile
            </button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          {this.renderComponent()}

          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default UserProfile;
