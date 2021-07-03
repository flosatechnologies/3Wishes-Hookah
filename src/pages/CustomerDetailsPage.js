import React from "react";
import "../css/CustomerDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const CustomerDetails = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.elements.name.value;
    let number = e.target.elements.number.value;
    let address = e.target.elements.address.value;
  };

  return (
    <div
      style={{
        background: "#fff",
        width: "90%",
        minHeight: "97vh",
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
            padding: "20px",
            borderRadius: "5px",
            height: "85vh",
          }}
          className=" wrapper"
        >
          <div>
            <h3 className="title">Delivery Information</h3>
          </div>

          <form onSubmit={handleSubmit} className="form-wrapper">
            <div className="name">
              <label
                style={{
                  width: "100%",
                  marginTop: "0.4rem",
                  display: "flex",
                  justifyContent: "left ",
                }}
                className="label"
              >
                Full Name
              </label>
              <input
                style={{
                  color: "#000",
                  fontSize: " 16px",
                  height: "40px",
                  outline: "none",
                  width: "100%",
                  background: "lightgray",
                  borderRadius: "5px",
                  borderBottomStyle: "2px solid #000",
                  marginBottom: "7px",
                  alignSelf: "left",
                }}
                className="input1"
                type="text"
                name="fullname"
              />
            </div>
            <div className="number">
              <label style={{ marginLeft: "15px" }} className="label">
                Phone Number
              </label>
              <input className="inputt" type="number" name="number" />
            </div>
            <div className="location">
              <label style={{ marginLeft: "15px" }} className="label">
                Delivery Location
              </label>
              <input
                style={{
                  color: "#000",
                  // padding: "0 !important";
                  fontSize: " 16px",
                  height: "32px",
                  outline: "none",
                  width: "100%",
                  background: "lightgray",
                  borderRadius: "5px",
                  borderBottomStyle: "2px solid #000",
                  marginBottom: "7px",
                  alignSelf: "left",
                }}
                className="input"
                type="text"
                name="location"
              />
            </div>

            <div>
              <button className="submit">Add</button>
            </div>
            {/*<div style={{ display: "flex" }}>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#fff",
                  paddingTop: "25px",
                  marginLeft: "50px",
                  fontSize: "12px",
                }}
              >
                Have an account?
              </p>
              <button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  color: "#f80759",
                  background: "none",
                  border: "none",
                  marginLeft: "10px",
                  paddingTop: "25px",
                  fontSize: "12px",
                }}
              >
                <li>
                  <Link to={"/login"}>Sign in </Link>
                </li>
              </button>
              </div>*/}
          </form>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);
