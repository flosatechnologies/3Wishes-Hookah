import React from "react";
import "../css/checkout.css";
import { FaCheckCircle } from "react-icons/fa";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import Flutterwave from "../components/Flutterwave";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCustomerInfo,
  getOtherCustomerInfo,
} from "../Store/custDetailActions";

class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#eeeeee",
      deliveryMethodColor: "#eeeeee",
      deliveryMethodOne: false,
      deliveryMethodTwo: false,
      deliveryfee: 0,
    };
  }
  handleInputMethodOneChange = (e) => {
    this.setState({
      deliveryMethodOne: true,
      deliveryMethodTwo: false,
      deliveryMethodColor: "forestgreen",
      deliveryfee: 0,
    });
  };
  handleInputMethodTwoChange = (e) => {
    this.setState({
      deliveryMethodTwo: true,
      deliveryMethodOne: false,
      deliveryMethodColor: "forestgreen",
      deliveryfee: 50,
    });
  };
  componentDidMount() {
    this.props.getCustomerInfo();
    this.props.getCustomerInfo();
    if (
      this.props.login === true &&
      this.props.otherInfo[0].role === "customer"
    ) {
      this.setState({ color: "forestgreen" });
    }
  }
  render() {
    let data = {
      name:
        this.props.otherInfo[0].firstName +
        " " +
        this.props.otherInfo[0].otherNames,
      email: this.props.otherInfo[0].email,
      phoneNumber: this.props.otherInfo[0].phoneNumber,
      amnt: this.props.location.state.total + this.state.deliveryfee,
    };
    return (
      <div>
        <HeaderPage />
        <div className="checkoutMainContainer">
          <div className="container ">
            <div className="container addressDetailContainer">
              <div className="row addressDetailsHeader">
                <div className="col-lg-6">
                  <FaCheckCircle color={this.state.color} /> 1. ADDRESS DETAILS
                </div>
                <div className="col-lg-6 editButtonContainer">
                  <button className="editButton">
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "forestgreen" }}
                      to={"/userProfile"}
                    >
                      Edit
                    </Link>
                  </button>
                </div>
              </div>
              <div className="row theAddressDetailsContainer">
                <div className="customerName">
                  {this.props.otherInfo[0].firstName +
                    " " +
                    this.props.otherInfo[0].otherNames}
                </div>
                <div>{this.props.customerInfo[0].residentialAddress}</div>
                <div>
                  {this.props.customerInfo[0].city +
                    ", " +
                    this.props.customerInfo[0].region}
                </div>
                <div>{this.props.otherInfo[0].phoneNumber}</div>
              </div>
            </div>
            <div className="container deliveryMethodContainer">
              <div className="row deliveryMethodHeader">
                <div className="col-lg-12">
                  <FaCheckCircle color={this.state.deliveryMethodColor} /> 2.
                  DELIVERY METHOD
                </div>
              </div>
              <div className="row deliveryMethodDetailsContainer">
                <div>Choose how you want your order delivered </div>
                <div className="methodOneSection">
                  <div>
                    <input
                      type="radio"
                      name="deliveryMethodOne"
                      value="deliveryMethodOne"
                      id="pickUpMethodOne"
                      checked={this.state.deliveryMethodOne}
                      onChange={this.handleInputMethodOneChange}
                    />
                    <label
                      style={{ marginBottom: "0px", paddingBottom: "0px" }}
                      htmlFor="pickUpMethodOne"
                    >
                      Pick up from our shop (No Fees Charged)
                    </label>
                  </div>
                  <p className="methodDescription">
                    Ready for pick up after 4hrs of order
                  </p>
                </div>
                <div className="methodTwoSection">
                  <input
                    type="radio"
                    name="deliveryMethodTwo"
                    id="pickUpMethodTwo"
                    value="deliveryMethodTwo"
                    checked={this.state.deliveryMethodTwo}
                    onChange={this.handleInputMethodTwoChange}
                  />
                  <label
                    style={{ marginBottom: "0px", paddingBottom: "0px" }}
                    htmlFor="pickUpMethodTwo"
                  >
                    Home or Office delivery
                  </label>
                  <div className="methodDescription">
                    Normally delivered between 24 hrs and 48hrs after Order has
                    been made
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 itemSummationContainer">
                <div className="subTotalText">Sub-total:</div>
                <div className="subTotalFigure">
                  {"GH\u20B5 " + this.props.location.state.total}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 itemSummationContainer">
                <div className="deliveryFeesText">Delivery fees:</div>
                <div className="deliveryFeesFigure">
                  {"GH\u20B5 " + this.state.deliveryfee}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 itemSummationContainer">
                <div className="totalText">Total:</div>
                <div className="totalFigure">
                  {"GH\u20B5 " +
                    (this.state.deliveryfee + this.props.location.state.total)}
                </div>
              </div>
            </div>
            <div className="row">
              <Flutterwave data={data} />
            </div>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  var selected = state.customerInfo.customers.filter(
    (cust) => cust.Id === state.auth.user.loggedInUser.Id
  );
  var selectedOther = state.customerInfo.otherInfo.filter(
    (oth) => oth.Id === state.auth.user.loggedInUser.Id
  );
  console.log("selected: ", selectedOther);
  return {
    customerInfo: selected,
    otherInfo: selectedOther,
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
