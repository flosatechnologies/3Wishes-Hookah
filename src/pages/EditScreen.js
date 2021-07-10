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
      imageTofirestore: { name: "noImage.png" },
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJfdSVJ3Vi3Q_8wVTsa8lE6foFVOOFXiapNJB6SORmxKLOCi9hN1QgGO8saCXqfUhmkU&usqp=CAU",
    };
  }

  // componentDidMount() {
  //   console.log("mounted");
  // }

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
    const handleEditProduct = (e) => {
      e.preventDefault();
      let name = this.state.name;
      let price = this.state.price;
      let description = this.state.description;
      let quantity = this.state.quantity;
      var Id = uuid();

      var image = this.state.imageTofirestore;
      console.log(image);

      this.props.EditProduct(Id, name, price, quantity, description, image);
    };

    const { profileImg } = this.state;
    return (
      <Container className="container-fluid editContainer">
        <Row className="product-row">
          <Col className="image-section">
            {/* <ProductComponentDashboard productName="Airpods" price="1200" /> */}

            <div className="image-heading">Product Image</div>
            <div className="image-holder">
              <img
                src={this.state.profileImg}
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
                Select
              </label>
            </div>
          </Col>
          <Col className="form-input">
            {/* <div className="col"> */}
            <label className="editLabel" id="name">
              Product Name
            </label>
            <input type="text" id="pname" className="editInput" />

            <label className="editLabel" id="price">
              Product Price GH{"\u20B5"}
            </label>
            <input type="number" className="editInput" />

            <label className="editLabel" id="quality">
              Product Quantity
            </label>
            <input type="number" className="editInput" />

            <label className="editLabel" id="description">
              Product Description
            </label>
            <textarea className="editInput"></textarea>

            {/* <Button id="btn-btn">Cancel</Button> */}
            {/* </div> */}
          </Col>
        </Row>
        <Row className="addButtonContainer">
          <Button onClick={handleEditProduct} id="btn">
            update
          </Button>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = () => {
  return {
    EditProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Edit);
