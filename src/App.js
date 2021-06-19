import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CarouselPage from "./pages/CarouselPage";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./components/LoginPage";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import PaymentScreen from "./pages/PaymentScreen";
import Edit from "./pages/EditScreen";
import DeliveryScreen from "./pages/DeliveryScreen";
import CartScreen from "./pages/CartScreen";


function NavigationContainer() {
  return (
    <div>
      <Router>     
        <Route path="/" component={CarouselPage} exact={true} />
        <Route path="/shop" component={ShopPage} exact={true} />
        <Route path="/contact" component={ContactPage} exact={true} />
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/Dashboard" component={Dashboard} exact={true} />
        <Route path="/payment" component={PaymentScreen} exact={true} />
        <Route path="/cart" component={CartScreen} exact={true} />
        <Route path="/edit" component={Edit} exact={true} />
        <Route path="/delivery" component={DeliveryScreen} exact={true} />

      </Router>
    </div>
  );
}

export default NavigationContainer;
