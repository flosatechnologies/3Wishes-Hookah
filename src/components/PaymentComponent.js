import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "../css/PaymentComponent.css";
import { AiOutlineEye } from "react-icons/ai";

function PaymentComponent(props) {
  return (
    <Container fluid={true} className="componentContainer-PayComponent">
      <Row className="paymentComponent-PayComponent">
        <Col
          xxl={3}
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="PaymentId-PayComponent"
        >
          {props.paymentId}
        </Col>
        <Col
          xxl={3}
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="Customer-PayComponent"
        >
          {props.customerName}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className="Amount-PayComponent"
        >
          {props.amountPaid}
        </Col>
        <Col
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={4}
          xs={4}
          className="Time-PayComponent"
        >
          <Row>
            <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
              {props.time}
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
              <button
                onClick={() => {
                  props.Change("yes", props.Id);
                }}
                className="viewMore-PayComponent"
                style={{ backgroundColor: "transparent", borderStyle: "none" }}
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

export default PaymentComponent;
