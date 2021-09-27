import React from "react";
import "../css/deliveryScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { MdKeyboardBackspace } from "react-icons/md";
import DeliveryComponent from "../components/DeliveryComponent";
import OrderDetailsComponent from "../components/OrderDetailsComponent";
import { connect } from "react-redux";
import { getTransaction } from "../Store/transactionAction";
import Moment from "react-moment";

class DeliveryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
      orderDetails: "no",
      deliveries: "yes",
      Order: "",
      transaction: this.props.transaction,
    };
  }

  componentDidMount() {
    this.props.getTransaction();
  }

  handleAlteration = (val, I) => {
    let chosen = this.state.transaction.filter((tr) => tr.Id === I);
    console.log("selectedOrder: ", chosen);
    this.setState({
      orderDetails: val,
      deliveries: "no",
      Order: chosen,
    });
  };

  handleShowComponent = () => {
    if (this.state.deliveries === "yes") {
      return (
        <div>
          <Row lg={12} className="deliveryHeaderContainer">
            <Col lg={1}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>ID</div>
            </Col>
            <Col lg={3}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>PRODUCT(S)</div>
            </Col>
            <Col lg={2}>
              <p style={{ fontSize: 15, fontWeight: "600" }}>CUSTOMER</p>
            </Col>
            <Col lg={2}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>LOCATION</div>
            </Col>

            <Col lg={2}>
              <div style={{ fontSize: 15, fontWeight: "600" }}>AMOUNT(GHS)</div>
            </Col>

            <Col lg={1}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                DELIVERY
              </div>
            </Col>
          </Row>
          <Row>
            <div>
              {this.props.transaction.map((trans) => {
                return (
                  <DeliveryComponent
                    orderId={trans.orderId}
                    Id={trans.Id}
                    products={trans.products[0].product}
                    customer={trans.customer}
                    location={trans.location}
                    amount={trans.amount}
                    delivery={trans.deliveryStatus}
                    alteration={(c, I) => {
                      this.handleAlteration(c, I);
                    }}
                  />
                );
              })}
            </div>
          </Row>
        </div>
      );
    }

    if (this.state.orderDetails === "yes") {
      return (
        <OrderDetailsComponent
          orderId={this.state.Order[0].orderId}
          contact={this.state.Order[0].contact}
          customer={this.state.Order[0].customer}
          deliveryStatus={this.state.Order[0].deliveryStatus}
          date={
            <Moment format="D MMM YYYY hh:mm a ">
              {this.state.Order[0].time}
            </Moment>
          }
          chosen={this.state.Order}
        />
      );
    }
  };

  render() {
    return (
      <div className="container-fluid">
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
                this.setState({ orderDetails: "no", deliveries: "yes" });
              }}
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </div>
        </div>

        <Row>
          <div className="">{this.handleShowComponent()}</div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction.transaction,
  };
};
const mapDispatchToProps = () => {
  return {
    getTransaction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(DeliveryScreen);
