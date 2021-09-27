import React, { Component } from "react";
import "../css/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCustomerInfo } from "./../Store/custDetailActions";
import { Row, Col } from "react-bootstrap";

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
      <div
        style={{
          background: "#fff",
          width: "90%",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container-fluid"
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
            <div>
              <div className="title">Delivery Information</div>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="form-wrapper">
                <div className="firstAndOtherNamesContainer">
                  <div className="firstNameContainer-CustomerProfile">
                    <div className="labels-CustomerProfile">First Name</div>
                    <input
                      className="firstNameInput-CustomerProfile"
                      type="text"
                      required={true}
                      name="fullname"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="otherNamesContainer-CustomerProfile">
                    <div className="labels-CustomerProfile">Other Names</div>
                    <div className="otherNames_InputContainer">
                      <input
                        className="otherNamesInput-CustomerProfile"
                        type="text"
                        required={true}
                        name="otherNames"
                        value={this.state.otherNames}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="phoneNumberAndGhPostGpsContainer">
                  <div className="phoneNumberContainer-CustomerProfile">
                    <div className="labels-CustomerProfile">Phone Number</div>
                    <input
                      className="phoneNumberInput-CustomerProfile"
                      type="tel"
                      required={true}
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="ghPostGPSContainer-CustomerProfile">
                    <div className="labels-CustomerProfile">Ghana Post GPS</div>
                    <input
                      className="ghPostGpsInput-CustomerProfile"
                      type="text"
                      name="ghanaPostGps"
                      value={this.state.ghanaPostGps}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="residentialAddressContainer-CustomerProfile">
                  <div className="labels-CustomerProfile">
                    Residential Address
                  </div>
                  <input
                    className="residentialAddressInput-CustomerProfile"
                    type="text"
                    name="residentialAddress"
                    value={this.state.residentialAddress}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="cityAndRegionContainer">
                  <div className="cityContainer-CustomerProfile">
                    <div className="labels-CustomerProfile">Town/City</div>
                    <input
                      className="cityInput-CustomerProfile"
                      type="text"
                      required={true}
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="regionContainer-CustomerProfile">
                    <div className="labels-CustomerProfile">Region</div>
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
                      <option value="Bono East Region">Bono East Region</option>
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
                    {console.log(this.state.region)}
                  </div>
                </div>

                <div>
                  <button className="submit">save</button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
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
