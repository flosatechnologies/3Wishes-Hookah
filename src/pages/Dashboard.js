import React, { Component } from "react";
import "../css/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArchive, BsCreditCard, BsPerson } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../assets/images/logo1.png";
import userImage from "../assets/images/contact.jpg";

import PaymentScreen from "./PaymentScreen";
import ProductsScreenDashboard from "./ProductsScreenDashboard";
import DeliveryScreen from "./DeliveryScreen";
import { connect } from "react-redux";
import { logoutUser } from "../Store/authActions";
import { getAllProducts } from "../Store/productActions";

import UsersScreenDashboard from "./UsersScreenDashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: {
        product: "inactive",
        payment: "inactive",
        delivery: "inactive",
        users: "inactive",
        logout: "inactive",
      },
      adminFirstName: "",
    };
  }

  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    const handleRenderScreen = () => {
      // if (this.state.buttonState.payment === "active")
      if (this.state.buttonState.product === "active") {
        return (
          <div>
            <ProductsScreenDashboard reduxData={this.props.products} />
          </div>
        );
      }

      if (this.state.buttonState.payment === "active") {
        return (
          <div>
            <PaymentScreen />
          </div>
        );
      }

      if (this.state.buttonState.delivery === "active") {
        return (
          <div>
            <DeliveryScreen />
          </div>
        );
      }
      if (this.state.buttonState.users === "active") {
        return (
          <div>
            <UsersScreenDashboard
              adminUsers={this.props.state.users.allUsers}
            />
          </div>
        );
      }

      if (this.state.buttonState.logout === "active") {
        return (
          <div className=" logOutDialogBox ">
            <div className="logOutDialogBoxContainer">
              <div className=" logOutHeaderContainer">
                <p>CONFIRMATION</p>
              </div>
              <div className=" logOutMessageContainer">
                <p>Are you sure you want to Logout</p>
              </div>
              <div className="logOutButtonsContainer">
                <div className="logOutYesButtonContainer">
                  <button
                    className="logOutYesButton"
                    onClick={() => {
                      this.props.logoutUser();
                    }}
                  >
                    Yes
                  </button>
                </div>
                <div className="logOutNoButtonContainer">
                  <button
                    className="logOutNoButton"
                    onClick={() => {
                      this.setState({
                        buttonState: {
                          product: "active",
                          payment: "inactive",
                          delivery: "inactive",
                          users: "inactive",
                          logout: "inactive",
                        },
                      });
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    };

    return (
      <div className="container-fluid mainContainer">
        <div className="row menuBar">
          <div className="col-lg-2">
            <img src={logo} width="70" height="70" alt="logo" />
          </div>
        </div>

        <div className="row bodyArea">
          <div className="col-lg-2 dashboardButtonSection">
            <div className="row profileSectionContainer">
              <div className="profileSection">
                <div>
                  <img src={userImage} alt="userImage" className="userImage" />
                </div>
                <div className="profileWelcomeMessage">
                  <div className="userWelcome">Welcome,</div>
                  <div> {this.props.state.auth.displayName} </div>
                </div>
              </div>
            </div>

            <div className="row">
              <button
                onClick={() => {
                  this.setState({
                    buttonState: {
                      payment: "inactive",
                      delivery: "inactive",
                      logout: "inactive",
                      product: "active",
                      users: "inactive",
                    },
                  });
                }}
                id={this.state.buttonState.product}
                className="dashboardButtons"
              >
                <BsArchive style={{ marginRight: 13 }} /> Product
              </button>
            </div>
            <div className="row">
              <button
                onClick={() => {
                  this.setState({
                    buttonState: {
                      product: "inactive",
                      delivery: "inactive",
                      logout: "inactive",
                      payment: "active",
                      users: "inactive",
                    },
                  });
                }}
                id={this.state.buttonState.payment}
                className="dashboardButtons"
              >
                <BsCreditCard style={{ marginRight: 15 }} />
                Payment
              </button>
            </div>
            <div className="row">
              <button
                onClick={() => {
                  this.setState({
                    buttonState: {
                      product: "inactive",
                      payment: "inactive",
                      logout: "inactive",
                      delivery: "active",
                      users: "inactive",
                    },
                  });
                }}
                id={this.state.buttonState.delivery}
                className="dashboardButtons"
              >
                <RiTruckLine style={{ marginRight: 15 }} />
                Delivery
              </button>
            </div>
            <div className="row">
              <button
                onClick={() => {
                  this.setState({
                    buttonState: {
                      product: "inactive",
                      payment: "inactive",
                      delivery: "inactive",
                      logout: "inactive",
                      users: "active",
                    },
                  });
                  // this.props.logoutUser();
                }}
                id={this.state.buttonState.users}
                className="dashboardButtons"
              >
                <BsPerson style={{ marginRight: 15 }} />
                Users
              </button>
            </div>

            <div className="row">
              <button
                onClick={() => {
                  this.setState({
                    buttonState: {
                      product: "inactive",
                      payment: "inactive",
                      delivery: "inactive",
                      users: "inactive",
                      logout: "active",
                    },
                  });
                }}
                id={this.state.buttonState.logout}
                className="dashboardButtons"
              >
                <AiOutlineLogout style={{ marginRight: 15 }} />
                Logout
              </button>
            </div>
          </div>
          <div className="col-lg-10 workspace">{handleRenderScreen()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    products: state.products.products,
  };
};

const mapDispatchToProps = () => {
  return { logoutUser, getAllProducts };
};

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);
