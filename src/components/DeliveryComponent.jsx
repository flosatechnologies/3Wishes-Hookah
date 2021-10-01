import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/deliveryComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineEye } from "react-icons/ai";

function DeliveryComponent(props) {
  return (
    <Container className="deliveryComponentMainContainer">
      <Row>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
          <div
            style={{
              fontSize: 16,
              fonFamily: "'Oswald', sans-serif",
              width: "inherit",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {props.orderId}
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <div
            style={{
              fontSize: 16,
              fonFamily: "'Oswald', sans-serif",
              width: "inherit",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {props.products}
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
          <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
            {props.customer}
          </div>
        </Col>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
          <div
            style={{
              fontSize: 16,
              fonFamily: "'Oswald', sans-serif",
              width: "inherit",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {props.location}
          </div>
        </Col>

        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
          <div style={{ fontSize: 16, fonFamily: "'Oswald', sans-serif" }}>
            {props.amount}
          </div>
        </Col>

        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
          <Row>
            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              style={{
                fontSize: 16,
                color: "forestgreen",
                fontWeight: "bolder",
                width: "inherit",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {props.delivery}
            </Col>

            <Col
              style={{
                textAlign: "left",
              }}
            >
              <button
                onClick={() => {
                  props.alteration("yes", props.Id);
                }}
                style={{
                  backgroundColor: "transparent",
                  borderStyle: "none",
                }}
              >
                <AiOutlineEye />
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default DeliveryComponent;
