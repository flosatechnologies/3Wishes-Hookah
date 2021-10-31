import React, { Component } from "react";
import "../css/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCustomerInfo } from "./../Store/custDetailActions";
import { Container, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      otherNames: "",
      phoneNumber: "",
      ghanaPostGps: "",
      residentialAddress: "",
      city: "",
      region: "",
      customerInfo: this.props.custInfo,
      otherInformat: this.props.otherInform,
      loggedInfo: this.props.loggedUserInfo,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    const customerInfo = this.state.customerInfo;
    const otherInformat = this.state.otherInformat;
    this.setState({
      firstName: otherInformat[0].firstName,
      otherNames: otherInformat[0].otherNames,
      phoneNumber: otherInformat[0].phoneNumber,
      ghanaPostGps: customerInfo[0].ghanaPostGps,
      residentialAddress: customerInfo[0].residentialAddress,
      city: customerInfo[0].city,
      region: customerInfo[0].region,
    });
  }

  // formSubmit

  handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      firstName: this.state.firstName,
      otherNames: this.state.otherNames,
      phoneNumber: this.state.phoneNumber,
      ghanaPostGps: this.state.ghanaPostGps,
      residentialAddress: this.state.residentialAddress,
      city: this.state.city,
      region: this.state.region,
      Id: this.state.otherInformat[0].Id,
    };
    this.props.AddCustomerInfo(newCustomer);
  };
  render() {
    return (
      <Container
        fluid={true}
        style={{
          background: "#fff",
          width: "inherit",
          minHeight: "80vh",
        }}
      >
        <Row>
          <Col
            style={{
              background: "linear-gradient(to right, #64b375, #1bdd45)",
              width: "max-content ",
              borderRadius: "5px",
              height: "fit-content",
              padding: "20px 10px",
            }}
            className=" wrapper"
          >
            <Row>
              <Col className="title">Delivery Information</Col>
            </Row>

            <form onSubmit={this.handleSubmit}>
              <Container className="form-wrapper">
                <Row className="firstAndOtherNamesContainer">
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="firstNameContainer-CustomerProfile"
                  >
                    <Row className="labels-CustomerProfile">First Name</Row>
                    <Row>
                      <input
                        className="firstNameInput-CustomerProfile"
                        type="text"
                        required={true}
                        name="fullname"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                    </Row>
                  </Col>

                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="otherNamesContainer-CustomerProfile"
                  >
                    <Row className="labels-CustomerProfile">Other Names</Row>
                    <Row className="otherNames_InputContainer">
                      <input
                        className="otherNamesInput-CustomerProfile"
                        type="text"
                        required={true}
                        name="otherNames"
                        value={this.state.otherNames}
                        onChange={this.handleChange}
                      />
                    </Row>
                  </Col>
                </Row>

                <Row className="phoneNumberAndGhPostGpsContainer">
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="phoneNumberContainer-CustomerProfile"
                  >
                    <Row className="labels-CustomerProfile">Phone Number</Row>
                    <Row className="phoneNumberInputContainer-CustomerProfile">
                      <input
                        className="phoneNumberInput-CustomerProfile"
                        type="tel"
                        required={true}
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                      />
                    </Row>
                  </Col>

                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="ghPostGPSContainer-CustomerProfile"
                  >
                    <Row className="labels-CustomerProfile">Ghana Post GPS</Row>
                    <Row>
                      <input
                        className="ghPostGpsInput-CustomerProfile"
                        type="text"
                        name="ghanaPostGps"
                        value={this.state.ghanaPostGps}
                        onChange={this.handleChange}
                      />
                    </Row>
                  </Col>
                </Row>
                <Row className="residentialAddressMainContainer-CustomerProfile">
                  <Col
                    // xxl={12}
                    // xl={12}
                    // lg={12}
                    // md={12}
                    // sm={12}
                    // xs={12}
                    className="residentialAddressContainer-CustomerProfile"
                  >
                    <Row className="labels-CustomerProfile">
                      Residential Address
                    </Row>
                    <Row>
                      <input
                        className="residentialAddressInput-CustomerProfile"
                        type="text"
                        name="residentialAddress"
                        value={this.state.residentialAddress}
                        onChange={this.handleChange}
                      />
                    </Row>
                  </Col>
                </Row>
                <Row className="cityAndRegionContainer">
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="cityContainer-CustomerProfile"
                  >
                    <Row className="labels-CustomerProfile">Town/City</Row>
                    <Row>
                      <input
                        className="cityInput-CustomerProfile"
                        type="text"
                        required={true}
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChange}
                      />
                    </Row>
                  </Col>

                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="regionContainer-CustomerProfile"
                  >
                    <Row className="labels-CustomerProfile">Region</Row>
                    <Row>
                      <select
                        value={this.state.region}
                        className="regionInput-CustomerProfile"
                        required
                        name="region"
                        onChange={this.handleChange}
                      >
                        <option value="Greater Accra Region">
                          Greater Accra Region
                        </option>
                        <option value="Central Region">Central Region</option>
                        <option value="Western North Region">
                          Western North Region
                        </option>
                        <option value="Western Region">Western Region </option>
                        <option value="Bono Region">Bono Region</option>
                        <option value="Bono East Region">
                          Bono East Region
                        </option>
                        <option value="Ahafo Region">Ahafo Region</option>
                        <option value="Upper East Region">
                          Upper East Region
                        </option>
                        <option value="Upper West Region">
                          Upper West Region
                        </option>
                        <option value="North East Region">
                          North East Region
                        </option>
                        <option value="Northern Region">Northern Region</option>
                        <option value="Savanna Region">Savanna Region</option>
                        <option value="Eastern Region">Eastern Region</option>
                        <option value="Ashanti Region">Ashanti Region</option>
                        <option value="Oti Region">Oti Region</option>
                        <option value="Volta Region">Volta Region</option>
                      </select>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col
                    xxl={{ offset: 5, span: 2 }}
                    xl={{ offset: 5, span: 2 }}
                    lg={{ offset: 5, span: 2 }}
                    md={{ offset: 5, span: 2 }}
                    sm={{ offset: 5, span: 2 }}
                    xs={{ offset: 5, span: 2 }}
                  >
                    <button className="submit">save</button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    AddCustomerInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CustomerDetails);
