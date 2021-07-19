import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Product.css";
import { FaCartPlus } from "react-icons/fa";
import { AddToCart } from "../Store/authActions";
import { connect } from "react-redux";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_Id: this.props.Id,
      storeProducts: this.props.theProducts,
    };
  }

  handleAddToCart = () => {
    const filtered = this.state.storeProducts.filter(
      (prod) => prod.Id === this.state.product_Id
    );

    const theFiltered = filtered[0];
    console.log("filteredProduct:", theFiltered);
    this.props.AddToCart(theFiltered, 1);
  };
  render() {
    return (
      <div className="shopPageProductContainer">
        <div className="shopPageProductImageBox">
          <img src={this.props.image} className="productImageShopPage" />
        </div>
        <div className="productNameShopPage">{this.props.name}</div>
        <div className="priceAndProductBox">
          <div className="priceText">
            GH{"\u20B5 "}
            {this.props.price}
          </div>
          <div className="addToCartButtonBox">
            <button
              onClick={() => {
                this.handleAddToCart();
              }}
              className="addToCartButtonShopPage"
            >
              <FaCartPlus style={{ margin: "0px 10px", color: "#007bff" }} />
            </button>
            {console.log(this.state.product_Id)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("cart:", state.users.cart);
  return {};
};
const mapDispatchToProps = () => {
  return {
    AddToCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Product);
