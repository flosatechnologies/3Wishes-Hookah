import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../pages/Product";
import products from "../products";
import "bootstrap/dist/css/bootstrap.min.css";

import { AddNewProduct, getAllProducts } from "../Store/authActions";
import { connect } from "react-redux";

// import HeaderPage from "../components/HeaderPage";
// import FooterPage from "../components/FooterPage";

// class ShopPage extends Component {
//   componentDidMount() {
//     this.props.getAllProducts();
//   }
//   render() {
//     return (
//       <div>
//         {/*<HeaderPage />*/}
//         <div className="container">
//           <Row>
//             {products.map((product) => (
//               <Col sm={12} md={6} lg={4} xl={3}>
//                 <Product product={product} />
//               </Col>
//             ))}
//           </Row>
//         </div>
//         {/*<FooterPage />*/}
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import { getAllProducts } from "../Store/authActions";
import { connect } from "react-redux";
import { Component } from "react";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        <HeaderPage />
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
                <input
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
                />
              </form>
            </div>
          </div>
          <div className="row">
            {this.props.products.map((product) => (
              <Product
                name={product.product}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
        <FooterPage />

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
     AddNewProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ShopPage);
