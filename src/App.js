import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CarouselPage from "./pages/CarouselPage";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./components/LoginPage";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";

import { Container } from "react-bootstrap";

import PaymentScreen from "./pages/PaymentScreen";


function NavigationContainer() {
  return (
    <Router>
      <HeaderPage />
      <Route path="/home" component={CarouselPage} exact />


      <main className="py-3">
        <Container>
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/Dashboard" component={Dashboard} />
        </Container>
      </main>

//       <Route path="/shop" component={ShopPage} />
//       <Route path="/contact" component={ContactPage} />
//       <Route path="/login" component={LoginPage} />
//       <Route path="/Dashboard" component={Dashboard} />
//       <Route path="/payment" component={PaymentScreen} />

      <FooterPage />
    </Router>
  );
}

export default NavigationContainer;
