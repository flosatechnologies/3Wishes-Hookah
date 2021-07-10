import React, { Component } from "react";
import image1 from "../assets/images/airpods.jpg";
import "../css/productComponentDashboard.css";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { EditProduct, DeleteProduct } from "../Store/authActions";
import { v4 as uuid } from "uuid";

import { connect } from "react-redux";
import { deleteProduct } from "./../Store/authActions";

class ProductComponentDashboard extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dashboardProductContainer">
        <div className="dashboardProductImageContainer">
          <img
            className="dashboardProductImage"
            src={image1}
            alt="productImage"
          />
        </div>

        <div className="nameAndPriceContainer">
          <div className="dashboardProductName">{this.props.productName}</div>

          <div className="dashboardProductPrice">
            GH{"\u20B5"} {this.props.price}
          </div>
        </div>
        <div className="editAndDeleteButtonContainer">
          <div>
            <button
              onClick={() => this.props.activatebtn("activebtn")}
              className="editButton"
            >
              <MdEdit />
            </button>
          </div>
          <div>
            <button onClick={this.deleteProduct} className="deleteButton">
              <MdDelete />
              delete
            </button>
          </div>
        </div>
      </div>
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
