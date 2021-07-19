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
import { EditProduct } from "../Store/authActions";

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
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJfdSVJ3Vi3Q_8wVTsa8lE6foFVOOFXiapNJB6SORmxKLOCi9hN1QgGO8saCXqfUhmkU&usqp=CAU",
    };
  }
  handleFilter = () => {
    let specificProduct = "name";

    specificProduct = this.props.products.filter(
      (product) => product.Id === this.state.productId
    );
    console.log(specificProduct, "code");
    console.log("price", specificProduct[0].price);
    this.setState({
      name: specificProduct[0].product,
      price: specificProduct[0].price,
      profileImg: specificProduct[0].image,
      quantity: specificProduct[0].quantity,
      description: specificProduct[0].description,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpdateProduct = () => {
    this.props.EditProduct(
      this.state.productId,
      this.state.name,
      this.state.price,
      this.state.quantity,
      this.state.description,
      this.state.imageToFirestore
    );
  };

  componentDidMount() {
    this.handleFilter();
  }

  // imageHandler = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       this.setState({ profileImg: reader.result });
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };
  imageHandler = (e) => {
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     this.setState({ profileImg: reader.result });
    //   }
    // };
    // reader.readAsDataURL(e.target.files[0]);
    if (this.state.imageToFirestore === null) {
      alert(" you must choose an image");
    } else {
      if (e.target.files[0]) {
        this.setState({
          profileImg: URL.createObjectURL(e.target.files[0]),
          imageToFirestore: e.target.files[0],
        });
      }
    }
    console.log(e.target.files[0]);
  };

  render() {
    const { profileImg } = this.state;

    return (
      <Container className="container-fluid editContainer">
        <Row className="product-row">
          <Col className="image-section">
            {/* <ProductComponentDashboard productName="Airpods" price="1200" /> */}

            <div className="image-heading">Product Image</div>
            <div className="image-holder">
              <img
                src={this.state.image}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Edit);
