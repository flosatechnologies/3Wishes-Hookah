import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PaymentScreen.css";
import PaymentComponent from "../components/PaymentComponent.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row filterSection">
          <div className="col-lg-11 dateFilter">
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
          <div className="col-lg-1">
            <button className="filterButton">Filter</button>
          </div>
        </div>
        <div className="headerSection">
          <div className=" headerIndex">#</div>
          <div className=" headerPaymentId">PAYMENT ID</div>
          <div className="headerCustomer">CUSTOMER</div>
          <div className="headerAmount">AMOUNT (GHS)</div>
          <div className="headerTime">TIME</div>
        </div>
        <div className="">
          <PaymentComponent
            index="1"
            paymentId="PR-0000001"
            customerName="Kelvin Taylor"
            amountPaid="300"
            time="Sat Jun 05 2021 14:15:10"
          />
          <PaymentComponent
            index="2"
            paymentId="PR-0000001"
            customerName="Kelvin Taylor"
            amountPaid="300"
            time="Sat Jun 05 2021 14:15:10"
          />
          <PaymentComponent
            index="3"
            paymentId="PR-0000001"
            customerName="Kelvin Taylor"
            amountPaid="300"
            time="Sat Jun 05 2021 14:15:10"
          />
          <PaymentComponent
            index="4"
            paymentId="PR-0000001"
            customerName="Kelvin Taylor"
            amountPaid="300"
            time="Sat Jun 05 2021 14:15:10"
          />
          <PaymentComponent
            index="5"
            paymentId="PR-0000001"
            customerName="Kelvin Taylor"
            amountPaid="300"
            time="Sat Jun 05 2021 14:15:10"
          />
        </div>
      </div>
    );
  }
}

export default PaymentScreen;
