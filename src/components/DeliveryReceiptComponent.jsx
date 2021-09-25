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
      chosenTransact: "",
      transactInfo: this.props.transacts,
    };
  }

  handleReceipt = (yes, Id) => {
    let selected = this.state.transactInfo.filter((trans) => trans.Id === Id);
    this.setState({ receive: yes, chosenTransact: selected[0].product });
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
                <button className="receiptConfirmationYesButton">Yes</button>
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
        {this.state.transactInfo.map((t) => {
          return (
            <DeliveryComponentCustomer
              Id={t.Id}
              products={t.products[0]}
              amount={t.amount}
              delivery={t.delivery}
              receive={(y, d) => {
                this.handleReceipt(y, d);
              }}
            />
          );
        })}
        {/* <DeliveryComponentCustomer
          Id="D000220"
          products="Whiskey, ipad..."
          amount="400"
          delivery="pending"
          receive={(y) => {
            this.handleReceipt(y);
          }}
        />

        <DeliveryComponentCustomer
          Id="D000220"
          products="Whiskey, ipad..."
          amount="400"
          delivery="pending"
          receive={(y) => {
            this.handleReceipt(y);
          }}
        /> */}

        <Row className="row-three"></Row>
        <div>{this.handleRenderReceiptConfirmation()}</div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
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
