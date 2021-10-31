import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo1 from "../assets/images/logo.png";

export default function App() {
  return (
    <FloatingWhatsApp
      phoneNumber="+233546835848"
      accountName="3wishes Support"
      avatar={logo1}
      statusMessage="At your Service"
      chatMessage="Welcome to 3wishesgh!   How may we help you?"
    />
  );
}
