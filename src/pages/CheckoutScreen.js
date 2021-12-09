import React from "react";
import "../css/checkout.css";
import { FaCheckCircle } from "react-icons/fa";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import Flutterwave from "../components/Flutterwave";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
import {
  getCustomerInfo,
  getOtherCustomerInfo,
} from "../Store/custDetailActions";
import Footer from "../components/FooterComponent";

class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#eeeeee",
      deliveryMethodColor: "#eeeeee",
      deliveryMethodOne: false,
      deliveryMethodTwo: false,
      region: "",
      product: "",
      total: "",
    };
  }

  componentDidMount() {
    this.props.getCustomerInfo();
    this.props.getOtherCustomerInfo();

    if (
      this.props.login === true &&
      this.props.state.auth.role === "customer"
    ) {
      this.setState({
        color: "forestgreen",
      });
    }
  }

  defineTransactionProducts = (arr) => {
    let defined = [];
    for (let i = 0; i < arr.length; i++) {
      let prod = {
        Id: arr[i].product.Id,
        product: arr[i].product.product,
        price: arr[i].product.price,
        qty: arr[i].qty,
      };
      defined.push(prod);
    }
    return defined;
  };
  handleInputMethodOneChange = (e) => {
    this.setState({
      deliveryMethodOne: true,
      deliveryMethodTwo: false,
      deliveryMethodColor: "forestgreen",
    });
  };
  handleInputMethodTwoChange = (e) => {
    this.setState({
      deliveryMethodTwo: true,
      deliveryMethodOne: false,
      deliveryMethodColor: "forestgreen",
    });
  };

  render() {
    var customerInfo = "";
    var otherInfo = "";
    var products = "";
    var total = "";

    customerInfo = this.props.location.state.Info.customers.filter(
      (cust) => cust.Id === this.props.state.auth.user.loggedInUser.Id
    );

    otherInfo = this.props.location.state.Info.otherInfo.filter(
      (oth) => oth.Id === this.props.state.auth.user.loggedInUser.Id
    );
    products = this.props.location.state.products;
    total = this.props.location.state.total;

    let deliv = 0;
    if (
      this.state.deliveryMethodOne === true ||
      (this.state.deliveryMethodTwo === true &&
        customerInfo[0].region === "Greater Accra Region")
    ) {
      deliv = 0;
    } else if (
      this.state.deliveryMethodTwo === true &&
      customerInfo[0].region !== "Greater Accra Region"
    ) {
      deliv = 20;
    }
    let Id = uuid();
    let transId = Id.slice(24, 36);
    let orderId = Id.slice(0, 8);
    console.log("orderId:", transId);
    let data = {
      name: otherInfo[0].firstName + " " + otherInfo[0].otherNames,
      email: otherInfo[0].email,
      phoneNumber: otherInfo[0].phoneNumber,
      transactionId: transId,
      Id: Id,
      orderId: orderId,
      amnt: this.props.location.state.total + deliv,
      location: customerInfo[0].city,
      time: Date.now(),
      allProductsPrice: total,
      products: this.defineTransactionProducts(products),
    };
    return (
      <div>
        <HeaderPage />
        <Container className="checkoutMainContainer">
          <Row>
            <Col
              xxl={{ span: 6, offset: 3 }}
              xl={{ span: 6, offset: 3 }}
              lg={{ span: 6, offset: 3 }}
              md={{ span: 8, offset: 2 }}
              sm={{ span: 8, offset: 2 }}
              xs={{ span: 8, offset: 2 }}
              className=" addressDetailContainer"
            >
              <Row className="addressDetailsHeader">
                <Col
                  xxl={8}
                  xl={8}
                  lg={8}
                  md={8}
                  sm={9}
                  xs={9}
                  className="addressDetailsTextHeader"
                >
                  <FaCheckCircle color={this.state.color} /> 1. ADDRESS DETAILS
                </Col>
                <Col className=" editButtonContainer">
                  <button className="editButton">
                    <Link
                      style={{ textDecoration: "none", color: "forestgreen" }}
                      to={{
                        pathname: "/userProfile",
                        state: {
                          from: "checkout",
                          products,
                          total,
                        },
                      }}
                    >
                      Edit
                    </Link>
                  </button>
                </Col>
              </Row>
              <Row className=" theAddressDetailsContainer">
                <Col>
                  <Row>
                    <Col className="customerName-checkout">
                      {otherInfo[0].firstName + " " + otherInfo[0].otherNames}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="residentialAddress-checkout">
                      {customerInfo[0].residentialAddress}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="cityAndRegion-checkout">
                      {customerInfo[0].city + ", " + customerInfo[0].region}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="phoneNumber-checkout">
                      {otherInfo[0].phoneNumber}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              xxl={{ span: 6, offset: 3 }}
              xl={{ span: 6, offset: 3 }}
              lg={{ span: 6, offset: 3 }}
              md={{ span: 8, offset: 2 }}
              sm={{ span: 8, offset: 2 }}
              xs={{ span: 8, offset: 2 }}
              className=" deliveryMethodContainer"
            >
              <Row className="deliveryMethodHeader">
                <Col
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="deliveryMethodHeaderText"
                >
                  <FaCheckCircle color={this.state.deliveryMethodColor} /> 2.
                  DELIVERY METHOD
                </Col>
              </Row>

              <Row>
                <Col className=" deliveryMethodDetailsContainer">
                  <Row>
                    <Col className=" deliveryMethodInstructionMessage">
                      Choose how you want your order delivered{" "}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Col className="methodOneSection">
                          <input
                            type="radio"
                            name="deliveryMethodOne"
                            value="deliveryMethodOne"
                            id="pickUpMethodOne"
                            checked={this.state.deliveryMethodOne}
                            onChange={this.handleInputMethodOneChange}
                          />
                          <label
                            style={{
                              marginBottom: "0px",
                              paddingBottom: "0px",
                            }}
                            htmlFor="pickUpMethodOne"
                          >
                            Pick up from our shop (No Fees Charged)
                          </label>
                        </Col>
                      </Row>
                      <Row>
                        <p className="methodDescription">
                          Ready for pick up after 4hrs of order
                        </p>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <Row>
                            <Col className="methodTwoSection">
                              <input
                                type="radio"
                                name="deliveryMethodTwo"
                                id="pickUpMethodTwo"
                                value="deliveryMethodTwo"
                                checked={this.state.deliveryMethodTwo}
                                onChange={this.handleInputMethodTwoChange}
                              />
                              <label
                                style={{
                                  marginBottom: "0px",
                                  paddingBottom: "0px",
                                }}
                                htmlFor="pickUpMethodTwo"
                              >
                                Home or Office delivery
                              </label>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div className="methodDescription">
                                Normally delivered between 24 hrs and 48hrs
                                after Order has been made
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              xxl={{ span: 6, offset: 3 }}
              xl={{ span: 6, offset: 3 }}
              lg={{ span: 6, offset: 3 }}
              md={{ span: 8, offset: 2 }}
              sm={{ span: 8, offset: 2 }}
              xs={{ span: 10, offset: 0 }}
            >
              <Row>
                <Col
                  xxl={{ span: 7, offset: 5 }}
                  xl={{ span: 7, offset: 5 }}
                  lg={{ span: 7, offset: 5 }}
                  md={{ span: 8, offset: 4 }}
                  sm={{ span: 8, offset: 4 }}
                  xs={{ span: 8, offset: 4 }}
                >
                  <Row>
                    <Col className=" itemSummationContainer">
                      <Row>
                        <Col
                          xxl={7}
                          xl={7}
                          lg={7}
                          md={7}
                          sm={6}
                          xs={6}
                          className="subTotalText"
                        >
                          Sub-total:
                        </Col>
                        <Col className="subTotalFigure">
                          {"GH\u20B5 " + this.props.location.state.total}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="row">
                    <Col className="itemSummationContainer">
                      <Row>
                        <Col
                          xxl={7}
                          xl={7}
                          lg={7}
                          md={7}
                          sm={6}
                          xs={6}
                          className="deliveryFeesText"
                        >
                          Delivery fees:
                        </Col>
                        <Col className="deliveryFeesFigure">
                          {"GH\u20B5 " + deliv}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="row">
                    <Col className="col-lg-12 itemSummationContainer">
                      <Row>
                        <Col
                          xxl={7}
                          xl={7}
                          lg={7}
                          md={7}
                          sm={6}
                          xs={6}
                          className="totalText"
                        >
                          Total:
                        </Col>
                        <Col className="totalFigure">
                          {"GH\u20B5 " +
                            (deliv + this.props.location.state.total)}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="row">
                <Col
                  xxl={{ span: 6, offset: 3 }}
                  xl={{ span: 6, offset: 3 }}
                  lg={{ span: 6, offset: 3 }}
                  md={{ span: 8, offset: 2 }}
                  sm={{ span: 8, offset: 2 }}
                  xs={{ span: 8, offset: 2 }}
                >
                  {customerInfo[0].city === "" ||
                  otherInfo[0].phoneNumber === "" ||
                  (this.state.deliveryMethodTwo === false &&
                    this.state.deliveryMethodOne === false) ? (
                    <button
                      onClick={() => {
                        alert(
                          "Ensure all your delivery information is provided in profile and choose a delivery method"
                        );
                      }}
                      style={{
                        margin: "5px 5px 5px 15px",
                        padding: "5px",
                        borderRadius: "5px",
                        color: "white",
                        backgroundColor: "green",
                        width: "160px",
                      }}
                    >
                      Proceed to Payment
                    </button>
                  ) : (
                    <Flutterwave data={data} />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // var selected = state.customerInfo.customers.filter(
  //   (cust) => cust.Id === state.auth.user.loggedInUser.Id
  // );
  // var selectedOther = state.customerInfo.otherInfo.filter(
  //   (oth) => oth.Id === state.auth.user.loggedInUser.Id
  // );
  // console.log("custInfo: ", state.customerInfo);

  return {
    state,
    customerInfo: state.customerInfo.customers,
    otherInfo: state.customerInfo.otherInfo,
    login: state.auth.login,
  };
};

const mapDispatchToProps = () => {
  return {
    getCustomerInfo,
    getOtherCustomerInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CheckoutScreen);
