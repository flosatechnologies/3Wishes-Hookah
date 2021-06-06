import React from "react";
import "../css/contact.scss";
import Contact from "../components/Contact";
// import { url } from "inspector";

function ContactPage() {
  // let bg = require("../assets/images/awesome.jpg");
  return (
    <div
      className="main-container"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2018/10/12/09/49/shisha-3741794_960_720.jpg")',
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Contact />
    </div>
  );
}

export default ContactPage;
