import React, { Component } from "react";
import "../css/CustomerAddressDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import {
  getOtherCustomerInfo,
  getCustomerInfo,
} from "./../Store/custDetailActions";
import { connect } from "react-redux";

class CustomerAddressDetails extends Component {
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
      customerInfo: this.props.Info,
      loggedUserInfo: this.props.logUserInfo,
      otherInfor: this.props.otherInformation,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //end

  componentDidMount() {
    // this.props.getOtherCustomerInfo();
    // this.props.getCustomerInfo();
    const customerInfo = this.state.customerInfo;
    const otherInfor = this.state.otherInfor;
    console.log("otherInfor ", otherInfor);

    this.setState({
      firstName: otherInfor[0].firstName,
      otherNames: otherInfor[0].otherNames,
      phoneNumber: otherInfor[0].phoneNumber,
      ghanaPostGps: customerInfo[0].ghanaPostGps,
      residentialAddress: customerInfo[0].residentialAddress,
      city: customerInfo[0].city,
      region: customerInfo[0].region,
    });
  }

  // formSubmit

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
              <div className="title-CustAddress">Delivery Information</div>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="form-wrapper">
                <div className="firstAndOtherNamesContainer-CustAddress">
                  <div className="firstNameContainer-CustAddress">
                    <div className="labels-CustAddress">First Name</div>
                    <div className="firstNameInput-CustAddress">
                      {" "}
                      {this.state.firstName}
                    </div>
                  </div>

                  <div className="otherNamesContainer-CustAddress">
                    <div className="labels-CustAddress">Other Names</div>
                    <div className="otherNamesInput-CustAddress">
                      {this.state.otherNames}
                    </div>
                  </div>
                </div>

                <div className="phoneNumberAndGhPostGpsContainer-CustAddress">
                  <div className="phoneNumberContainer-CustAddress">
                    <div className="labels-CustAddress">Phone Number</div>
                    <div className="phoneNumberInput-CustAddress">
                      {this.state.phoneNumber}{" "}
                    </div>
                  </div>

                  <div className="ghPostGPSContainer-CustAddress">
                    <div className="labels-CustAddress">Ghana Post GPS</div>
                    <div className="ghPostGpsInput-CustAddress">
                      {this.state.ghanaPostGps}
                    </div>
                  </div>
                </div>

                <div className="residentialAddressContainer-CustAddress">
                  <div className="labels-CustAddress">Residential Address</div>
                  <div className="residentialAddressInput-CustAddress">
                    {this.state.residentialAddress}
                  </div>
                </div>

                <div className="cityAndRegionContainer-CustAddress">
                  <div className="cityContainer-CustAddress">
                    <div className="labels-CustAddress">Town/City</div>
                    <div className="cityInput-CustAddress">
                      {this.state.city}
                    </div>
                  </div>

                  <div className="regionContainer-CustAddress">
                    <div className="labels-CustAddress">Region</div>
                    <div className="regionInput-CustAddress">
                      {this.state.region}{" "}
                    </div>
                  </div>
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
    getOtherCustomerInfo,
    getCustomerInfo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CustomerAddressDetails);
