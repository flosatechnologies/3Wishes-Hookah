import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/paymentDetailsComponent.css";
import ReceiptComponent from "./ReceiptComponent";
import { Container, Col, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addDeliveryInfo } from "../Store/transactionAction";

export class PaymentDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.filteredTrans,
      addDeliveryInfo: "no",
      editDeliveryInfo: "no",
      deliveryInfo: "",
      mainTransId: this.props.mainTransId,
    };
  }

  handleTheSummation = (arr) => {
    let total = 0;
    for (let x = 0; x < arr.length; x++) {
      total += arr[x].price * arr[x].qty;
    }
    return total;
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.addDeliveryInfo(this.state.mainTransId, this.state.deliveryInfo);
    console.log(this.state.mainTransId);
  }

  handleDeliveryForm = () => {
    if (this.state.addDeliveryInfo === "yes") {
      return (
        <Container>
          <Row>
            <Col
              xxl={{ span: 8, offset: 2 }}
              xl={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              md={{ span: 8, offset: 2 }}
              sm={12}
              xs={12}
            >
              <Form>
                <Form.Group>
                  <Form.Label>delivery information</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={this.state.deliveryInfo}
                    type="text"
                    placeholder="input delivery note here"
                    type="textarea"
                    onChange={(Event) => {
                      this.setState({ deliveryInfo: Event.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onClick={(Event) => {
                      this.handleSubmit(Event);
                    }}
                    type="submit"
                    value="add"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }

    if (this.state.editDeliveryInfo === "yes") {
      return (
        <Container>
          <Row>
            <Col
              xxl={{ span: 8, offset: 2 }}
              xl={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              md={{ span: 8, offset: 2 }}
              sm={12}
              xs={12}
            >
              <Form>
                <Form.Group>
                  <Form.Label>delivery information</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    type="text"
                    value={this.state.deliveryInfo}
                    onChange={(Event) => {
                      this.setState({ deliveryInfo: Event.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    onClick={(Event) => {
                      this.handleSubmit(Event);
                    }}
                    type="submit"
                    value="update"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }
  };
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col
            xxl={{ span: 6, offset: 3 }}
            xl={{ span: 6, offset: 3 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 8, offset: 2 }}
            sm={12}
            xs={12}
            className=" receiptSheet"
          >
            <Row>
              <Col>
                <button
                  onClick={() => {
                    this.setState({
                      addDeliveryInfo: "yes",
                      editDeliveryInfo: "no",
                    });
                  }}
                >
                  add delivery Information
                </button>
              </Col>
              <Col>
                <button
                  onClick={() => {
                    this.setState({
                      addDeliveryInfo: "no",
                      editDeliveryInfo: "yes",
                    });
                  }}
                >
                  edit delivery Info
                </button>
              </Col>
            </Row>
            <Row className="upperSection">
              <Col xxl={5} xl={5} lg={6} md={12} sm={12} xs={12} className="">
                <Row>
                  <Col className="receiptTransactionIdContainer">
                    <div className="receipTransactionIdLabel">
                      Transaction Id:
                    </div>
                    <div className="receiptTransactionIdText">
                      {this.props.transactionId}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="receiptCustomerContainer">
                    <div className="receiptCustomerLabel">Customer:</div>
                    <div className="receiptCustomerText">
                      {this.props.customer}
                    </div>
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
                {
                  (this.handleTheSummation(this.state.selected),
                  console.log(this.state.selected))
                }
              </Col>
            </Row>
            <Row>
              <Col>{this.handleDeliveryForm()}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    addDeliveryInfo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(PaymentDetailsComponent);
