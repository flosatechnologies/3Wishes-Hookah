import React, { Component } from "react";
import "../css/productComponentDashboard.css";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { EditProduct, DeleteProduct } from "../Store/authActions";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import image1 from "../assets/images/productImage.png";
// import { deleteProduct } from "./../Store/authActions";

// function ProductComponentDashboard(props) {
//   return (
//     <div className="dashboardProductContainer">
//       <div className="dashboardProductImageContainer">
//         <img
//           className="dashboardProductImage"
//           src={props.image}
//           alt="productImage"
//         />
//       </div>

//       <div className="nameAndPriceContainer">
//         <div className="dashboardProductName">{props.productName}</div>

class ProductComponentDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dashboardProductContainer">
        <div className="dashboardProductImageContainer">
          <img
            className="dashboardProductImage"
            src={this.props.image}
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
              edit
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
