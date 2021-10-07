import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/orderDetailsComponent.css";
import OrderComponent from "./OrderComponent";
import { Container, Col, Row } from "react-bootstrap";

export class OrderDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredOrder: this.props.chosen,
    };
  }

  handleSummation = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].qty;
    }
    return total;
  };
  render() {
    return (
      <Container fluid={true} className=" receiptSheet-orderDetails">
        <Row xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
            <Row className=" receiptTransactionIdContainer-orderDetails">
              <Col className="receiptTransactionIdLabel-orderDetails">
                Order Id:
              </Col>
              <Col className="receiptTransactionIdText-orderDetails">
                {this.props.orderId}
              </Col>
            </Row>
            <Row className="receiptCustomerContainer-orderDetails">
              <Col className="receiptCustomerLabel-orderDetails">Customer:</Col>
              <Col className="receiptCustomerText-orderDetails">
                {this.props.customer}
              </Col>
            </Row>
            <Row className="receiptContactContainer-orderDetails">
              <Col className="receiptContactLabel-orderDetails">Contact:</Col>
              <Col className="receiptContactText-orderDetails">
                {this.props.contact}
              </Col>
            </Row>
            <Row className="receiptDateContainer-orderDetails">
              <Col className="receiptDateLabel-orderDetails">Date:</Col>
              <Col className="receiptDateText-orderDetails">
                {this.props.date}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="receiptStatusLabel-orderDetails">Status</Col>
            </Row>
            <Row className="receiptStatusText-orderDetails">
              <Col>{this.props.deliveryStatus}</Col>
            </Row>
          </Col>
        </Row>
        <Row className=" receiptHeader-orderDetails">
          <Col
            xxl={8}
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            className=" receiptHeadingText-orderDetails"
          >
            Ordered Items
          </Col>
          <Col
            xxl={4}
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            className=" receiptHeadingText-orderDetails"
          >
            Quantiy
          </Col>
        </Row>
        <Container className="container">
          <Row>
            {this.state.filteredOrder[0].products.map((ord) => {
              return <OrderComponent item={ord.product} qty={ord.qty} />;
            })}
          </Row>
          <Row className="row receiptTotalContainer">
            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              className="receiptTotalLabel-orderDetails"
            >
              Total Items:
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={4}
              sm={4}
              xs={4}
              className="receiptTotalText-orderDetails"
            >
              {this.handleSummation(this.state.filteredOrder[0].products)}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default OrderDetailsComponent;
