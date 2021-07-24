import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../assets/images/productImage.png";
import "../css/CartProductComponent.css";
import { connect } from "react-redux";
import { changeQuantity } from "../Store/cartActions";

class CartProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
      productId: this.props.Id,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    let theqty = parseInt(this.state.qty) + 1;
    this.props.changeQuantity(theqty, this.state.productId);
  };

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
              min={1}
              className="productQtyInput"
              name="qty"
              onChange={this.handleChange}
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    changeQuantity,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CartProductComponent);
