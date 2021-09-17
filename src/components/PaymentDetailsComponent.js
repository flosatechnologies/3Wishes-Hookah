import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/paymentDetailsComponent.css";
import ReceiptComponent from "./ReceiptComponent";

export class PaymentDetailsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container receiptSheet">
        <div className="row">
          <div className="col-lg-8">
            <div className=" receiptTransactionIdContainer">
              <div className="receiptTransactionIdLabel">Transaction Id:</div>
              <div className="receiptTransactionIdText">{"23343434343"}</div>
            </div>
            <div className="receiptCustomerContainer">
              <div className="receiptCustomerLabel">Customer:</div>
              <div className="receiptCustomerText">{"Kelvin Taylor"}</div>
            </div>
            <div className="receiptDateContainer">
              <div className="receiptDateLabel">Date:</div>
              <div className="receiptDateText">{"23343434343"}</div>
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
            <ReceiptComponent
              item="Hp omen Laptop"
              qty="3"
              price="50"
              total="150"
            />
            <ReceiptComponent
              item="Hp omen Laptop"
              qty="3"
              price="50"
              total="150"
            />
            <ReceiptComponent
              item="Hp omen Laptop"
              qty="3"
              price="50"
              total="150"
            />
          </div>
          <div className="row receiptTotalContainer">
            <div className="col-lg-10 receiptTotalLabel">Total:</div>
            <div className="col-lg-2">{"450"}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentDetailsComponent;
