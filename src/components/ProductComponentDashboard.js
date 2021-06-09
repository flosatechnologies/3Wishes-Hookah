import React from "react";
import image1 from "../assets/images/airpods.jpg";
import "../css/productComponentDashboard.css";
import { MdEdit, MdDelete } from "react-icons/md";

function ProductComponentDashboard(props) {
  return (
    <div className="productContainer">
      <div className="productImageContainer">
        <img className="productImage" src={image1} alt="productImage" />
      </div>

      <div className="nameAndPriceContainer">
        <div className="productName">{props.productName}</div>

        <div className="productPrice">
          GH{"\u20B5"} {props.price}
        </div>
      </div>
      <div className="editAndDeleteButtonContainer">
        <div>
          <button className="editButton">
            <MdEdit /> edit
          </button>
        </div>
        <div>
          <button className="deleteButton">
            <MdDelete />
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductComponentDashboard;
