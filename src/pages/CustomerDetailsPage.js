import React from "react";
import "../css/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const CustomerDetails = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.elements.fullname.value;
    let number = e.target.elements.number.value;
    let address = e.target.elements.address.value;
    let gps = e.target.elements.gps.value;
    let location = e.target.elements.location.value;
    let mark = e.target.elements.mark.value;
    let region = e.target.elements.region.value;
  };

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

          <form onSubmit={handleSubmit} className="form-wrapper">
            <div className="name-group">
              <label className="labe">Full Name</label>
              <input className="name-input" type="text" name="fullname" />

              <label className="labi">Phone Number</label>
              <input className="num-input" type="number" name="number" />
            </div>

            <div className="number-group">
              <label className="labell">Ghana Post GPS</label>
              <input className="numb-input" type="text" name="gps" />

              <label className="lab">Delivery Location</label>
              <input className="input" type="text" name="location" />
            </div>

            <div className="location-group">
              <label className="labelled">Land Mark</label>
              <input className="land-input" type="text" name="mark" />

              <label className="labs">Region</label>
              <input className="location-input" type="text" name="region" />
            </div>

            <div>
              <button className="submit">Add</button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);
