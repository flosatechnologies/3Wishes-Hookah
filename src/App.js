import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import CarouselPage from "./pages/CarouselPage";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import PaymentScreen from "./pages/PaymentScreen";
import Edit from "./pages/EditScreen";
import DeliveryScreen from "./pages/DeliveryScreen";
import CartScreen from "./pages/CartScreen";
import CheckoutScreen from "./pages/CheckoutScreen";
import Register from "./components/Register";
import LogIn from "./components/Login";

function NavigationContainer() {
  return (
    <div>
      <Router>
        <Route path="/" component={CarouselPage} exact={true} />
        <Route path="/shop" component={ShopPage} exact={true} />
        <Route path="/contact" component={ContactPage} exact={true} />
        <Route path="/login" component={LogIn} exact={true} />
        <ProtectedRoute path="/Dashboard" component={Dashboard} exact={true} />
        <Route path="/payment" component={PaymentScreen} exact={true} />
        <Route path="/cart" component={CartScreen} exact={true} />
        <Route path="/edit" component={Edit} exact={true} />
        <Route path="/delivery" component={DeliveryScreen} exact={true} />
        <Route path="/signup" component={Register} exact={true} />
      </Router>
    </div>
  );
}

export default NavigationContainer;
