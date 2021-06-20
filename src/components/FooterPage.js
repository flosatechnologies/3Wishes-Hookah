import React from "react";
import "../css/Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function FooterPage() {
  return (
    <footer
      variant="white"
      className="bg-dark m-10"
      /* style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 25px",
        // background: "#343a40",
        height: "31px",
      }}*/
    >
      <Container>
        <Row>
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

          <div className="col-lg-4 col-md-3">
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
            style={{ color: "whitesmoke", fontSize: "12px" }}
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
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPage;
