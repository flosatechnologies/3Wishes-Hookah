import React, { Component } from "react";
import "../css/productComponentDashboard.css";
import { MdEdit, MdDelete } from "react-icons/md";
import { EditProduct, DeleteProduct } from "../Store/productActions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

class ProductComponentDashboard extends Component {
  render() {
    return (
      <Container fluid={true} className="dashboardProductContainer">
        <Row className="dashboardProductImageContainer">
          <img
            className="dashboardProductImage"
            src={this.props.image}
            alt="productImage"
          />
        </Row>
        <Row>
          <Col className="nameAndPriceContainer">
            <Row className="dashboardProductName">{this.props.productName}</Row>

            <Row className="dashboardProductPrice">
              GH{"\u20B5"} {this.props.price}
            </Row>
          </Col>
        </Row>
        <Row className="editAndDeleteButtonContainer">
          <Col className="editButtonContainer">
            <button
              onClick={() => {
                this.props.activatebtn("activebtn", "edit");
                this.props.selectedId(this.props.Id);
                // this.handleProductFilter();
              }}
              className="editButton"
            >
              <MdEdit />
              edit
            </button>
          </Col>
          <Col className="deleteButtonContainer">
            <button
              onClick={() => {
                this.props.activatebtn("activebtn", "del");
                this.props.selectedId(this.props.Id);
                // this.handleProductFilter();
              }}
              className="deleteButton"
            >
              <MdDelete />
              delete
            </button>
          </Col>
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
    DeleteProduct,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductComponentDashboard);
