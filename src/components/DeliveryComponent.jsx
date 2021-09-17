import React from "react";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import "../css/deliveryComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DeliveryComponent(props) {
  return (
    <div className="deliveryComponentMainContainer">
      <Row>
        <Col lg={1}>
          <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
            {props.Id}
          </div>
        </Col>
        <Col lg={3}>
          <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
            {props.products}
          </div>
        </Col>
        <Col lg={2}>
          <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
            {props.customer}
          </div>
        </Col>
        <Col lg={2}>
          <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
            {props.location}
          </div>
        </Col>

        <Col lg={2}>
          <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
            {props.amount}
          </div>
        </Col>

        <Col lg={2}>
          <div
            style={{ fontSize: 16, color: "forestgreen", fontWeight: "bolder" }}
          >
            {props.delivery}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DeliveryComponent;
