import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/productsScreenDashboard.css";
import AddProduct from "./AddProductScreen.js";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";
import ProductComponentDashboard from "../components/ProductComponentDashboard";
import EditProductScreen from "./EditProductScreen";

class ProductsScreenDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        addProduct: "inactivebtn",
        editProduct: "inactivebtn",
      },
    };
  }
  render() {
    const handleRenderScreen = () => {
      if (this.state.button.addProduct === "activebtn") {
        return (
          <div>
            <AddProduct />
          </div>
        );
      }

      if (this.state.button.addProduct === "inactivebtn") {
        return (
          <div className="arrayOfProducts">
            <ProductComponentDashboard productName="Airpods" price="1200" />
            <ProductComponentDashboard productName="Airpods" price="1200" />
            <ProductComponentDashboard productName="Airpods" price="1200" />
            <ProductComponentDashboard productName="Airpods" price="1200" />
            <ProductComponentDashboard productName="Airpods" price="1200" />
          </div>
        );
      }
    };
    return (
      <div className="container">
        <div className="row filterSection">
          <div className="col-lg-2">
            <button
              onClick={() => {
                this.setState({ button: { addProduct: "activebtn" } });
              }}
              className="addProductButton"
              id={this.state.button.addProduct}
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="productsContainer">{handleRenderScreen()}</div>
      </div>
    );
  }
}

export default ProductsScreenDashboard;
