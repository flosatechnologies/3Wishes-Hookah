import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserProfile.css";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomerDetails from "./CustomerDetailsPage";
import { connect } from "react-redux";
import { AddCustomerDetail, getCustomers } from "./../Store/custDetailActions";
import firebase from "firebase";
import { HeaderPage } from "../components/HeaderPage";
// import { HeaderPage } from "../components/HeaderPage";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        profileBtn: "off",
        editProfileBtn: "off",
      },
    };
  }

  componentDidMount() {
    this.props.getCustomers();
  }

  renderComponent = () => {
    if (this.state.button.profileBtn === "on") {
      return (
        <div>
          <Col>
            <h6 className="entries">
              Full Name:{this.state.customers.fullName}
            </h6>
            <h6 className="entries">
              Phone Number:{this.state.customers.phoneNumber}
            </h6>
            <h6 className="entries">
              Ghana Post GPS:{this.state.customers.ghanaPostGps}
            </h6>
            <h6 className="entries">
              Delivery Location:{this.state.customers.deliveryLocation}
            </h6>
            <h6 className="entries">
              Land Mark:{this.state.customers.landMark}
            </h6>
            <h6 className="entries">Region:{this.state.customers.region}</h6>
          </Col>
        </div>
      );
    }

    if (this.state.button.editProfileBtn === "on") {
      return (
        <div>
          <CustomerDetails />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {/* <HeaderPage /> */}
        <div className="container-fluid userProfileContainer">
          <Row>
            <h4 className="header">Your Profile</h4>
            <hr />
          </Row>
          <Row>
            <Col></Col>
            <Col className="but">
              <button
                onClick={() => {
                  this.setState({ button: { profileBtn: "on" } });
                }}
                className="pro-edit"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  this.setState({ button: { editProfileBtn: "on" } });
                }}
                className="pro-editt"
              >
                Edit Profile
              </button>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            {this.renderComponent()}

            <Col></Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("customer details: ", state.customer);

  return {
    customers: state.customer,

    userId: state.users.uid,
  };
};

const mapDispatchToProps = () => {
  return {
    AddCustomerDetail,
    getCustomers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(UserProfile);
