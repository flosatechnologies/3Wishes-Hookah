import React from "react";
import "../css/contact.scss";
import Contact from "../components/Contact";
import HeaderPage from "../components/HeaderPage";
import { Helmet } from "react-helmet";
import Footer from "../components/FooterComponent";

function ContactPage() {
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

      <Footer />
    </div>
  );
}

export default ContactPage;
