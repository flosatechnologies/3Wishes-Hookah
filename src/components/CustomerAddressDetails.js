import React, { Component } from "react";
import "../css/CustomerAddressDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
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
      <Container
        fluid={true}
        style={{
          background: "#fff",
          width: "inherit",
          minHeight: "80vh",
          padding: "15px",
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
              <Col className="title-CustAddress">Delivery Information</Col>
            </Row>

            <form onSubmit={this.handleSubmit}>
              <Container fluid={true} className="form-wrapper">
                <Row className="firstAndOtherNamesContainer-CustAddress">
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="firstNameContainer-CustAddress"
                  >
                    <Row className="labels-CustAddress">First Name</Row>
                    <Row className="firstNameInput-CustAddress">
                      {" "}
                      {this.state.firstName}
                    </Row>
                  </Col>

                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="otherNamesContainer-CustAddress"
                  >
                    <Row className="labels-CustAddress">Other Names</Row>
                    <Row className="otherNamesInput-CustAddress">
                      {this.state.otherNames}
                    </Row>
                  </Col>
                </Row>
                <Row className="phoneNumberAndGhPostGpsContainer-CustAddress">
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="phoneNumberContainer-CustAddress"
                  >
                    <Row className="labels-CustAddress">Phone Number</Row>
                    <Row className="phoneNumberInput-CustAddress">
                      {this.state.phoneNumber}{" "}
                    </Row>
                  </Col>

                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="ghPostGPSContainer-CustAddress"
                  >
                    <Row className="labels-CustAddress">Ghana Post GPS</Row>
                    <Row className="ghPostGpsInput-CustAddress">
                      {this.state.ghanaPostGps}
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="residentialAddressContainer-CustAddress">
                    <Row className="labels-CustAddress">
                      Residential Address
                    </Row>
                    <Row className="residentialAddressInput-CustAddress">
                      {this.state.residentialAddress}
                    </Row>
                  </Col>
                </Row>

                <Row className="cityAndRegionContainer-CustAddress">
                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="cityContainer-CustAddress"
                  >
                    <Row className="labels-CustAddress">Town/City</Row>
                    <Row className="cityInput-CustAddress">
                      {this.state.city}
                    </Row>
                  </Col>

                  <Col
                    xxl={6}
                    xl={6}
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    className="regionContainer-CustAddress"
                  >
                    <Row className="labels-CustAddress">Region</Row>
                    <Row className="regionInput-CustAddress">
                      {this.state.region}{" "}
                    </Row>
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
    getOtherCustomerInfo,
    getCustomerInfo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CustomerAddressDetails);
