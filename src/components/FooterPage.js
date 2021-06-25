import React from "react";
import "../css/Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FooterPage() {
  return (
    <footer variant="white" className="bg-dark m-10">
      <div
        className="container"
        style={{
          padding: "6px 0px",
        }}
      >
        <div className="row">
          <div
            className="col-lg-4 col-md-3"
            style={{ fontSize: "12px", color: "#cccccc" }}
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
                <a
                  href="https://www.instagram.com/3wisheslounge/"
                  target="_blank"
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
              textAlign: "right",
            }}
          >
            Powered by
            <span
              style={{
                color: "#40f167",
                marginLeft: "3px",
                fontSize: "12px",
              }}
            >
              FLOSA Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
