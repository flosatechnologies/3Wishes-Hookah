import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Product.css";
import { FaCartPlus } from "react-icons/fa";

const Product = (props) => {
  return (
    <div className="shopPageProductContainer">
      <div className="shopPageProductImageBox">
        <img src={props.image} className="productImageShopPage" />
      </div>
      <div className="productNameShopPage">{props.name}</div>
      <div className="priceAndProductBox">
        <div className="priceText">
          GH{"\u20B5 "}
          {props.price}
        </div>
        <div className="addToCartButtonBox">
          <button className="addToCartButtonShopPage">
            <FaCartPlus style={{ margin: "0px 10px", color: "#007bff" }} />
          </button>
        </div>
      </div>
      {/* <Card className="my-3 p-3 rounded shopPageProductBox">
        <Card.Img
          src={product.image}
          variant="top"
          className="productImageShopPage"
        />

        <Card.Body>
          <Card.Title as="div" className="">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="div">
            GH{"\u20B5"} {product.price}
          </Card.Text>
          <Button
            variant="primary"
            className="w-75 text-capitalize text-nowrap ml-2 px-2 "
          >
            Add To cart
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Product;
