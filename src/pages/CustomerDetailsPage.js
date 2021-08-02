import React, { Component } from "react";
import "../css/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { AddCustomerDetail, getCustomers } from "./../Store/custDetailActions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phoneNumber: "",
      ghanaPostGps: "",
      deliveryLocation: "",
      landMark: "",
      region: "",
    };
  }

  // componentDidMount() {
  //   this.props.getCustomers();
  // }

  //handle inputs
  handleFullName = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };

  handlePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  handleGhanaPostGps = (e) => {
    this.setState({
      ghanaPostGps: e.target.value,
    });
  };

  handleDeliveryLocation = (e) => {
    this.setState({
      deliveryLocation: e.target.value,
    });
  };

  handleLandMark = (e) => {
    this.setState({
      landMark: e.target.value,
    });
  };

  handleRegion = (e) => {
    this.setState({
      region: e.target.value,
    });
  };
  //end

  handleReset = () => {
    this.setState({
      value: [{}],
    });
  };

  // formSubmit

  handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      ghanaPostGps: this.state.ghanaPostGps,
      deliveryLocation: this.state.deliveryLocation,
      landMark: this.state.landMark,
      region: this.state.region,
      Id: uuid(),
      createdAt: new Date(),
    };
    this.props.AddCustomerDetail(newCustomer);
  };
  render() {
    return (
      <div
        style={{
          background: "#fff",
          width: "90%",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container-fluid"
      >
        <Row>
          <Col
            style={{
              background: "linear-gradient(to right, #64b375, #1bdd45)",
              width: "40% ",
              // padding: "20px",
              borderRadius: "5px",
              height: "50vh",
            }}
            className=" wrapper"
          >
            <div>
              <h3 className="title">Delivery Information</h3>
            </div>

            <form
              onSubmit={this.handleSubmit}
              className="form-wrapper"
              id="reset-form"
            >
              <div className="name-group">
                <label className="labe">Full Name</label>
                <input
                  className="name-input"
                  type="text"
                  name="fullname"
                  value={this.state.fullName}
                  onChange={this.handleFullName}
                />

                <label className="labi">Phone Number</label>
                <input
                  className="num-input"
                  type="number"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneNumber}
                />
              </div>

              <div className="number-group">
                <label className="labell">Ghana Post GPS</label>
                <input
                  className="numb-input"
                  type="text"
                  name="ghanaPostGps"
                  value={this.state.ghanaPostGps}
                  onChange={this.handleGhanaPostGps}
                />

                <label className="lab">Delivery Location</label>
                <input
                  className="input"
                  type="text"
                  name="deliveryLocation"
                  value={this.state.deliveryLocation}
                  onChange={this.handleDeliveryLocation}
                />
              </div>

              <div className="location-group">
                <label className="labelled">Land Mark</label>
                <input
                  className="land-input"
                  type="text"
                  name="landMark"
                  value={this.state.landMark}
                  onChange={this.handleLandMark}
                />

                <label className="labs">Region</label>
                <input
                  className="location-input"
                  type="text"
                  name="region"
                  value={this.state.region}
                  onChange={this.handleRegion}
                />
              </div>

              <div>
                <button className="submit">Add</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("customers", state.customer);
  return {
    customers: state.customer,
  };
};

const mapDispatchToProps = () => {
  return {
    AddCustomerDetail,
    getCustomers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CustomerDetails);
