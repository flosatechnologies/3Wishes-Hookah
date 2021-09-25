import React from "react";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import "../css/deliveryComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineEye } from "react-icons/ai";

function DeliveryComponent(props) {
  return (
    <div className="deliveryComponentMainContainer">
      <Row>
        <Col lg={1}>
          <div
            style={{
              fontSize: 16,
              fonFamily: "'Oswald', sans-serif",
              width: "80px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {props.orderId}
          </div>
        </Col>
        <Col lg={3}>
          <div
            style={{
              fontSize: 16,
              fonFamily: "'Oswald', sans-serif",
              width: "240px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
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

        <Col lg={1}>
          <div
            style={{ fontSize: 16, color: "forestgreen", fontWeight: "bolder" }}
          >
            {props.delivery}
          </div>
        </Col>
        <Col lg={1}>
          <button
            onClick={() => {
              props.alteration("yes", props.Id);
            }}
            style={{ backgroundColor: "transparent", borderStyle: "none" }}
          >
            <AiOutlineEye />
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default DeliveryComponent;
