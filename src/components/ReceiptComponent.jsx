import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function ReceiptComponent(props) {
  return (
    <Container>
      <Row className="">
        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
          {props.item}
        </Col>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
          {props.qty}
        </Col>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
          {props.price}
        </Col>
        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
          {props.total}
        </Col>
      </Row>
    </Container>
  );
}
