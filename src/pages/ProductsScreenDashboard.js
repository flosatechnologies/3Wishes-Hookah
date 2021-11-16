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
import { DeleteProduct, getAllProducts } from "../Store/productActions.js";
import { Container, Row, Col } from "react-bootstrap";

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
      value: 0,

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
          <Container className="dialogBoxMainContainer">
            <Row>
              <Col
                xxl={{ offset: 4, span: 4 }}
                xl={{ offset: 4, span: 4 }}
                lg={{ offset: 4, span: 4 }}
                md={{ offset: 4, span: 4 }}
                sm={{ offset: 3, span: 6 }}
                xs={{ offset: 3, span: 6 }}
                className="dialogBoxContainer"
              >
                <Row className=" headerContainer">CONFIRMATION</Row>
                <Row className=" messageContainer">
                  Are you sure you want to delete product
                </Row>
                <Row className=" deleteDialogButtonsContainer ">
                  <Col
                    xxl={{ offset: 9, span: 3 }}
                    xl={{ offset: 9, span: 3 }}
                    lg={{ offset: 8, span: 4 }}
                    md={{ offset: 8, span: 4 }}
                    sm={{ offset: 8, span: 4 }}
                    xs={{ offset: 7, span: 5 }}
                    className="deleteDialogButtonContainer"
                  >
                    <Row>
                      <Col
                        xxl={6}
                        xl={6}
                        lg={6}
                        md={5}
                        sm={5}
                        xs={5}
                        className="yesButtonContainer-dashboard"
                      >
                        <button
                          className="yesButton-dashboard"
                          onClick={this.handleDeleteProduct}
                        >
                          Yes
                        </button>
                      </Col>
                      <Col
                        xxl={6}
                        xl={6}
                        lg={6}
                        md={7}
                        sm={7}
                        xs={7}
                        className="noButtonContainer-dashboard"
                      >
                        <button
                          className="noButton-dashboard"
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
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
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
          <Container className=" arrayOfProducts">
            <Row className=" dashboardProductsContainer">
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
            </Row>
          </Container>
        );
      }
    };
    return (
      <Container className=" productScreenMainContainer">
        <Row className="filterSection">
          <Col
            xxl={2}
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className="addProductButtonContainer-addProducts"
          >
            <button
              onClick={() => {
                this.setState({ button: { addProduct: "activebtn" } });
              }}
              className="addProductButton"
              id={this.state.button.addProduct}
            >
              Add Product
            </button>
          </Col>
          <Col
            xxl={{ offset: 8, span: 2 }}
            xl={{ offset: 8, span: 2 }}
            lg={{ offset: 8, span: 2 }}
            md={{ offset: 8, span: 2 }}
            sm={{ offset: 8, span: 2 }}
            xs={{ offset: 8, span: 2 }}
            className=" backButtonContainer"
          >
            <button
              onClick={() => {
                this.setState({
                  button: { addProduct: "inactivebtn" },
                  value: this.state.value + 1,
                });

                this.props.renderParent(this.state.value);
              }}
              className="backButton"
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </Col>
        </Row>

        <Row className="productsContainer">{handleRenderScreen()}</Row>
      </Container>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    DeleteProduct,
    getAllProducts,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(ProductsScreenDashboard);
