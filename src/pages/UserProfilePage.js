import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserProfile.css";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomerDetails from "./CustomerDetailsPage";
import { connect } from "react-redux";
import {
  getCustomerInfo,
  getOtherCustomerInfo,
} from "../Store/custDetailActions";
import { getTransaction } from "../Store/transactionAction";
import { MdKeyboardBackspace } from "react-icons/md";
import CustomerAddressDetails from "../components/CustomerAddressDetails";
import DeliveryReceiptComponent from "../components/DeliveryReceiptComponent";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        profileBtn: "off",
        editProfileBtn: "off",
        deliveryBtn: "off",
      },
    };
  }

  componentDidMount() {
    this.props.getCustomerInfo();
    this.props.getOtherCustomerInfo();
    this.props.getTransaction();
  }
  renderComponent = () => {
    if (this.state.button.profileBtn === "on") {
      return (
        <div>
          <CustomerAddressDetails
            Info={this.props.customerInfo}
            logUserInfo={this.props.loggedUserInfo}
            otherInformation={this.props.otherInfo}
          />
        </div>
      );
    }

    if (this.state.button.editProfileBtn === "on") {
      return (
        <div>
          <CustomerDetails
            custInfo={this.props.customerInfo}
            otherInform={this.props.otherInfo}
            loggedUserInfo={this.props.loggedUserInfo}
          />
        </div>
      );
    }

    if (this.state.button.deliveryBtn === "on") {
      return (
        <div>
          <DeliveryReceiptComponent transacts={this.props.transaction} />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid userProfileContainer">
          <Row>
            <Col lg={11}>
              <h4 className="header">Your Profile</h4>
            </Col>
            <Col lg={1}>
              <button
                onClick={() => {
                  this.props.history.goBack();
                }}
                style={{
                  marginTop: "15px",
                  borderStyle: "none",
                  backgroundColor: "transparent",
                }}
              >
                <MdKeyboardBackspace size="1.6em" />
              </button>
            </Col>
            <hr />
          </Row>
          <Row>
            <Col xxl={4}></Col>
            <Col className=" theButtonsMainContainer">
              <div className="theButtonsContainer">
                <div className="theProfileContainer">
                  <button
                    onClick={() => {
                      this.setState({
                        button: {
                          profileBtn: "on",
                          editProfileBtn: "off",
                          deliveryBtn: "off",
                        },
                      });
                    }}
                    className="pro-edit"
                    Id={this.state.button.profileBtn}
                  >
                    Profile
                  </button>
                </div>
                <div className="theEditProfileContainer">
                  <button
                    onClick={() => {
                      this.setState({
                        button: {
                          profileBtn: "off",
                          editProfileBtn: "on",
                          deliveryBtn: "off",
                        },
                      });
                    }}
                    className="pro-editt"
                    Id={this.state.button.editProfileBtn}
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="theEditProfileContainer">
                  <button
                    onClick={() => {
                      this.setState({
                        button: {
                          profileBtn: "off",
                          editProfileBtn: "off",
                          deliveryBtn: "on",
                        },
                      });
                    }}
                    className="pro-editt"
                    Id={this.state.button.deliveryBtn}
                  >
                    Delivery
                  </button>
                </div>
              </div>
            </Col>
            <Col xxl={4}></Col>
          </Row>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}> {this.renderComponent()}</Col>

            <Col lg={3}></Col>
          </Row>
        </div>
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
  console.log("customerInfo: ", state.customerInfo);
  console.log("otherInfo: ", state.customerInfo.otherInfo);
  console.log("transaction: ", state.transaction.transaction);
  return {
    allTheState: state,
    customerInfo: selected,
    otherInfo: selectedOther,
    userId: state.auth.user.loggedInUser.Id,
    loggedUserInfo: state.auth.user.loggedInUser,
    transaction: state.transaction.transaction,
  };
};

const mapDispatchToProps = () => {
  return {
    getCustomerInfo,
    getOtherCustomerInfo,
    getTransaction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(UserProfile);
