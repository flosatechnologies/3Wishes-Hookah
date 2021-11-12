import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/deliveryComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineEye } from "react-icons/ai";

function DeliveryComponent(props) {
  return (
    <Container fluid={true} className="deliveryComponentMainContainer">
      <Row>
        <Col
          xxl={1}
          xl={1}
          lg={1}
          md={1}
          sm={1}
          xs={1}
          className="orderId-deliveryComponent"
        >
          {props.orderId}
        </Col>
        <Col
          xxl={3}
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="products-deliveryComponent"
        >
          {props.products}
        </Col>
        <Col
          xxl={3}
          xl={3}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="customer-deliveryComponent"
        >
          {props.customer}
        </Col>
        <Col
          xxl={2}
          xl={2}
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className="location-deliveryComponent"
        >
          {props.location}
        </Col>

        <Col
          xxl={1}
          xl={1}
          lg={1}
          md={1}
          sm={1}
          xs={1}
          className="amount-deliveryComponent"
        >
          {props.amount}
        </Col>

        <Col
          xxl={1}
          xl={1}
          lg={1}
          md={1}
          sm={1}
          xs={1}
          className="delivery-deliveryComponent"
        >
          {props.delivery}
        </Col>

        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
          <button
            onClick={() => {
              props.alteration("yes", props.Id);
            }}
            style={{ backgroundColor: "transparent", borderStyle: "none" }}
          >
            <AiOutlineEye className="viewMoreButton-deliveryComponent" />
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default DeliveryComponent;
