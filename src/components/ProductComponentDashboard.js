import React from "react";
import image1 from "../assets/images/airpods.jpg";
import "../css/productComponentDashboard.css";
import { MdEdit, MdDelete } from "react-icons/md";

function ProductComponentDashboard(props) {
  return (
    <div className="dashboardProductContainer">
      <div className="dashboardProductImageContainer">
        <img
          className="dashboardProductImage"
          src={image1}
          alt="productImage"
        />
      </div>

      <div className="nameAndPriceContainer">
        <div className="dashboardProductName">{props.productName}</div>

        <div className="dashboardProductPrice">
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
