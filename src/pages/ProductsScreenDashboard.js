import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/productsScreenDashboard.css";
import AddProduct from "./AddProductScreen.js";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";
import ProductComponentDashboard from "../components/ProductComponentDashboard";
import { connect } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import { getAllProducts } from "../Store/authActions.js";

class ProductsScreenDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        addProduct: "inactivebtn",
      },
    };
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    console.log("productsStore ", this.props.products);
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
          <div className="container arrayOfProducts">
            <div className="row">
              {this.props.products.map((products) => {
                return (
                  <ProductComponentDashboard
                    productName={products.product}
                    price={products.price}
                    image={products.image}
                  />
                );
              })}
            </div>
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
          <div className="col-lg-10 backButtonContainer">
            <button
              onClick={() => {
                this.setState({ button: { addProduct: "inactivebtn" } });
              }}
              className="backButton"
              // id={this.state.button.addProduct}
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </div>
        </div>

        <div className="productsContainer">{handleRenderScreen()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.users.products,
  };
};

const mapDispatchToProps = () => {
  return {
    getAllProducts,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(ProductsScreenDashboard);
