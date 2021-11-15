import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

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
  }

  handleIncreaseQuantity = () => {
    this.props.quantityIncrease(this.props.Id);
  };

  handleDecreaseQuantity = () => {
    this.props.quantityDecrease(this.props.Id);
  };
  handleRemoveProduct = () => {
    this.props.removeProduct(this.props.Id);
  };

  render() {
    return (
      <div>
        <Row className="cartComponentContainer">
          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="productAndNameSection"
          >
            <Row>
              <Col
                xxl={2}
                xl={2}
                lg={2}
                md={2}
                sm={2}
                xs={2}
                className=" productImageBox"
              >
                <img src={this.props.image} alt="" className="productImage" />
              </Col>
              <Col
                xxl={{ span: 8, offset: 2 }}
                xl={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                md={{ span: 8, offset: 2 }}
                sm={{ span: 8, offset: 2 }}
                xs={{ span: 8, offset: 2 }}
                className="productNameBox"
              >
                <Row className="productName">
                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    {this.props.productName}
                  </Col>
                </Row>
                <Row className="removeButtonContainer">
                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <button
                      onClick={this.handleRemoveProduct}
                      className="removeButton"
                    >
                      remove
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className=" productQtyContainer"
          >
            <Row className="decrementBtnContainer">
              <button
                onClick={this.handleIncreaseQuantity}
                className="incrementBtn"
              >
                <BsFillPlusCircleFill />
              </button>
            </Row>
            <Row className="productQtyInputContainer">
              <input
                type="text"
                className="productQuantityInput"
                name="qty"
                pattern="[0-9]"
                onChange={this.handleChange}
                value={this.props.qty}
              />
            </Row>
            <Row className="incrementBtnContainer">
              <button
                onClick={this.handleDecreaseQuantity}
                className="decrementBtn"
              >
                <BsFillDashCircleFill />
              </button>
            </Row>
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className=" productUnitPriceContainer"
          >
            <div className="productUnitPrice">
              GHS {" " + this.props.unitPrice}
            </div>
          </Col>
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className=" productSubtotalContainer"
          >
            <div className="productSubtotal">
              GHS {" " + this.props.subTotal}
            </div>
          </Col>
        </Row>
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
