import React from "react";
import "../css/contact.scss";
import Contact from "../components/Contact";
import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";

function ContactPage() {
  // let bg = require("../assets/images/awesome.jpg");
  return (
    <div>
      <HeaderPage />
      <div className="main-container">
        <Contact />
      </div>
      <FooterPage />
    </div>
  );
}

export default ContactPage;
