import React from "react";

import Product from "../pages/Product";

import "bootstrap/dist/css/bootstrap.min.css";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/FooterComponent";
import { getAllProducts } from "../Store/productActions";
import { AddToCart } from "../Store/cartActions";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import ProductAdd from "../components/ProductAdd";
import Video from "../components/Video";
import Banner from "../components/Banner";

import FloatingWhatsApp from "../components/WhatsAppComponent";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelecteId = this.handleSelecteId.bind(this);
  }
  theSelected;

  componentDidMount() {
    this.props.getAllProducts();
  }

  handleSelecteId = (theId) => {
    this.setState({ selectedId: theId });
    console.log("selected:", this.state.filtered);
  };

  render() {
    return (
      <div>
        <HeaderPage />
        <ProductAdd />
        <Banner />
        <Video />
        <Helmet>
          <title>Shop - 3Wishesgh</title>
          <meta name="description" content="3Wishes Hookah Shop" />
        </Helmet>
        <div className="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <form>
                {/* <input
                  style={{
                    marginRight: "5px",
                    backgroundColor: "#eeeeee",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "gray",
                    padding: "3px",
                  }}
                  className="searchBoxShopPage"
                  type="text"
                  placeholder="search product by name"
                />
                <input
                  className="searchButtonShopPage"
                  type="submit"
                  value="search"
                /> */}
              </form>
            </div>
          </div>
          <Container>
            <Row>
              {this.props.products.map((product) => (
                <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
                  <Helmet>
                    <title>{product.name}</title>
                    <meta name="description" content="3Wishes Hookah Shop" />
                  </Helmet>

                  <Product
                    name={product.product}
                    image={product.image}
                    price={product.price}
                    Id={product.Id}
                    theProducts={this.props.products}
                    key={product.Id}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <FloatingWhatsApp />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("theCartsContent: ", state.cart.cart);
  return {
    redata: state,
    products: state.products.products,
  };
};
const mapDispatchToProps = () => {
  return {
    getAllProducts,
    AddToCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShopPage);
