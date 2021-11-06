import React, { Component } from "react";
import "../css/CustomerAddressDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
          // minHeight: "100vh",
          padding: "6vh 2vh",
        }}
      >
        <Row>
          <Col
            xxl={6}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{
              background: "linear-gradient(to right, #64b375, #1bdd45)",

              borderRadius: "5px",
              padding: "5px 5px",
            }}
            // className=" wrapper"
          >
            <Row>
              <Col className="title-CustAddress">Delivery Information</Col>
            </Row>

            <Form onSubmit={this.handleSubmit}>
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
                    <Form.Group>
                      <Form.Label className="labels-CustAddress">
                        First Name
                      </Form.Label>
                      <Form.Text className="firstNameInput-CustAddress">
                        {this.state.firstName}
                      </Form.Text>
                    </Form.Group>
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
                    <Form.Group>
                      <Form.Label className="labels-CustAddress">
                        Other Names
                      </Form.Label>
                      <Form.Text className="otherNamesInput-CustAddress">
                        {this.state.otherNames}
                      </Form.Text>
                    </Form.Group>
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
                    <Form.Group>
                      <Form.Label className="labels-CustAddress">
                        Phone Number
                      </Form.Label>
                      <Form.Text className="phoneNumberInput-CustAddress">
                        {this.state.phoneNumber}{" "}
                      </Form.Text>
                    </Form.Group>
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
                    <Form.Label className="labels-CustAddress">
                      Ghana Post GPS
                    </Form.Label>
                    <Form.Text className="ghPostGpsInput-CustAddress">
                      {this.state.ghanaPostGps}
                    </Form.Text>
                  </Col>
                </Row>
                <Row>
                  <Col className="residentialAddressContainer-CustAddress">
                    <Form.Label className="labels-CustAddress">
                      Residential Address
                    </Form.Label>
                    <Form.Text className="residentialAddressInput-CustAddress">
                      {this.state.residentialAddress}
                    </Form.Text>
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
                    <Form.Label className="labels-CustAddress">
                      Town/City
                    </Form.Label>
                    <Form.Text className="cityInput-CustAddress">
                      {this.state.city}
                    </Form.Text>
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
                    <Form.Label className="labels-CustAddress">
                      Region
                    </Form.Label>
                    <Form.Text className="regionInput-CustAddress">
                      {this.state.region}{" "}
                    </Form.Text>
                  </Col>
                </Row>
              </Container>
            </Form>
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
