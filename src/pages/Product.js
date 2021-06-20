import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Product.css";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" className="img" />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="h4">
            GH{"\u20B5"} {product.price}
          </Card.Text>
          <Button
            variant="primary"
            className="w-75 text-capitalize text-nowrap ml-2 px-2 "
          >
            Add To cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
