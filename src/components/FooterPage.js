import React from "react";
import "../css/Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";

function FooterPage() {
  return (
    <div
      className="container"
      style={{
        padding: "6px 0px",
      }}
    >
      <div className="row">
        <div
          className="col-lg-4 col-md-3"
          style={{ fontSize: "12px", color: "#cccccc", textAlign: "center" }}
        >
          Copyright &copy; 2021
          <span
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              marginLeft: "4px",
            }}
          >
            3wishesLounge
          </span>
        </div>

        <div className="col-lg-4 col-md-3" style={{ textAlign: "right" }}>
          <div className="socialMediaContainer">
            <div className="socialMedia">
              <a href="https://www.facebook.com" target="facebook.com">
                <FaFacebookSquare size="1.5em" />
              </a>
            </div>

            <div className="socialMedia">
              <a
                href="https://twitter.com/LoungeWishes?s=09"
                target="twitter.com"
              >
                <FaTwitterSquare size="1.5em" />
              </a>
            </div>

            <div className="socialMedia">
              <a
                href="https://www.instagram.com/3wisheslounge/"
                target="instagram.com"
              >
                <FaInstagramSquare size="1.5em" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-3"
          style={{
            color: "whitesmoke",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          Powered by
          <span
            style={{
              color: "#40f167",
              marginLeft: "1px",
              fontSize: "12px",
            }}
          >
            FLOSA Technologies
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
