import React from "react";
import "../css/contact.scss";
import Contact from "../components/Contact";
import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";
import { Helmet } from "react-helmet";

function ContactPage() {
  // let bg = require("../assets/images/awesome.jpg");
  return (
    <div>
      <HeaderPage />
      <Helmet>
        <title>Contact - 3Wishesgh</title>
        <meta name="description" content="3Wishes Hookah Contact" />
      </Helmet>
      <div className="main-container">
        <Contact />
      </div>

      <FooterPage />
    </div>
  );
}

export default ContactPage;
