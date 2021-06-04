import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CarouselPage from "./pages/CarouselPage";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./components/LoginPage";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";

function NavigationContainer() {
  return (
    <Router>
      <HeaderPage />
      <Route path="/home" component={CarouselPage} exact />
      <Route path="/shop" component={ShopPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/Dashboard" component={Dashboard} />
      <FooterPage />
    </Router>
  );
}

export default NavigationContainer;
