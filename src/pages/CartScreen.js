import React from "react";
import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  quantityIncrease,
  quantityDecrease,
  removeProduct,
  ClearCart,
} from "../Store/cartActions";
import { connect } from "react-redux";
import "../css/CartScreen.css";
import CartProductComponent from "../components/CartProductComponent";
import { BsFillDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";

class CartScreen extends React.Component {
  total = 0;
  constructor(props) {
    super(props);
    this.state = {
      cartProduct: [],
      update: "",
    };
  }

  handleTotal = () => {
    var total = 0;
    for (let i = 0; i <= this.props.cart.length - 1; i++) {
      total =
        total +
        parseInt(this.props.cart[i].product.price) * this.props.cart[i].qty;
      console.log(total);
    }

    return total;
  };

  // static getDerivedStateFromProps(props, state) {
  //   return { cartProduct: props.cart };
  // }
  componentDidMount() {
    this.setState({ cartProduct: this.props.cart });
  }

  handleRerender = (data) => {
    this.setState({ update: data, cartProduct: this.props.cart });
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
                  subTotal={
                    parseInt(cartProd.product.price) * parseInt(cartProd.qty)
                  }
                  rerender={(data) => this.handleRerender(data)}
                  image={cartProd.product.image}
                  qty={cartProd.qty}
                  Id={cartProd.product.Id}
                />
              )))
            }
          </div>
          <div className="row theTotalSection">
            <div className="col-9"></div>
            <div className="col-lg-1 theTotalText">Total: </div>
            <div className="col-lg-2 theTotalAmount">
              {"GHS " + this.handleTotal()}
            </div>
          </div>
          <div className="row bottomSection">
            <div className="col-lg-2 shoppingButtonContainer">
              <button
                onClick={() => {
                  this.props.ClearCart();
                }}
                className="shoppingButton"
              >
                clear cart
              </button>
            </div>
            <div className="col-lg-6"></div>
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
  return { quantityDecrease, quantityIncrease, removeProduct, ClearCart };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartScreen);
