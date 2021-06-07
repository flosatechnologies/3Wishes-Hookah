import React from "react";
import "../css/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArchive, BsCreditCard } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";
import userImage from "../assets/images/contact.jpg";
import PaymentScreen from "./PaymentScreen";
import { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: {
        product: "inactive",
        payment: "inactive",
        delivery: "inactive",
        logout: "inactive",
      },
    };
  }

  render() {
    const handleRenderScreen = () => {
      if (this.state.buttonState.payment === "active") {
        return (
          <div>
            <PaymentScreen />
          </div>
        );
      }
    };
    return (
      <div className="container-fluid">
        <div className="row menuBar">
          <div className="col-lg-2">
            <img src={logo} width="70" height="70" alt="logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 dashboardButtonSection">
            <div className="row profileSection">
              <div>
                {/* <img
                src={require("../assets/images/contact.jpg")}
                alt="userImage"
                width="70"
                height="70"
              /> */}
                <FaUserCircle
                  style={{
                    width: 70,
                    height: 70,
                    marginRight: 20,
                  }}
                />
              </div>
              <div>
                <h5>Welcome,</h5>
                <div>User</div>
              </div>
            </div>

            <div className="row">
              <button
                onClick={() => {
                  this.setState({
                    buttonState: {
                      product: "active",
                      payment: "inactive",
                      delivery: "inactive",
                      logout: "inactive",
                    },
                  });
                }}
                id={this.state.buttonState.product}
                className="dashboardButtons "
              >
                <BsArchive style={{ marginRight: 15 }} /> Product
              </button>
            </div>
            <div className="row">
              <button
                onClick={() => {
                  this.setState({
                    buttonState: {
                      product: "inactive",
                      payment: "active",
                      delivery: "inactive",
                      logout: "inactive",
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
                      delivery: "active",
                      logout: "inactive",
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

export default Dashboard;
