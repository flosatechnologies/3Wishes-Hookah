import React from "react";
import "../css/Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "../css/Footer.css";

function FooterPage() {
  return (
    <div className="text-center" variant="light">
      <div
        style={{
          background: "#3b4249", //353932
          height: "7vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="socialMediaContainer">
          <div className="socialMedia">
            <a href="#" target="_blank">
              <FaFacebookSquare size="1.5em" />
            </a>
          </div>

          <div className="socialMedia">
            <a href="https://twitter.com/LoungeWishes?s=09" target="_blank">
              <FaTwitterSquare size="1.5em" />
            </a>
          </div>

          <div className="socialMedia">
            <a href="https://www.instagram.com/3wisheslounge/" target="_blank">
              <FaInstagramSquare size="1.5em" />
            </a>
          </div>
        </div>
      </div>
      <footer
        variant="white"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 25px",
          background: "#343a40",
          height: "20px",
        }}
      >
        <div style={{ fontSize: "12px", color: "#cccccc" }}>
          Copyright &copy; 2021
          <span
            style={{ fontWeight: "bold", fontSize: "12px", marginLeft: "4px" }}
          >
            3wishesLounge
          </span>
        </div>
        <div style={{ color: "whitesmoke", fontSize: "12px" }}>
          Powered by
          <span
            style={{
              color: "#40f167",
              marginLeft: "3px",
              fontSize: "12px",
            }}
          >
            Flosa Technologies
          </span>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;
