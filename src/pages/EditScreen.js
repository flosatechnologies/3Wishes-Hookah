import React, { Component } from "react";
import "../css/EditScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegImage } from "react-icons/fa";
import { EditProduct, EditTextOnly } from "../Store/productActions";
import firebase from "../firebase/config";

import { connect } from "react-redux";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      group: "",
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
      group: specificProduct[0].group,
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
        this.state.group,
        this.state.description,
        this.state.refFile
      );
    } else {
      this.props.EditProduct(
        this.state.productId,
        this.state.name,
        this.state.price,
        this.state.quantity,
        this.state.group,
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
      <Container fluid={true} className="editContainer">
        <Row className="product-row">
          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="image-section"
          >
            <div className="image-heading">Product Image</div>
            <div className="productImageSection-EditProduct">
              <div className="image-holder">
                <img
                  src={this.state.profileImg}
                  alt="profileImage"
                  className="img-responsive"
                />
              </div>

              <div className="selectImgBtnContainer-EditProduct">
                <label htmlFor="input-editProduct" className="image-upload">
                  <div className="selectImg-EditProduct">
                    <FaRegImage style={{ marginRight: "8px" }} />
                    select
                  </div>
                  <Form.Control
                    type="file"
                    name="image-upload"
                    id="input-editProduct"
                    accept="image/*"
                    onChange={this.imageHandler}
                  />
                </label>
              </div>
            </div>
          </Col>
          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="form-input"
          >
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="editLabel" id="name">
                    Product Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="pname"
                    name="name"
                    className="editInput"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="editLabel" id="price">
                    Product Price GH{"\u20B5"}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    className="editInput"
                    value={Number(this.state.price)}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="editLabel" id="quality">
                  Product Quantity
                </Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  className="editInput"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="editLabel" id="group">
                  Product Group
                </Form.Label>
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
                    <option value="subscribtion">subscribtion</option>
                    <option value="regular">regular</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="editLabel" id="description">
                  Product Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="editInput"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.handleUpdateProduct}>update</Button>
          </Col>
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
