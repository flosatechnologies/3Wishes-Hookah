import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../assets/images/productImage.png";
import "../css/CartProductComponent.css";

class CartProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
    };
  }

  render() {
    return (
      <div>
        <div className="row cartComponentContainer">
          <div className="col-lg-6 productAndNameSection">
            <div className="row">
              <div className="col-lg-4 productImageBox">
                <img src={this.props.image} className="productImage" />
              </div>
              <div className="col-lg-8 productNameBox">
                <div className="row productName">{this.props.productName}</div>
                <div className="row removeButtonContainer">
                  <button className="removeButton">remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 productQtyContainer">
            <input
              type="number"
              className="productQtyInput"
              value={this.state.qty}
            />
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
export default CartProductComponent;
