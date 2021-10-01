import React, { Component } from "react";
import "../css/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArchive, BsCreditCard, BsPerson } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../assets/images/logo1.png";
import userImage from "../assets/images/contact.jpg";
import { getAllUsers } from "../Store/usersActions.js";
import PaymentScreen from "./PaymentScreen";
import ProductsScreenDashboard from "./ProductsScreenDashboard";
import DeliveryScreen from "./DeliveryScreen";
import { connect } from "react-redux";
import { logoutUser } from "../Store/authActions";
import { getAllProducts } from "../Store/productActions";
import UsersScreenDashboard from "./UsersScreenDashboard";
import { getTransaction } from "../Store/transactionAction";
import { Container, Row, Col } from "react-bootstrap";

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
    this.props.getAllUsers();
    this.props.getTransaction();
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
            <PaymentScreen
              transaction={this.props.state.transaction.transaction}
            />
          </div>
        );
      }

      if (this.state.buttonState.delivery === "active") {
        return (
          <div>
            <DeliveryScreen
              transaction={this.props.state.transaction.transaction}
            />
          </div>
        );
      }
      if (this.state.buttonState.users === "active") {
        return (
          <div>
            <UsersScreenDashboard adminUsers={this.props.state.users.users} />
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
      <Container fluid={true} className=" mainContainer">
        <Row className=" menuBar">
          <Col xl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
            <img src={logo} width="70" height="70" alt="logo" />
          </Col>
        </Row>

        <Row className=" bodyArea">
          <Col
            xl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="dashboardButtonSection"
          >
            <Row className=" profileSectionContainer">
              <Col xl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                <img src={userImage} alt="userImage" className="userImage" />
              </Col>
              <Col
                xl={7}
                xl={7}
                lg={7}
                md={12}
                sm={12}
                xs={12}
                className="profileWelcomeMessage"
              >
                <Row className="userWelcome">Welcome,</Row>
                <Row> {this.props.state.auth.displayName} </Row>
              </Col>
            </Row>

            <Row>
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
            </Row>
            <Row>
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
            </Row>
            <Row>
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
            </Row>
            <Row>
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
            </Row>

            <Row>
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
            </Row>
          </Col>
          <Col
            xl={10}
            xl={10}
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className=" workspace"
          >
            {handleRenderScreen()}
          </Col>
        </Row>
      </Container>
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
  return { logoutUser, getAllProducts, getAllUsers, getTransaction };
};

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);
