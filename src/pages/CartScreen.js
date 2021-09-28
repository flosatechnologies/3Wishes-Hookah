import React from "react";
import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ClearCart, getCartProduct } from "../Store/cartActions";
import { Container, Row, Col } from "react-bootstrap";
import {
  getCustomerInfo,
  getOtherCustomerInfo,
} from "../Store/custDetailActions";
import { connect } from "react-redux";
import "../css/CartScreen.css";
import CartProductComponent from "../components/CartProductComponent";

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
    this.props.getCustomerInfo();
    this.props.getOtherCustomerInfo();
  }

  render() {
    var theTotal = this.handleTotal();
    console.log("totale: ", theTotal);

    return (
      <div>
        <HeaderPage />
        <Container className="container background">
          <Row>
            <Col>Cart({this.props.cart.length + " item(s)"})</Col>
          </Row>
          <Row className="cartHeaderSection">
            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className=" itemHeader"
            >
              ITEM
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className=" quantityHeader"
            >
              QTY
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className="col-lg-2 unitPriceHeader"
            >
              UNIT PRICE
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              sm={2}
              xs={2}
              className="col-lg-2 subtotalHeader"
            >
              SUB-TOTAL
            </Col>
          </Row>
          <div>
            {this.props.cart.map((cartProd) => (
              <CartProductComponent
                productName={cartProd.product.product}
                unitPrice={cartProd.product.price}
                subTotal={
                  parseInt(cartProd.product.price) * parseInt(cartProd.qty)
                }
                image={cartProd.product.image}
                qty={cartProd.qty}
                Id={cartProd.product.Id}
              />
            ))}
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
                  to={{
                    pathname: "/checkout",
                    state: {
                      total: theTotal,
                      Info: this.props.allState.customerInfo,
                      products: this.props.cart,
                    },
                  }}
                >
                  Proceed to checkout
                </Link>
              </button>
            </div>
          </div>
        </Container>

        <FooterPage />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.cart.cart);
  return {
    allState: state,
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    ClearCart,
    getCartProduct,
    getCustomerInfo,
    getOtherCustomerInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartScreen);
