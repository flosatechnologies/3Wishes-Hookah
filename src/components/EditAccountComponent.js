import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/editAccountComponent.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { userRegistration } from "../Store/authActions";
import { connect } from "react-redux";
import profileImg from "../assets/images/userImage.png";

class EditAccountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      otherNames: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileImg: "",
      profileImgDisplayVersion: profileImg,
      users: this.props.theAdmins,
      userId: this.props.userId,
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
  componentDidMount() {
    let filtered = this.state.users.filter(
      (admin) => admin.Id === this.state.userId
    );
    console.log("filtered: ", filtered);
    this.setState({
      firstName: filtered[0].firstName,
      otherNames: filtered[0].otherNames,
      phoneNumber: filtered[0].phoneNumber,
      email: filtered[0].email,
    });
  }

  render() {
    return (
      <Container className="firstLevelContainer">
        <Row>
          <Col xxl={4} xl={4} lg={4} md={3} sm={1} sm={1}></Col>
          <Col
            xxl={4}
            xl={4}
            lg={4}
            md={6}
            sm={10}
            sm={10}
            className="theMainContainer"
          >
            <Row className="profileImgSection">
              <Col className="profileImgContainer">
                <img
                  src={this.state.profileImgDisplayVersion}
                  alt=""
                  className="profileImage"
                />
              </Col>

              <Col className="chooseImgButtonContainer-EditAcntComponent">
                <Form.Label
                  htmlFor="profileImg-EditAcntComponent"
                  className="image-upload"
                >
                  <div className="chooseImgButton-EditAcntComponent">
                    Choose image
                  </div>
                  <Form.Control
                    type="file"
                    required="true"
                    name="profileImg"
                    id="profileImg-EditAcntComponent"
                    accept="image/*"
                    onChange={this.imageHandler}
                  />
                </Form.Label>
              </Col>
            </Row>
            <Form onSubmit={this.handleSubmit}>
              <div className="accntInfoText-EditAcntComponent">
                Account Information
              </div>
              <Row className="firstAndOtherNamesContainer-EditAcntComponent">
                <Col className="firstNameContainer-EditAcntComponent">
                  <Form.Control
                    className="firstNameInput-EditAcntComponent"
                    id="firstNameInputId-EditAcntComponent"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col className="otherNamesContainer-EditAcntComponent">
                  <Form.Control
                    className="otherNamesInput-EditAcntComponent"
                    id="otherNamesInputId-EditAcntComponent"
                    type="text"
                    name="otherNames"
                    placeholder="Other Names"
                    value={this.state.otherNames}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <Row className="emailAndPhoneNumberContainer-EditAcntComponent">
                <Col className="emailContainer-EditAcntComponent">
                  <Form.Control
                    className="emailInput-EditAcntComponent"
                    id="emailInputId-EditAcntComponent"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col className="phoneNumberContainer-EditAcntComponent">
                  <Form.Control
                    className="phoneNumberInput-EditAcntComponent"
                    id="phoneNumberInputId"
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
              <div className="passwordDetailsText-EditAcntComponent">
                Password Details
              </div>
              <div className="passwordContainer-EditAcntComponent">
                <input
                  className="passwordInput-EditAcntComponent"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="confirmPasswordContainer-EditAcntComponent">
                <input
                  className="confirmPasswordInput-EditAcntComponent"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
              <div className="registerButtonContainer-EditAcntComponent">
                <input
                  className="registerButton-EditAcntComponent"
                  type="submit"
                  value="Update"
                />
              </div>
            </Form>
            <div></div>
          </Col>
        </Row>
      </Container>
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
