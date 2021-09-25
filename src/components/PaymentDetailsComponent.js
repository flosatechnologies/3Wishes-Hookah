import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/paymentDetailsComponent.css";
import ReceiptComponent from "./ReceiptComponent";

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
      <div className="container receiptSheet">
        <div className="row">
          <div className="col-lg-8">
            <div className=" receiptTransactionIdContainer">
              <div className="receiptTransactionIdLabel">Transaction Id:</div>
              <div className="receiptTransactionIdText">
                {this.props.transactionId}
              </div>
            </div>
            <div className="receiptCustomerContainer">
              <div className="receiptCustomerLabel">Customer:</div>
              <div className="receiptCustomerText">{this.props.customer}</div>
            </div>
            <div className="receiptDateContainer">
              <div className="receiptDateLabel">Date:</div>
              <div className="receiptDateText">{this.props.date}</div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div>3 wishes</div>
            </div>
            <div className="row">
              <div>Transaction Details</div>
            </div>
          </div>
        </div>
        <div className="row receiptHeader">
          <div className="col-lg-6 receiptHeadingText">Items</div>
          <div className="col-lg-2 receiptHeadingText">Qty</div>
          <div className="col-lg-2 receiptHeadingText">Price{" GH\u20B5"}</div>
          <div className="col-lg-2 receiptHeadingText">Total{" GH\u20B5"}</div>
        </div>
        <div className="container">
          <div className="row">
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
          </div>
          <div className="row receiptTotalContainer">
            <div className="col-lg-10 receiptTotalLabel">Total:</div>
            <div className="col-lg-2">
              {this.handleTheSummation(this.state.selected)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentDetailsComponent;
