import React, { Component } from "react";
import "../css/deliveryComponentCustomer.css";
import { Container, Row, Col } from "react-bootstrap";

export class DeliveryComponentCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receive: "off",
    };
  }
  render() {
    let status = false;
    let color = "forestgreen";

    if (this.props.delivery === "delivered") {
      status = true;
      color = "#cccccc";
    }
    return (
      <Container fluid={true}>
        <Row>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}
          >
            <div className="orderIdDeliveryComponent-Customer">
              {this.props.orderId}
            </div>
          </Col>
          <Col
            xxl={4}
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            style={{
              fontSize: 16,
              fonFamily: "'Oswald', sans-serif",
              width: "inherit",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <div className="productNameDeliveryComponent-Customer">
              {this.props.products}
            </div>
          </Col>

          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}
          >
            <div className="amountDeliveryComponent-Customer">
              {this.props.amount}
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
              fontSize: 16,
              color: "forestgreen",
              fontWeight: "bolder",
            }}
          >
            <div className="deliveryDeliveryComponent-Customer">
              {this.props.delivery}
            </div>
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="recieveButtonContainerDeliveryComponent-Customer"
          >
            <button
              disabled={status}
              className="recieveButtonDeliveryComponent-Customer"
              onClick={() => {
                this.props.receive("on", this.props.Id);
              }}
            >
              receive
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DeliveryComponentCustomer;
