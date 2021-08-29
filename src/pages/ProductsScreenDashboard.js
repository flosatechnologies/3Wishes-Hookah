import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/productsScreenDashboard.css";
import AddProduct from "./AddProductScreen.js";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";
import ProductComponentDashboard from "../components/ProductComponentDashboard";
import Edit from "./EditScreen";
import { connect } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import firebase from "../firebase/config";
import { DeleteProduct } from "../Store/productActions.js";

class ProductsScreenDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        addProduct: "inactivebtn",
        editProduct: "inactivebtn",
        deleteProduct: "inactivebtn",
      },

      editId: "",

      storeProducts: this.props.reduxData,
    };
  }

  handleButtonState = (trigger, btn) => {
    if (btn === "edit") {
      this.setState({
        button: {
          addProduct: "inactivebtn",
          editProduct: trigger,
          deleteProduct: "inactivebtn",
        },
      });
    } else if (btn === "del") {
      this.setState({
        button: {
          addProduct: "inactivebtn",
          editProduct: "inactivebtn",
          deleteProduct: trigger,
        },
      });
    }
  };

  handleEditId = (Id) => {
    this.setState({ editId: Id });
  };

  handleDeleteProduct = () => {
    const productToDelete = this.state.storeProducts.filter(
      (delprod) => delprod.Id === this.state.editId
    );

    console.log("filteredDelete: ", productToDelete[0]);
    let imageName = firebase.storage().refFromURL(productToDelete[0].image);

    this.props.DeleteProduct(this.state.editId, imageName.name);
  };

  render() {
    const handleRenderScreen = () => {
      if (this.state.button.addProduct === "activebtn") {
        return (
          <div>
            <AddProduct />
          </div>
        );
      }

      if (this.state.button.deleteProduct === "activebtn") {
        return (
          /*BEGINING OF DELETE CONFIRMATION DIALOGUE BOX */
          <div className="dialogBoxMainContainer">
            <div className="dialogBoxContainer">
              <div className=" headerContainer">CONFIRMATION</div>
              <div className=" messageContainer">
                <p>Are you sure you want to delete product</p>
              </div>
              <div className="buttonsContainer">
                <div>
                  <button onClick={this.handleDeleteProduct}>Yes</button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      this.setState({
                        button: {
                          addProduct: "inactivebtn",
                          editProduct: "inactivebtn",
                          deleteProduct: "inactivebth",
                        },
                      });
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          /*END OF DELETE CONFIRMATION DIALOGUE BOX */
        );
      }

      if (this.state.button.editProduct === "activebtn") {
        return (
          <div>
            <Edit Id={this.state.editId} />
          </div>
        );
      }

      if (this.state.button.addProduct === "inactivebtn") {
        return (
          <div className="container arrayOfProducts">
            <div className="row">
              {this.state.storeProducts.map((products) => {
                return (
                  <ProductComponentDashboard
                    productName={products.product}
                    price={products.price}
                    image={products.image}
                    activatebtn={(tr, btn) => this.handleButtonState(tr, btn)}
                    Id={products.Id}
                    selectedId={(Id) => this.handleEditId(Id)}
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    DeleteProduct,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(ProductsScreenDashboard);
