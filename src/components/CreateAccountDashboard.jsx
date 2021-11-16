import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CreateAccountDashboard.css";
import { userRegistration } from "../Store/authActions";
import { connect } from "react-redux";
import profileImg from "../assets/images/userImage.png";
import { Container, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
      <Container fluid={true} className="firstLevelContainer">
        <Row>
          <Col xxl={4} xl={4} lg={4} md={3} sm={0} sm={0}></Col>
          <Col
            xxl={4}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className="theMainContainer"
          >
            <Row className="profileImgSection">
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="profileImgContainer"
              >
                <img
                  src={this.state.profileImgDisplayVersion}
                  alt=""
                  className="profileImage"
                />
              </Col>

              <Col className="chooseImgButtonContainer">
                <Form.Label htmlFor="profileImg" className="image-upload">
                  <div className="chooseImgButton">Choose image</div>
                  <Form.Control
                    type="file"
                    required="true"
                    name="profileImg"
                    id="profileImg"
                    accept="image/*"
                    onChange={this.imageHandler}
                  />
                </Form.Label>
              </Col>
            </Row>
            <Row>
              <Form onSubmit={this.handleSubmit}>
                <Container fluid={true}>
                  <Row>
                    <Col className="accntInfoText">Account Information</Col>
                  </Row>
                  <Row className="firstAndOtherNamesContainer">
                    <Col className="firstNameContainer">
                      <Form.Group>
                        <Form.Control
                          className="firstNameInput"
                          id="firstNameInputId"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="otherNamesContainer">
                      <Form.Group>
                        <Form.Control
                          className="otherNamesInput"
                          id="otherNamesInputId"
                          type="text"
                          name="otherNames"
                          placeholder="Other Names"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="emailAndPhoneNumberContainer">
                    <Col className="emailContainer">
                      <Form.Group>
                        <Form.Control
                          className="emailInput"
                          id="emailInputId"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="phoneNumberContainer">
                      <Form.Group>
                        <Form.Control
                          className="phoneNumberInput"
                          id="phoneNumberInputId"
                          type="number"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <div className="passwordDetailsText">Password Details</div>
                  </Row>
                  <Row>
                    <Col className="passwordContainer">
                      <Form.Group>
                        <Form.Control
                          className="passwordInput"
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="confirmPasswordContainer">
                      <Form.Group>
                        <Form.Control
                          className="confirmPasswordInput"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="registerButtonContainer">
                      <Form.Group>
                        <Form.Control
                          className="registerButton"
                          type="submit"
                          value="Register"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Row>
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
)(CreateAccountDashboard);
