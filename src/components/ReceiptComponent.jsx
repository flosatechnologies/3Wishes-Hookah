import React from "react";
import "../css/paymentDetailsComponent.css";
import { Container, Col, Row } from "react-bootstrap";

export default function ReceiptComponent(props) {
  return (
    <Container fluid={true}>
      <Row>
        <Col
          xxl={6}
          xl={6}
          lg={6}
          md={6}
          sm={4}
          xs={4}
          className="receiptPaymentComponentText"
        >
          {props.item}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className="receiptPaymentComponentText"
        >
          {props.qty}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className="receiptPaymentComponentText"
        >
          {props.price}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className="receiptPaymentComponentText"
        >
          {props.total}
        </Col>
      </Row>
    </Container>
  );
}
