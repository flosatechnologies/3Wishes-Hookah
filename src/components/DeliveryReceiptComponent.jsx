import React, { Component } from "react";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import { connect } from "react-redux";
import "../css/deliveryReceiptComponent.css";
import DeliveryComponentCustomer from "./DeliveryComponentCustomer";
import { updateTransaction } from "../Store/transactionAction";

export class DeliveryReceiptComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receive: "off",
      chosenId: "",
      // transactInfo: this.props.transacts,
    };
  }

  handleReceipt = (yes, Id) => {
    this.setState({ receive: yes, chosenId: Id });
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
  };

  render() {
    return (
      <div className="deliveryHeaderContainer-customer">
        <Row lg={12}>
          <Col lg={2}>
            <div style={{ fontSize: 15, fontWeight: "600" }}>ID</div>
          </Col>
          <Col lg={4}>
            <div style={{ fontSize: 15, fontWeight: "600" }}>PRODUCT(S)</div>
          </Col>

          <Col lg={2}>
            <div style={{ fontSize: 15, fontWeight: "600" }}>AMT.(GHS)</div>
          </Col>

          <Col lg={2}>
            <div
              style={{
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              DELIVERY
            </div>
          </Col>
          <Col lg={2}>
            <div
              style={{
                fontSize: 15,
                fontWeight: "600",
              }}
            ></div>
          </Col>
        </Row>
        {
          (console.log("transact: ", this.props.transact),
          this.props.transact.map((transa) => {
            return (
              <DeliveryComponentCustomer
                Id={transa.Id}
                orderId={transa.orderId}
                products={transa.products[0].product}
                amount={transa.amount}
                delivery={transa.deliveryStatus}
                receive={(y, d) => {
                  this.handleReceipt(y, d);
                }}
              />
            );
          }))
        }

        <Row className="row-three"></Row>
        <div>{this.handleRenderReceiptConfirmation()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("TransactState: ", state.transaction.transaction);
  return {
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
