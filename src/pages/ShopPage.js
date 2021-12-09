import React from "react";
import Product from "../pages/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/FooterComponent";
import { getAllProducts } from "../Store/productActions";
import { getVideos } from "../Store/videoActions";
import { AddToCart } from "../Store/cartActions";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ProductAdd from "../components/ProductAdd";
import Video from "../components/Video";
import Banner from "../components/Banner";
import FloatingWhatsApp from "../components/WhatsAppComponent";
import SpecialCard from "../components/SpecialCard";
import "../css/shopPage.css";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelecteId = this.handleSelecteId.bind(this);
  }
  theSelected;

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getVideos();
  }

  handleSelecteId = (theId) => {
    this.setState({ selectedId: theId });
    console.log("selected:", this.state.filtered);
  };

  render() {
    let regularProducts = [];
    regularProducts = this.props.products.filter(
      (product) => product.group === "regular"
    );

    let subscription = [];
    subscription = this.props.products.filter(
      (product) => product.group === "subscription"
    );
    console.log("subscriptionProduct: ", subscription);
    return (
      <div>
        <HeaderPage />
        <Helmet>
          <title>Shop - 3Wishesgh</title>
          <meta name="description" content="3Wishes Hookah Shop" />
        </Helmet>
        <ProductAdd />
        <Banner />
        <div>
          {this.props.videos.videos.map((vid) => {
            return <Video url={vid.url} />;
          })}
        </div>
        <Container fluid={true} style={{ marginTop: "3 0px" }}>
          <Row className="subscriptionTextMainContainer">
            <Col className="subscriptionTextContainer">
              <h2 className="subscriptionText" Id="subscriptionTextId">
                Subscription Packages
              </h2>
            </Col>
          </Row>

          <Container>
            <Row>
              {subscription.map((prod) => {
                return (
                  <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <SpecialCard
                      imgsrc={prod.image}
                      title={prod.product}
                      description={prod.description}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Container>

        <div className="container pt-5 mb-5">
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
            <Row className="wishesProductsTextMainContainer">
              <Col className="wishesProductsTextContainer">
                <h2 className="wishesProductsText">Products</h2>
              </Col>
            </Row>
            <Row>
              {regularProducts.map((product) => {
                return (
                  <Col xs={12} sm={12} md={6} lg={3} xl={3} xxl={3}>
                    {/* <Helmet>
                    <title>{product.name}</title>
                    <meta name="description" content="3Wishes Hookah Shop" />
                  </Helmet> */}

                    <Product
                      name={product.product}
                      image={product.image}
                      price={product.price}
                      Id={product.Id}
                      theProducts={this.props.products}
                      key={product.Id}
                    />
                  </Col>
                );
              })}
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
    videos: state.videos,
  };
};
const mapDispatchToProps = () => {
  return {
    getAllProducts,
    AddToCart,
    getVideos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShopPage);
