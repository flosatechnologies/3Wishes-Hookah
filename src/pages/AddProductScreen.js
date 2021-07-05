/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../css/AddProductScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegImage } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import product from "../assets/images/productImage.png";

import { AddNewProduct } from "../Store/authActions";
import { connect } from "react-redux";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      price: "",
      quantity: "",
      description: "",
      image: product,
      imageTofirestore: { name: "noImage.png" },
    };
  }
  imageHandler = (e) => {
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     this.setState({ profileImg: reader.result });
    //   }
    // };
    // reader.readAsDataURL(e.target.files[0]);
    if (this.state.imageTofirestore === null) {
      alert(" you must choose an image");
    } else {
      if (e.target.files[0]) {
        this.setState({
          image: URL.createObjectURL(e.target.files[0]),
          imageTofirestore: e.target.files[0],
        });
      }
    }
    console.log(e.target.files[0]);
  };

  render() {
    const handleAddProduct = (e) => {
      e.preventDefault();
      let product = this.state.product;
      let price = this.state.price;
      let description = this.state.description;
      let quantity = this.state.quantity;
      var Id = uuid();

      var image = this.state.imageTofirestore;
      console.log(image);

      this.props.AddNewProduct(
        Id,
        product,
        price,
        quantity,
        description,
        image
      );
    };

    const { profileImg } = this.state;
    return (
      <Container className="main-container">
        <Row className="form subContainer">
          <Col className="inputSection">
            {/* <h5>Details</h5> */}
            <label className="labelName">Product Name</label>
            <input
              type="text"
              id="product-name"
              value={this.state.product}
              onChange={(event) => {
                this.setState({ product: event.target.value });
              }}
            />

            <label className="labelName">Product Price GH{"\u20B5"}</label>
            <input
              type="number"
              id="product-price"
              value={this.state.price}
              onChange={(event) => {
                this.setState({ price: event.target.value });
              }}
            />

            <label className="labelName">Product Quantity</label>
            <input
              type="number"
              id="product-quantity"
              value={this.state.quantity}
              onChange={(event) => {
                this.setState({ quantity: event.target.value });
              }}
            />

            <label className="labelName">Product Description</label>
            <textarea
              value={this.state.description}
              onChange={(event) => {
                this.setState({ description: event.target.value });
              }}
            ></textarea>
          </Col>
          <Col className="imageContainer">
            <div className="image-heading">Product Image</div>
            <div className="image-holder">
              <img
                src={this.state.image}
                alt="image"
                // id=""
                className="img-responsive"
              />
            </div>

            <label htmlFor="input" className="image-upload">
              <div className="uploadButton">
                <FaRegImage style={{ marginRight: "10px" }} />
                Select
              </div>
              <input
                type="file"
                required="true"
                name="image-upload"
                id="input"
                accept="image/*"
                onChange={this.imageHandler}
              />
            </label>
          </Col>
        </Row>
        <Row className="addButtonContainer">
          <button onClick={handleAddProduct} className="button">
            Add
          </button>
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
    AddNewProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(AddProduct);
