import React from "react";
import "../css/Product.css";
import { FaCartPlus } from "react-icons/fa";
import { AddToCart } from "../Store/cartActions";
import { connect } from "react-redux";
import { Container, Col, Row, Image } from "react-bootstrap";

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
      <div>
        <Container className="shopPageProductContainer">
          <Row className="shopPageProductImageBox">
            <Image
              src={this.props.image}
              alt="productImage"
              className="productImageShopPage"
            />
          </Row>

          <Row>
            <div className="productNameShopPage">{this.props.name}</div>
          </Row>

          <Row className="priceAndProductBox">
            <Col lg={8} xl={8} md={8} sm={8} xs={8} className="priceText">
              GH{"\u20B5 "}
              {this.props.price}
            </Col>
            <Col
              lg={4}
              xl={4}
              md={4}
              sm={4}
              xs={4}
              className="addToCartButtonBox"
            >
              <button
                onClick={() => {
                  this.handleAddToCart();
                }}
                className="addToCartButtonShopPage"
              >
                <FaCartPlus style={{ margin: "0px 10px", color: "#007bff" }} />
              </button>
              {console.log(this.state.product_Id)}
            </Col>
          </Row>
        </Container>
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
