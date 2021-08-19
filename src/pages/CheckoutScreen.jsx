import React from "react";
import "../css/checkout.css";
import { FaCheckCircle } from "react-icons/fa";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import Flutterwave from "../components/Flutterwave";
import { connect } from "react-redux";
import {
  getCustomerInfo,
  getOtherCustomerInfo,
} from "../Store/custDetailActions";

class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#eeeeee",
    };
  }

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
                  <button className="editButton">Edit</button>
                </div>
              </div>
              <div className="row theAddressDetailsContainer">
                <div className="customerName">
                  {this.props.otherInfo[0].firstName +
                    " " +
                    this.props.otherInfo[0].otherNames}
                </div>
                <div>{this.props.customerInfo[0].residentialAddress}</div>
                <div>{this.props.customerInfo[0].region}</div>
                <div>{this.props.otherInfo[0].phoneNumber}</div>
              </div>
            </div>
            <div className="container deliveryMethodContainer">
              <div className="row deliveryMethodHeader">
                <div className="col-lg-12">
                  <FaCheckCircle color="#eeeeee" /> 2. DELIVERY METHOD
                </div>
              </div>
              <div className="row deliveryMethodDetailsContainer">
                <div>Choose how you want your order delivered </div>
                <div className="methodOneSection">
                  <div>
                    <input
                      type="radio"
                      name="deliveryMethod"
                      id="pickUpMethodOne"
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
                    name="deliveryMethod"
                    id="pickUpMethodTwo"
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
            {/* <div className="row">
              <div className="col-lg-12 confirmButtonContainer">
                <div>

                </div>
                <button className="confirmButton">Confirm Order</button>
              </div>
            </div> */}
            <div className="row">
              <Flutterwave />
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
