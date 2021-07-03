import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../pages/Product";
import products from "../products";
import "bootstrap/dist/css/bootstrap.min.css";
// import HeaderPage from "../components/HeaderPage";
// import FooterPage from "../components/FooterPage";

function ShopPage() {
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

export default ShopPage;
