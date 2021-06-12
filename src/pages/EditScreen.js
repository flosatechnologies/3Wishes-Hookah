import React, { Component } from "react";
import "../css/EditScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductComponentDashboard from "../components/ProductComponentDashboard";

class Edit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="container-fluid">
        <Row className="product-row">
          <Col className="image-section">
            <ProductComponentDashboard productName="Airpods" price="1200" />
          </Col>
          <Col>
            <div className="col form-input">
              <label id="name">Product Name</label>
              <input type="text" id="pname" />

              <label id="price">Product Price GH{"\u20B5"}</label>
              <input type="number" />

              <label id="quality">Product Quantity</label>
              <input type="number" />

              <label id="description">Product Description</label>
              <textarea></textarea>
              <Button id="btn">update</Button>
              <Button id="btn-btn">Cancel</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Edit;
