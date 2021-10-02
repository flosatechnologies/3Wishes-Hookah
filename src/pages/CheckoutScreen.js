import React from "react";
import "../css/checkout.css";
import { FaCheckCircle } from "react-icons/fa";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import Flutterwave from "../components/Flutterwave";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
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

      region: "",
    };
  }

  componentDidMount() {
    this.props.getCustomerInfo();
    this.props.getOtherCustomerInfo();

    if (
      this.props.login === true &&
      this.props.state.auth.role === "customer"
    ) {
      this.setState({ color: "forestgreen" });
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
    var customerInfo = this.props.location.state.Info.customers.filter(
      (cust) => cust.Id === this.props.state.auth.user.loggedInUser.Id
    );

    var otherInfo = this.props.location.state.Info.otherInfo.filter(
      (oth) => oth.Id === this.props.state.auth.user.loggedInUser.Id
    );

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
      allProductsPrice: this.props.location.state.total,
      products: this.defineTransactionProducts(
        this.props.location.state.products
      ),
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
                  {otherInfo[0].firstName + " " + otherInfo[0].otherNames}
                </div>
                <div>{customerInfo[0].residentialAddress}</div>
                <div>
                  {customerInfo[0].city + ", " + customerInfo[0].region}
                </div>
                <div>{otherInfo[0].phoneNumber}</div>
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
                <div className="deliveryFeesFigure">{"GH\u20B5 " + deliv}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 itemSummationContainer">
                <div className="totalText">Total:</div>
                <div className="totalFigure">
                  {"GH\u20B5 " + (deliv + this.props.location.state.total)}
                </div>
              </div>
            </div>
            <div className="row">
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
            </div>
          </div>
        </div>
        <FooterPage />
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
