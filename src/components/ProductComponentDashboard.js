import React, { Component } from "react";
import "../css/productComponentDashboard.css";
import { MdEdit, MdDelete } from "react-icons/md";
import { EditProduct, DeleteProduct } from "../Store/productActions";
import { connect } from "react-redux";

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
          </div>
          <div>
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
