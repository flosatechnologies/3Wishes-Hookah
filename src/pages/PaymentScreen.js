import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PaymentScreen.css";
import PaymentComponent from "../components/PaymentComponent.js";
import PaymentDetialsComponent from "../components/PaymentDetailsComponent.js";
import DatePicker from "react-datepicker";
import { MdKeyboardBackspace } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
      receipt: "no",
      paySummary: "yes",
    };
  }

  handleChangeState = (val) => {
    this.setState({ receipt: val, paySummary: "no" });
  };

  handleShowComponent = () => {
    if (this.state.receipt === "yes") {
      return (
        <div>
          <PaymentDetialsComponent />
        </div>
      );
    }
    if (this.state.paySummary === "yes") {
      return (
        <div>
          <div className="headerSection">
            <div className=" headerIndex">#</div>
            <div className=" headerPaymentId">PAYMENT ID</div>
            <div className="headerCustomer">CUSTOMER</div>
            <div className="headerAmount">AMOUNT (GHS)</div>
            <div className="headerTime">TIME</div>
          </div>
          <div>
            <PaymentComponent
              index="1"
              paymentId="PR-0000001"
              customerName="Kelvin Taylor"
              amountPaid="300"
              time="Sat Jun 05 2021 14:15:10"
              Change={(v) => this.handleChangeState(v)}
            />
            <PaymentComponent
              index="2"
              paymentId="PR-0000001"
              customerName="Kelvin Taylor"
              amountPaid="300"
              time="Sat Jun 05 2021 14:15:10"
              Change={(v) => this.handleChangeState(v)}
            />
            <PaymentComponent
              index="3"
              paymentId="PR-0000001"
              customerName="Kelvin Taylor"
              amountPaid="300"
              time="Sat Jun 05 2021 14:15:10"
              Change={(v) => this.handleChangeState(v)}
            />
            <PaymentComponent
              index="4"
              paymentId="PR-0000001"
              customerName="Kelvin Taylor"
              amountPaid="300"
              time="Sat Jun 05 2021 14:15:10"
              Change={(v) => this.handleChangeState(v)}
            />
            <PaymentComponent
              index="5"
              paymentId="PR-0000001"
              customerName="Kelvin Taylor"
              amountPaid="300"
              time="Sat Jun 05 2021 14:15:10"
              Change={(v) => this.handleChangeState(v)}
            />
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row filterSection">
          <div className="col-lg-8 dateFilter">
            <div style={{ marginRight: 50 }}>
              From{"   "}
              <DatePicker
                selected={this.state.date1}
                onChange={(date) => this.setState({ date1: date })}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div>
              To
              <DatePicker
                selected={this.state.date2}
                onChange={(date) => this.setState({ date2: date })}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div className="col-lg-3">
            <button className="filterButton">Filter</button>
          </div>

          <div className="col-lg-1">
            <button
              className="paymentScreenBackButton"
              onClick={() => {
                this.setState({ receipt: "no", paySummary: "yes" });
              }}
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </div>
        </div>

        <div className="">{this.handleShowComponent()}</div>
      </div>
    );
  }
}

export default PaymentScreen;
