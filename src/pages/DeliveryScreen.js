import React from "react";
import "../css/deliveryScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { MdKeyboardBackspace } from "react-icons/md";
import DeliveryComponent from "../components/DeliveryComponent";
import OrderDetailsComponent from "../components/OrderDetailsComponent";
import { connect } from "react-redux";
import { getTransaction } from "../Store/transactionAction";
import Moment from "react-moment";
import { Helmet } from "react-helmet";

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
        <Container fluid={true}>
          <Row className="deliveryHeaderContainer">
            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="deliveryScreenHeaderId"
            >
              ID
            </Col>
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className="deliveryScreenHeaderProducts"
            >
              PRODUCT(S)
            </Col>
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={3}
              className="deliveryScreenHeaderCustomer"
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
              className="deliveryScreenHeaderLocation"
            >
              LOCATION
            </Col>

            <Col
              xxl={1}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className="deliveryScreenHeaderAmount"
            >
              AMT(¢)
            </Col>

            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className="deliveryScreenHeaderDelivery"
            >
              DELIVERY
            </Col>
          </Row>
          <Row>
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
          </Row>
        </Container>
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
      <Container fluid={true}>
        <Helmet>
          <title>Delivery - 3Wishesgh</title>
          <meta name="description" content="3Wishes Hookah Shop" />
        </Helmet>
        <Container fluid={true}>
          <Row className="deliveryFilterSection">
            <Col
              xxl={8}
              xl={8}
              lg={7}
              md={7}
              sm={7}
              xs={7}
              className=" deliveryDateFilter"
            >
              <Row>
                <Col xxl={5} xl={5} lg={8} md={8} sm={9} xs={9}>
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

                <Col className="deliveryFilterButtonContainer">
                  <button className="deliveryFilterButton">Filter</button>
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
              className="deliveryScreenBackButtonContainer"
            >
              <button
                className="deliveryScreenBackButton"
                onClick={() => {
                  this.setState({ orderDetails: "no", deliveries: "yes" });
                }}
              >
                <MdKeyboardBackspace size="1.6em" />
              </button>
            </Col>
          </Row>

          <Row>{this.handleShowComponent()}</Row>
        </Container>
      </Container>
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
