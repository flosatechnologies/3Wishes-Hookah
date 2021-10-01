import React from "react";
import "../css/Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function FooterPage() {
  return (
    <div>
      <Container fluid={true} className="footerContainer">
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
            className="copyrightInfo"
          >
            Copyright &copy; 2021
            <span
              style={{
                fontWeight: "bold",
                textAlign: "left",
                fontSize: "13px",
                marginLeft: "4px",
              }}
            >
              3wishesLounge
            </span>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
            style={{ textAlign: "right" }}
          >
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
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            xxl={4}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterPage;
