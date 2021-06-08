/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../css/AddProductScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegImage } from "react-icons/fa";

class AddProduct extends Component {
  state = {
    name: "",
    price: "",
    quantity: "",
    description: "",
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJfdSVJ3Vi3Q_8wVTsa8lE6foFVOOFXiapNJB6SORmxKLOCi9hN1QgGO8saCXqfUhmkU&usqp=CAU",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <Container className="main-container">
        <h3>Add Product</h3>
        <Row className="form">
          <Col className="input">
            <h5>Details</h5>
            <label>Product Name</label>
            <input type="text" id="product-name" />

            <label>Product Price GH{"\u20B5"}</label>
            <input type="number" id="product-price" />

            <label>Product Quantity</label>
            <input type="number" id="product-quantity" />

            <label>Product Description</label>
            <textarea></textarea>
          </Col>
          <Col className="image">
            <h5 className="heading">Image</h5>
            <div className="image-holder">
              <img
                src={profileImg}
                alt="image"
                id=""
                className="img-responsive"
              />
            </div>
            <input
              type="file"
              name="image-upload"
              id="input"
              accept="image/*"
              onChange={this.imageHandler}
            />
            <div className="label">
              <label htmlFor="input" className="image-upload">
                <FaRegImage />
                Choose Product Image
              </label>
            </div>
          </Col>
        </Row>
        <Row className="button">
          <Button id="btn">Add</Button>
        </Row>
      </Container>
    );
  }
}

export default AddProduct;
