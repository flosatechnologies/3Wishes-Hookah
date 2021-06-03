import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CarouselPage from "./pages/CarouselPage";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import ShopPage from "./components/ShopPage";
import LoginPage from "./components/LoginPage";
import ContactPage from "./pages/ContactPage";



function NavigationContainer() {
  return (
    <Router>
      <HeaderPage />
      <Route path="/home" component={CarouselPage} exact />
      <Route path="/shop" component={ShopPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />
      <FooterPage />
    </Router>
  );
}

export default NavigationContainer;
