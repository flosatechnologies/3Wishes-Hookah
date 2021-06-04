import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CarouselPage from "./components/CarouselPage";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import ShopPage from "./components/ShopPage";
import LoginPage from "./components/LoginPage";

function NavigationContainer() {
  return (
    <Router>
      <HeaderPage />
      <Route path="/" component={CarouselPage} exact />
      <Route path="/shop" component={ShopPage} />
      <Route path="/login" component={LoginPage} />
      <FooterPage />
    </Router>
  );
}

export default NavigationContainer;
