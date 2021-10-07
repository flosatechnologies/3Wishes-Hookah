import React from "react";
import "../css/orderDetailsComponent.css";
import { Container, Row, Col } from "react-bootstrap";

export default function OrderComponent(props) {
  return (
    <Container fluid={true}>
      <Row className="">
        <Col
          xxl={8}
          xl={8}
          lg={8}
          md={8}
          sm={8}
          xs={8}
          className="receiptItemText-orderComponent"
        >
          {props.item}
        </Col>
        <Col
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={4}
          xs={4}
          className="receiptItemText-orderComponent"
        >
          {props.qty}
        </Col>
      </Row>
    </Container>
  );
}
