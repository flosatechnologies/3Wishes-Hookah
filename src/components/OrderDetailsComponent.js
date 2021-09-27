import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/orderDetailsComponent.css";
import OrderComponent from "./OrderComponent";

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
      <div className="container receiptSheet-orderDetails">
        <div className="row">
          <div className="col-lg-10">
            <div className=" receiptTransactionIdContainer-orderDetails">
              <div className="receiptTransactionIdLabel-orderDetails">
                Order Id:
              </div>
              <div className="receiptTransactionIdText-orderDetails">
                {this.props.orderId}
              </div>
            </div>
            <div className="receiptCustomerContainer-orderDetails">
              <div className="receiptCustomerLabel-orderDetails">Customer:</div>
              <div className="receiptCustomerText-orderDetails">
                {this.props.customer}
              </div>
            </div>
            <div className="receiptContactContainer-orderDetails">
              <div className="receiptContactLabel-orderDetails">Contact:</div>
              <div className="receipContactText-orderDetails">
                {this.props.contact}
              </div>
            </div>
            <div className="receiptDateContainer-orderDetails">
              <div className="receiptDateLabel-orderDetails">Date:</div>
              <div className="receiptDateText-orderDetails">
                {this.props.date}
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="row">
              <div style={{ fontWeight: "bolder" }}>Status</div>
            </div>
            <div className="row">
              <div
                style={{
                  fontSize: "15px",
                  color: "forestgreen",
                  fontWeight: "bolder",
                }}
              >
                {this.props.deliveryStatus}
              </div>
            </div>
          </div>
        </div>
        <div className="row receiptHeader-orderDetails">
          <div className="col-lg-8 receiptHeadingText-orderDetails">
            Ordered Items
          </div>
          <div className="col-lg-4 receiptHeadingText-orderDetails">
            Quantiy
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.filteredOrder[0].products.map((ord) => {
              return <OrderComponent item={ord.product} qty={ord.qty} />;
            })}
          </div>
          <div className="row receiptTotalContainer">
            <div className="col-lg-8 receiptTotalLabel">Total Items:</div>
            <div className="col-lg-4">
              {this.handleSummation(this.state.filteredOrder[0].products)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDetailsComponent;
