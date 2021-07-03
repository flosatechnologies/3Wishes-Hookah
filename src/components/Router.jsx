import React from "react";

import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import CarouselPage from "../pages/CarouselPage";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";

import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import Dashboard from "../pages/Dashboard";
import PaymentScreen from "../pages/PaymentScreen";
import Edit from "../pages/EditScreen";
import DeliveryScreen from "../pages/DeliveryScreen";
import CartScreen from "../pages/CartScreen";
import CheckoutScreen from "../pages/CheckoutScreen";
import Register from "../components/Register";
import LogIn from "../components/Login";
import LogOut from "../components/LogOut";
import { connect } from "react-redux";

function RouterComponent(props) {
  return (
    <div>
      <HeaderPage />
      <Route path="/" component={CarouselPage} exact={true} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LogIn} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/cart" component={CartScreen} />
      <Route path="/edit" component={Edit} />
      <Route path="/delivery" component={DeliveryScreen} />
      <Route path="/signup" component={Register} />
      <Route path="/checkout" component={CheckoutScreen} />
      <Route path="/logOut" component={LogOut} />
      <ProtectedRoute path="/Dashboard" component={Dashboard} />
      <FooterPage />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(RouterComponent);
