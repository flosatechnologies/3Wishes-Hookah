import React, { Component } from "react";
import "../css/EditScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductComponentDashboard from "../components/ProductComponentDashboard";
import { FaRegImage } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { EditProduct, EditTextOnly } from "../Store/authActions";
import firebase from "../firebase/config";

import { connect } from "react-redux";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      description: "",
      productId: this.props.Id,
      specificProduct: "",
      imageToFirestore: { name: "noImage.png" },
      profileImg: "",
      refFile: "",
    };

    this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
  }
  handleFilter = () => {
    let specificProduct = "name";

    specificProduct = this.props.products.filter(
      (product) => product.Id === this.state.productId
    );

    console.log(specificProduct, "code");

    this.setState({
      name: specificProduct[0].product,
      price: specificProduct[0].price,
      profileImg: specificProduct[0].image,
      refFile: specificProduct[0].image,
      quantity: specificProduct[0].quantity,
      description: specificProduct[0].description,
      imageToFirestore: { name: "notImage.png" },
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdateProduct = () => {
    let storageref = firebase.storage().refFromURL(this.state.refFile);
    console.log("ref: ", storageref.name);
    let selectedRef = this.state.imageToFirestore;

    console.log("selectedImgName: ", selectedRef.name);
    if (selectedRef.name === "notImage.png") {
      this.props.EditTextOnly(
        this.state.productId,
        this.state.name,
        this.state.price,
        this.state.quantity,
        this.state.description,
        this.state.refFile
      );
    } else {
      this.props.EditProduct(
        this.state.productId,
        this.state.name,
        this.state.price,
        this.state.quantity,
        this.state.description,
        this.state.imageToFirestore,
        storageref.name
      );
    }
  };

  componentDidMount() {
    this.handleFilter();
  }

  imageHandler = (e) => {
    if (e.target.files[0]) {
      this.setState({
        profileImg: URL.createObjectURL(e.target.files[0]),
        imageToFirestore: e.target.files[0],
      });
    }

    console.log(e.target.files[0]);
  };

  render() {
    return (
      <Container className="container-fluid editContainer">
        <Row className="product-row">
          <Col className="image-section">
            <div className="image-heading">Product Image</div>
            <div className="image-holder">
              <img
                src={this.state.profileImg}
                alt="image"
                // id=""
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
                Select
              </label>
            </div>
          </Col>
          <Col className="form-input">
            {/* <div className="col"> */}

            <label className="editLabel" id="name">
              Product Name
            </label>
            <input
              type="text"
              id="pname"
              name="name"
              className="editInput"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <label className="editLabel" id="price">
              Product Price GH{"\u20B5"}
            </label>
            <input
              type="number"
              name="price"
              className="editInput"
              value={Number(this.state.price)}
              onChange={this.handleChange}
            />

            <label className="editLabel" id="quality">
              Product Quantity
            </label>
            <input
              type="number"
              name="quantity"
              className="editInput"
              value={this.state.quantity}
              onChange={this.handleChange}
            />

            <label className="editLabel" id="description">
              Product Description
            </label>
            <textarea
              className="editInput"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>

            {/* <Button id="btn-btn">Cancel</Button> */}
            {/* </div> */}
          </Col>
        </Row>
        <Row className="addButtonContainer">
          <Button onClick={this.handleUpdateProduct} id="btn">
            update
          </Button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = () => {
  return {
    EditProduct,
    EditTextOnly,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Edit);
