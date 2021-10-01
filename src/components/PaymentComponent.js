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
          className="headerIndexAndIdContainer-PayComponent"
        >
          <div className="Index-PayComponent">{props.index}</div>
          <div className="PaymentId-PayComponent">{props.paymentId}</div>
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
          xxl={3}
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="Time-PayComponent"
        >
          {props.time}
        </Col>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
          <button
            onClick={() => {
              props.Change("yes", props.Id);
            }}
            style={{ backgroundColor: "transparent", borderStyle: "none" }}
          >
            <AiOutlineEye />
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentComponent;
