import React from "react";
import "../css/deliveryScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import airpods from "../../src/assets/images/airpods.jpg";
import DatePicker from "react-datepicker";
import { MdKeyboardBackspace } from "react-icons/md";
import DeliveryComponent from "../components/DeliveryComponent";
import OrderDetailsComponent from "../components/OrderDetailsComponent";

export default class DeliveryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
      orderDetails: "no",
      deliveries: "yes",
    };
  }

  handleAlteration = (val) => {
    this.setState({ orderDetails: val, deliveries: "no" });
  };

  handleShowComponent = () => {
    if (this.state.deliveries === "yes") {
      return (
        <div>
          <Row lg={12} className="deliveryHeaderContainer">
            <Col lg={1}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>ID</div>
            </Col>
            <Col lg={3}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>PRODUCT(S)</div>
            </Col>
            <Col lg={2}>
              <p style={{ fontSize: 15, fontWeight: "600" }}>CUSTOMER</p>
            </Col>
            <Col lg={2}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>LOCATION</div>
            </Col>

            <Col lg={2}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>AMOUNT(GHS)</div>
            </Col>

            <Col lg={1}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                DELIVERY
              </div>
            </Col>
          </Row>
          <Row>
            <div>
              <DeliveryComponent
                Id="D000120"
                products="Hp Omen Laptop, ipad..."
                customer="James Addo"
                location="Koforidua"
                amount="3000"
                delivery="delivered"
                alteration={(c) => {
                  this.handleAlteration(c);
                }}
              />
              <DeliveryComponent
                Id="D000220"
                products="Whiskey, ipad..."
                customer="James Addo"
                location="Kasoa"
                amount="400"
                delivery="pending"
                alteration={(c) => {
                  this.handleAlteration(c);
                }}
              />

              <DeliveryComponent
                Id="D000220"
                products="Whiskey, ipad..."
                customer="James Addo"
                location="Tema"
                amount="400"
                delivery="pending"
                alteration={(c) => {
                  this.handleAlteration(c);
                }}
              />
            </div>
          </Row>
        </div>
      );
    }

    if (this.state.orderDetails === "yes") {
      return <OrderDetailsComponent />;
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row filterSection">
          <div className="col-lg-8 dateFilter">
            <div style={{ marginRight: 50 }}>
              From{"   "}
              <DatePicker
                selected={this.state.date1}
                onChange={(date) => this.setState({ date1: date })}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div>
              To
              <DatePicker
                selected={this.state.date2}
                onChange={(date) => this.setState({ date2: date })}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <button className="filterButton">Filter</button>
          </div>

          <div className="col-lg-1">
            <button
              className="paymentScreenBackButton"
              onClick={() => {
                this.setState({ orderDetails: "no", deliveries: "yes" });
              }}
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </div>
        </div>

        <Row>
          <div className="">{this.handleShowComponent()}</div>
        </Row>
      </div>
    );
  }
}
