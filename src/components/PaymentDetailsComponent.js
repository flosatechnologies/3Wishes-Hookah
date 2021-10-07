import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/paymentDetailsComponent.css";
import ReceiptComponent from "./ReceiptComponent";
import { Container, Col, Row } from "react-bootstrap";

export class PaymentDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.filteredTrans,
    };
  }

  handleTheSummation = (arr) => {
    let total = 0;
    for (let x = 0; x < arr.length; x++) {
      total += arr[x].price * arr[x].qty;
    }
    return total;
  };
  render() {
    return (
      <Container fluid={true} className=" receiptSheet">
        <Row className="upperSection">
          <Col xxl={5} xl={5} lg={6} md={12} sm={12} xs={12} className="">
            <Row>
              <Col className="receiptTransactionIdContainer">
                <div className="receipTransactionIdLabel">Transaction Id:</div>
                <div className="receiptTransactionIdText">
                  {this.props.transactionId}
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="receiptCustomerContainer">
                <div className="receiptCustomerLabel">Customer:</div>
                <div className="receiptCustomerText">{this.props.customer}</div>
              </Col>
            </Row>
            <Row>
              <Col className="receiptDateContainer">
                <div className="receiptDateLabel">Date:</div>
                <div className="receiptDateText">{this.props.date}</div>
              </Col>
            </Row>
          </Col>
          <Col
            xxl={{ span: 4, offset: 3 }}
            xl={{ span: 4, offset: 3 }}
            lg={{ span: 4, offset: 2 }}
            md={12}
            sm={12}
            xs={12}
            className=""
          >
            <Row>
              <div className="wishesText">3 wishes</div>
            </Row>
            <Row>
              <div className="wishesText">Transaction Details</div>
            </Row>
          </Col>
        </Row>
        <Row className="receiptHeader">
          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={6}
            sm={4}
            xs={4}
            className=" receiptHeadingText"
          >
            Items
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="receiptHeadingText"
          >
            Qty
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="receiptHeadingText"
          >
            Price{" GH\u20B5"}
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="receiptHeadingText"
          >
            Total{" GH\u20B5"}
          </Col>
        </Row>

        <Row>
          {this.state.selected.map((prod) => {
            return (
              <ReceiptComponent
                item={prod.product}
                qty={prod.qty}
                price={prod.price}
                total={prod.price * prod.qty}
              />
            );
          })}
        </Row>
        <Row className="receiptTotalContainer">
          <Col
            xxl={{ span: 2, offset: 8 }}
            xl={{ span: 2, offset: 8 }}
            lg={{ span: 2, offset: 8 }}
            md={{ span: 2, offset: 8 }}
            sm={{ span: 2, offset: 7 }}
            xs={{ span: 2, offset: 7 }}
            className="receiptTotalLabel"
          >
            Total:
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={3}
            xs={3}
            className="receiptTotalText"
          >
            {this.handleTheSummation(this.state.selected)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PaymentDetailsComponent;
