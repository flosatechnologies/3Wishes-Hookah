import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PaymentScreen.css";
import Moment from "react-moment";
import PaymentComponent from "../components/PaymentComponent.js";
import PaymentDetialsComponent from "../components/PaymentDetailsComponent.js";
import DatePicker from "react-datepicker";
import { MdKeyboardBackspace } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";
import { connect } from "react-redux";
import { getTransaction } from "../Store/transactionAction";

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
      receipt: "no",
      paySummary: "yes",
      selectedTrans: "",
      transaction: this.props.transaction,
    };
  }

  componentDidMount() {
    this.props.getTransaction();
  }

  handleChangeState = (val, Id) => {
    var chosen = this.state.transaction.filter((t) => t.Id === Id);
    this.setState({ receipt: val, paySummary: "no", selectedTrans: chosen });
  };

  handleShowComponent = () => {
    if (this.state.receipt === "yes") {
      return (
        <div>
          <PaymentDetialsComponent
            transactionId={this.state.selectedTrans[0].transactionId}
            customer={this.state.selectedTrans[0].customer}
            date={
              <Moment format="D MMM YYYY hh:mm a ">
                {this.state.selectedTrans[0].time}
              </Moment>
            }
            filteredTrans={this.state.selectedTrans[0].products}
          />
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
            {this.state.transaction.map((trans, index) => {
              return (
                <PaymentComponent
                  index={index + 1}
                  paymentId={trans.transactionId}
                  customerName={trans.customer}
                  amountPaid={trans.amount}
                  Id={trans.Id}
                  time={
                    <Moment format="D MMM YYYY hh:mm a ">{trans.time}</Moment>
                  }
                  Change={(v, d) => this.handleChangeState(v, d)}
                />
              );
            })}
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
              <div>From</div>
              <div>
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
            </div>
            <div>
              <div>To</div>
              <div>
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    getTransaction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PaymentScreen);
