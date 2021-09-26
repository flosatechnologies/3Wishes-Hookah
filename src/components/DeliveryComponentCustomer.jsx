import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

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
      <div>
        <Row>
          <Col lg={2}>
            <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
              {this.props.orderId}
            </div>
          </Col>
          <Col lg={4}>
            <div
              style={{
                fontSize: 16,
                fonFamily: "'Oswald', sans-serif",
                width: "160",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {this.props.products}
            </div>
          </Col>

          <Col lg={2}>
            <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
              {this.props.amount}
            </div>
          </Col>

          <Col lg={2}>
            <div
              style={{
                fontSize: 16,
                color: "forestgreen",
                fontWeight: "bolder",
              }}
            >
              {this.props.delivery}
            </div>
          </Col>
          <Col lg={2}>
            <button
              disabled={status}
              style={{
                fontSize: 16,
                color: "white",
                backgroundColor: color,
                borderStyle: "none",
                margin: "1px 0px",
                padding: "1px 2px",
                borderRadius: "3px",
              }}
              onClick={() => {
                this.props.receive("on", this.props.Id);
              }}
            >
              receive
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DeliveryComponentCustomer;
