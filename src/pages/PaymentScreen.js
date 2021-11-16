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
import { Container, Row, Col } from "react-bootstrap";

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
            deliveryInfo={this.state.selectedTrans[0].deliveryInfo}
            mainTransId={this.state.transaction[0].Id}
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
        <Container fluid={true}>
          <Row className="headerSection">
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className="headerPaymentId"
            >
              PAYMENT ID
            </Col>
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className="headerCustomer"
            >
              CUSTOMER
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className="headerAmount"
            >
              AMT(¢)
            </Col>
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className="headerTime"
            >
              DATE & TIME
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          </Row>
          <Row>
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
          </Row>
        </Container>
      );
    }
  };
  render() {
    return (
      <Container>
        <Row className="filterSection">
          <Col
            xxl={8}
            xl={8}
            lg={7}
            md={7}
            sm={7}
            xs={7}
            className="dateFilter"
          >
            <Row>
              <Col xxl={5} xl={5} lg={8} md={8} sm={9} xs={9}>
                <div>
                  <div>From</div>
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
              </Col>
              <Col xxl={5} xl={5} lg={8} md={8} sm={9} xs={9}>
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
              </Col>
              <Col className="filterButtonContainer">
                <button className="filterButton">Filter</button>
              </Col>
            </Row>
          </Col>

          <Col
            xxl={{ span: 1, offset: 3 }}
            xl={{ span: 1, offset: 3 }}
            lg={{ span: 2, offset: 3 }}
            md={{ span: 2, offset: 3 }}
            sm={{ span: 2, offset: 3 }}
            sm={{ span: 2, offset: 3 }}
            className="paymentScreenBackButtonContainer"
          >
            <button
              className="paymentScreenBackButton"
              onClick={() => {
                this.setState({ receipt: "no", paySummary: "yes" });
              }}
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </Col>
        </Row>

        <Row>
          <Col> {this.handleShowComponent()}</Col>
        </Row>
      </Container>
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
