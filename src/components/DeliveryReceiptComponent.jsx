import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import "../css/deliveryReceiptComponent.css";
import DeliveryComponentCustomer from "./DeliveryComponentCustomer";
import { updateTransaction } from "../Store/transactionAction";

export class DeliveryReceiptComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receive: "off",
      deliveryInfo: "off",
      chosenId: "",
      // transactInfo: this.props.transacts,
    };
  }

  handleReceipt = (d, Id) => {
    if (d === "delivery") {
      this.setState({ receive: "on", chosenId: Id });
    } else {
      this.setState({ deliveryInfo: "on", chosenId: Id });
    }
  };

  handleRenderReceiptConfirmation = () => {
    if (this.state.receive === "on") {
      return (
        <div className="receiptConfirmationMainContainer">
          <div className="receiptConfirmationBox">
            <div className="receiptConfirmationText">Confirmation</div>
            <div className="receiptConfirmationCautionText">
              Are you sure you want to receive product(s)
            </div>
            <div className="receiptConfirmationNoteText">
              confirmation is unchangeable
            </div>
            <div className="receiptConfirmationButtonContainer">
              <div className="receiptConfirmationYesButtonContainer">
                <button
                  onClick={() => {
                    this.props.updateTransaction(this.state.chosenId);
                  }}
                  className="receiptConfirmationYesButton"
                >
                  Yes
                </button>
              </div>
              <div className="receiptConfirmationNoButtonContainer">
                <button
                  onClick={() => {
                    this.setState({ receive: "off" });
                  }}
                  className="receiptConfirmationNoButton"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.deliveryInfo === "on") {
      let transactionDeliveryInfo = this.props.transact.filter(
        (transa) => this.state.chosenId === transa.Id
      );

      return (
        <Container fluid={true} className="receiptConfirmationMainContainer">
          <Row>
            <Col>
              <Form.Label>Delivery Information</Form.Label>

              <Form.Control
                as="textarea"
                rows={5}
                readOnly="true"
                type="text"
                value={transactionDeliveryInfo[0].deliveryInfo}
              />
              <button
                style={{
                  backgroundColor: "transparent",
                  borderStyle: "none",
                  outline: "none",
                }}
                onClick={() => {
                  this.setState({ deliveryInfo: "off" });
                }}
              >
                ok
              </button>
            </Col>
          </Row>
        </Container>
      );
    }
  };

  render() {
    let name =
      this.props.state.auth.user.loggedInUser.firstName +
      " " +
      this.props.state.auth.user.loggedInUser.otherNames;
    console.log("theName: ", name);

    return (
      <Container fluid={true}>
        <Row className="deliveryHeaderContainer-customer">
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="idHeaderDeliveryComponent-Customer"
            style={{ fontSize: "1vw", fontWeight: "600" }}
          >
            ID
          </Col>
          <Col
            xxl={4}
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={4}
            className="productHeaderDeliveryComponent-Customer"
            style={{ fontSize: "1vw", fontWeight: "600" }}
          >
            PRODUCT(S)
          </Col>

          <Col
            className="amountHeaderDeliveryComponent-Customer"
            style={{ fontSize: "1vw", fontWeight: "600" }}
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
          >
            AMT(GHS)
          </Col>

          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="deliveryHeaderDeliveryComponent-Customer"
            style={{ fontSize: "1vw", fontWeight: "600" }}
          >
            DELIVERY
          </Col>
          <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
            <div
              style={{
                fontSize: "1vw",
                fontWeight: "600",
              }}
            ></div>
          </Col>
        </Row>
        <Row>
          {
            (console.log("transact: ", this.props.transact),
            this.props.transact.map((transa) => {
              if (name === transa.customer) {
                return (
                  <DeliveryComponentCustomer
                    Id={transa.Id}
                    orderId={transa.orderId}
                    products={transa.products[0].product}
                    amount={transa.amount}
                    delivery={transa.deliveryStatus}
                    receive={(d, i) => {
                      this.handleReceipt(d, i);
                    }}
                  />
                );
              }
            }))
          }
        </Row>
        <Row className="row-three"></Row>
        <div>{this.handleRenderReceiptConfirmation()}</div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("TransactState: ", state.transaction.transaction);
  return {
    state,
    transact: state.transaction.transaction,
  };
};

const mapDispatchToProps = () => {
  return {
    updateTransaction,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(DeliveryReceiptComponent);
