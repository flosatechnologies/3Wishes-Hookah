import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserProfile.css";
import { Container, Row, Col } from "react-bootstrap";
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
          <DeliveryReceiptComponent />
        </div>
      );
    }
  };

  render() {
    // let customerInfo = this.props.allTheState.customerInfo.customers;
    // let otherInfo = this.props.allTheState.customerInfo.otherInfo;
    // var prod = "";
    // var tot = "";
    // if (this.state.from === "checkout") {
    //   prod = this.props.location.state.products;
    //   tot = this.props.location.state.total;
    // }
    // const product = prod;
    // const total = tot;
    return (
      <Container fluid={true} className="userProfileContainer">
        <Row>
          <Col
            xxl={{ offset: 2, span: 8 }}
            xl={{ offset: 2, span: 8 }}
            lg={{ offset: 2, span: 8 }}
            md={{ offset: 2, span: 8 }}
            sm={{ offset: 1, span: 9 }}
            xs={{ offset: 1, span: 9 }}
          >
            <div className="welcomeTextAndUserContainer">
              <span className="welcomeText">welcome, </span>
              <span className="welcomeUser">
                {this.props.allTheState.auth.displayName}
              </span>
            </div>
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{
              textAlign: "right",
            }}
          >
            <button
              onClick={() => {
                this.props.history.goBack();
              }}
              style={{
                marginTop: "15px",
                borderStyle: "none",
                backgroundColor: "transparent",
                textAlign: "right",
              }}
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </Col>
          <hr />
        </Row>
        <Row>
          <Col
            xxl={{ offset: 4, span: 4 }}
            xl={{ offset: 4, span: 4 }}
            lg={{ offset: 3, span: 6 }}
            md={{ offset: 2, span: 8 }}
            sm={{ offset: 1, span: 10 }}
            xs={{ offset: 1, span: 10 }}
            className=" theButtonsMainContainer"
          >
            <Row className="theButtonsContainer">
              <Col className="theProfileContainer">
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
              </Col>
              <Col className="theEditProfileContainer">
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
              </Col>
              <Col className="theEditProfileContainer">
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
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            xxl={{ offset: 3, span: 6 }}
            xl={{ offset: 3, span: 6 }}
            lg={{ offset: 3, span: 6 }}
            md={{ offset: 3, span: 6 }}
            sm={{ offset: 1, span: 10 }}
            xs={{ offset: 1, span: 10 }}
          >
            {this.renderComponent()}
          </Col>
        </Row>
      </Container>
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
