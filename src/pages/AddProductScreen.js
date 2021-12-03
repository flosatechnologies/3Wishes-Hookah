/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../css/AddProductScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegImage } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import product from "../assets/images/productImage.png";
import { AddNewProduct } from "../Store/productActions";
import { connect } from "react-redux";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      price: "",
      quantity: "",
      group: "regular",
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
      let group = this.state.group;
      let quantity = this.state.quantity;
      var Id = uuid();

      var image = this.state.imageTofirestore;
      console.log(image);

      this.props.AddNewProduct(
        Id,
        product,
        price,
        quantity,
        group,
        description,
        image
      );

      console.log("group ", group);
      console.log("description ", description);
    };

    return (
      <Container className="main-container">
        <Row className="form subContainer">
          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="inputSection"
          >
            <Form>
              <Form.Group className="labelAndInputContainerProductAdd">
                <Form.Label className="labelName">Product Name</Form.Label>
                <Form.Control
                  type="text"
                  id="product-name"
                  className="inputAddProduct"
                  value={this.state.product}
                  onChange={(event) => {
                    this.setState({ product: event.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="labelAndInputContainerProductAdd">
                <Form.Label className="labelName">
                  Product Price GH{"\u20B5"}
                </Form.Label>
                <Form.Control
                  type="number"
                  id="product-price"
                  className="inputAddProduct"
                  value={this.state.price}
                  onChange={(event) => {
                    this.setState({ price: event.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="labelAndInputContainerProductAdd">
                <Form.Label className="labelName">Product Quantity</Form.Label>
                <Form.Control
                  type="number"
                  id="product-quantity"
                  className="inputAddProduct"
                  value={this.state.quantity}
                  onChange={(event) => {
                    this.setState({ quantity: event.target.value });
                  }}
                />
              </Form.Group>

              <Form.Group className="labelAndInputContainerProductAdd">
                <Form.Label className="labelName">Product Group</Form.Label>
                <div>
                  <select
                    value={this.state.group}
                    className="productGroupSelect"
                    required
                    id="product-group"
                    onChange={(event) => {
                      this.setState({ group: event.target.value });
                    }}
                  >
                    <option value="subscription">subscription</option>
                    <option value="regular">regular</option>
                  </select>
                </div>
              </Form.Group>
              <Form.Group className="labelAndInputContainerProductAdd">
                <Form.Label className="labelName">
                  Product Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="inputAddProduct"
                  value={this.state.description}
                  onChange={(event) => {
                    this.setState({ description: event.target.value });
                  }}
                />
              </Form.Group>
            </Form>
          </Col>

          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="imageContainer"
          >
            <div className="image-heading">Product Image</div>
            <div className="image-holder">
              <img
                src={this.state.image}
                alt="image"
                className="img-responsive"
              />
            </div>

            <Form.Label htmlFor="input" className="image-upload">
              <div className="uploadButton">
                <FaRegImage style={{ marginRight: "10px" }} />
                Select
              </div>
              <Form.Control
                type="file"
                required="true"
                name="image-upload"
                id="input"
                accept="image/*"
                onChange={this.imageHandler}
              />
            </Form.Label>
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
