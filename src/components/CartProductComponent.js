import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../assets/images/productImage.png";
import "../css/CartProductComponent.css";

function CartProductComponent(props) {
  return (
    <div>
      <div className="row cartComponentContainer">
        <div className="col-lg-6 productAndNameSection">
          <div className="row">
            <div className="col-lg-4">
              <img src={productImage} className="productImage" />
            </div>
            <div className="col-lg-8">
              <div className="row productName">{props.productName}</div>
              <div className="row removeButtonContainer">
                <button className="removeButton">remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 productQtyContainer">
          <input type="number" className="productQtyInput" />
        </div>
        <div className="col-lg-2 productUnitPriceContainer">
          <div className="productUnitPrice">GHS {" " + props.unitPrice}</div>
        </div>
        <div className="col-lg-2 productSubtotalContainer">
          <div className="productSubtotal">GHS {" " + props.subTotal}</div>
        </div>
      </div>
    </div>
  );
}
export default CartProductComponent;
