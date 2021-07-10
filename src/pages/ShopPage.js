import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../pages/Product";
import products from "../products";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddNewProduct, getAllProducts } from "../Store/authActions";
import { connect } from "react-redux";

// import HeaderPage from "../components/HeaderPage";
// import FooterPage from "../components/FooterPage";

class ShopPage extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <div>
        {/*<HeaderPage />*/}
        <div className="container">
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
        {/*<FooterPage />*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    AddNewProduct,
    getAllProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShopPage);
