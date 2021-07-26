import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CarouselPage from "../pages/CarouselPage";
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
import CustomerDetails from "../pages/CustomerDetailsPage";
import { connect } from "react-redux";
import UserProfile from "./../pages/UserProfilePage";

function RouterComponent(props) {
  return (
    <div>
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
      <Route path="/customerDetails" component={CustomerDetails} />
      <Route path="/userprofile" component={UserProfile} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.login,
  };
};
export default connect(mapStateToProps)(RouterComponent);
