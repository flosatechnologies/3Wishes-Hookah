import React from "react";
import Footer from "../components/FooterComponent";
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
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>Cart - 3Wishesgh</title>
          <meta name="description" content="3Wishes Hookah Cart" />
        </Helmet>
        <Container className=" background">
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
          <Row className=" theTotalSection">
            <Col
              xxl={{ span: 2, offset: 8 }}
              xl={{ span: 2, offset: 8 }}
              lg={{ span: 2, offset: 8 }}
              md={{ span: 2, offset: 8 }}
              sm={{ span: 2, offset: 7 }}
              xs={{ span: 2, offset: 7 }}
              className=" theTotalText"
            >
              Total:
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              s={3}
              xs={3}
              className="theTotalAmount"
            >
              {"GHS " + this.handleTotal()}
            </Col>
          </Row>
          <Row className=" bottomSection">
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              s={2}
              xs={2}
              className="shoppingButtonContainer"
            >
              <button
                onClick={() => {
                  this.props.ClearCart();
                }}
                className="shoppingButton"
              >
                clear cart
              </button>
            </Col>

            <Col
              xxl={{ span: 2, offset: 5 }}
              xl={{ span: 2, offset: 5 }}
              lg={{ span: 2, offset: 5 }}
              md={{ span: 2, offset: 5 }}
              sm={{ span: 2, offset: 5 }}
              xs={{ span: 2, offset: 5 }}
              className=" shoppingButtonContainer-continue"
            >
              <button onClick={() => {}} className="shoppingButton-continue">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/shop"}
                >
                  Continue shopping
                </Link>
              </button>
            </Col>
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={3}
              s={3}
              xs={3}
              className=" checkoutButtonContainer"
            >
              <button className="checkoutButton">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={{
                    pathname: "/checkout",
                    state: {
                      total: theTotal,
                      Info: this.props.allState.customerInfo,
                      products: this.props.cart,
                      thePath: "cartscreen",
                    },
                  }}
                >
                  Proceed to checkout
                </Link>
              </button>
            </Col>
          </Row>
        </Container>

        <Footer />
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
