import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/CartProductComponent.css";
import { connect } from "react-redux";
import {
  quantityIncrease,
  quantityDecrease,
  removeProduct,
} from "../Store/cartActions";
import { BsFillDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";

class CartProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
      productId: this.props.Id,
    };
  }

  handleIncreaseQuantity = () => {
    // let theqty = parseInt(this.state.qty)
    this.props.quantityIncrease(this.state.productId);
    this.props.rerender("rerender");
  };

  handleDecreaseQuantity = () => {
    // let theqty = parseInt(this.state.qty) + 1;
    this.props.quantityDecrease(this.state.productId);
    this.props.rerender("rerender");
  };
  handleRemoveProduct = () => {
    // let theqty = parseInt(this.state.qty) + 1;
    this.props.removeProduct(this.state.productId);
    this.props.rerender("removing");
  };

  render() {
    return (
      <div>
        <div className="row cartComponentContainer">
          <div className="col-lg-6 productAndNameSection">
            <div className="row">
              <div className="col-lg-4 productImageBox">
                <img src={this.props.image} alt="" className="productImage" />
              </div>
              <div className="col-lg-8 productNameBox">
                <div className="row productName">{this.props.productName} </div>
                <div className="row removeButtonContainer">
                  <button
                    onClick={this.handleRemoveProduct}
                    className="removeButton"
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 productQtyContainer">
            <div className="prodQtyContainer">
              <div className="incrementBtnContainer">
                <button
                  onClick={this.handleDecreaseQuantity}
                  className="decrementBtn"
                >
                  <BsFillDashCircleFill />
                </button>
              </div>
              <div>
                <input
                  type="text"
                  className="productQtyInput"
                  name="qty"
                  pattern="[0-9]"
                  onChange={this.handleChange}
                  value={this.props.qty}
                />
              </div>
              <div className="decrementBtnContainer">
                <button
                  onClick={this.handleIncreaseQuantity}
                  className="incrementBtn"
                >
                  <BsFillPlusCircleFill />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 productUnitPriceContainer">
            <div className="productUnitPrice">
              GHS {" " + this.props.unitPrice}
            </div>
          </div>
          <div className="col-lg-2 productSubtotalContainer">
            <div className="productSubtotal">
              GHS {" " + this.props.subTotal}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    quantityDecrease,
    quantityIncrease,
    removeProduct,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CartProductComponent);
