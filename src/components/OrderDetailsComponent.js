import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/orderDetailsComponent.css";
import OrderComponent from "./OrderComponent";

export class OrderDetailsComponent extends Component {
  constructor(props) {
    super(props);
  }

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
                {"1003445"}
              </div>
            </div>
            <div className="receiptCustomerContainer-orderDetails">
              <div className="receiptCustomerLabel-orderDetails">Customer:</div>
              <div className="receiptCustomerText-orderDetails">
                {"Kelvin Taylor"}
              </div>
            </div>
            <div className="receiptDateContainer-orderDetails">
              <div className="receiptDateLabel-orderDetails">Date:</div>
              <div className="receiptDateText-orderDetails">
                {"21/09/2021 17:09"}
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
                pending
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
            <OrderComponent item="Hp omen Laptop" qty="3" />
            <OrderComponent item="Hp omen Laptop" qty="3" />
            <OrderComponent item="Hp omen Laptop" qty="3" />
          </div>
          <div className="row receiptTotalContainer">
            <div className="col-lg-8 receiptTotalLabel">Total Items:</div>
            <div className="col-lg-4">{"9"}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDetailsComponent;
