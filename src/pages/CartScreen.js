import React from "react";
import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import div from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

import "../css/CartScreen.css";
import CartProductComponent from "../components/CartProductComponent";

class CartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  handleTotal = () => {
    var total;
    for (let i = 0; i < this.props.cart.length - 1; i++) {
      total = total + Number(this.props.cart[i].product.price);
    }

    return total;
  };

  render() {
    return (
      <div>
        <HeaderPage />
        <div className="container background">
          <div className="row">
            <div>Cart({this.props.cart.length + " item(s)"})</div>
          </div>
          <div className="row cartHeaderSection">
            <div className="col-lg-6 itemHeader">ITEM</div>
            <div className="col-lg-2 quantityHeader">QUANTITY</div>
            <div className="col-lg-2 unitPriceHeader">UNIT PRICE</div>
            <div className="col-lg-2 subtotalHeader">SUB-TOTAL</div>
          </div>
          <div>
            {
              (console.log("cartProducts: ", this.props.cart),
              this.props.cart.map((cartProd) => (
                <CartProductComponent
                  productName={cartProd.product.product}
                  unitPrice={cartProd.product.price}
                  subTotal={cartProd.product.price}
                  image={cartProd.product.image}
                  qty={cartProd.qty}
                />
              )))
            }
            {/* <CartProductComponent
              productName="iPhone 11 Pro 256GB ROM, 10GB RAM, 48MP"
              unitPrice="70"
              subTotal="70"
            />
  
            <CartProductComponent
              productName="iPhone 11 Pro 256GB Memory"
              unitPrice="70"
              subTotal="70"
            />
  
            <CartProductComponent
              productName="iPhone 11 Pro 256GB Memory"
              unitPrice="70"
              subTotal="70"
            /> */}
          </div>
          <div className="row theTotalSection">
            <div className="col-9"></div>
            <div className="col-lg-1 theTotalText">Total: </div>
            <div className="col-lg-2 theTotalAmount">
              {(this.handleTotal(), console.log("total: ", this.handleTotal()))}
            </div>
          </div>
          <div className="row bottomSection">
            <div className="col-lg-8"></div>
            <div className="col-lg-2 shoppingButtonContainer">
              <button onClick={() => {}} className="shoppingButton">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/shop"}
                >
                  Continue shopping
                </Link>
              </button>
            </div>
            <div className="col-lg-2 checkoutButtonContainer">
              <button className="checkoutButton">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/checkout"}
                >
                  Proceed to checkout
                </Link>
              </button>
            </div>
          </div>
        </div>

        <FooterPage />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.cart.cart);
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(CartScreen);
