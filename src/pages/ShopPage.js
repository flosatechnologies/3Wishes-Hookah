import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../pages/Product";
import products from "../products";

function ShopPage() {
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ShopPage;
