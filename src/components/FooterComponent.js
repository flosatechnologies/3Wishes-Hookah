import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "../css/FooterComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column className="quick-links">
            {/*<Heading>3wishes Lounge</Heading>*/}
            <img
              style={{ marginBottom: "10px" }}
              alt=""
              width="120"
              height="120"
              src={logo}
            />
            <i
              class="fa fa-map-marker"
              style={{ color: "#fff" }}
              aria-hidden="true"
            >
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "15px",
                  fontFamily: "Roboto",
                }}
              >
                East Legon, Accra
              </span>
            </i>
          </Column>
          <Column className="social-media">
            {/*<Heading>Payment Method</Heading>
            <i
              className="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              MTN MOMO
            </i>
            <FooterLink href="#"></FooterLink>
            <i
              className="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              Vodafone Cash
            </i>
            <FooterLink href="#"></FooterLink>
            <i
              className="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              AirtelTigo Cash
            </i>
            <FooterLink href="#"></FooterLink>
            <i
              class="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              Bitcoin
            </i>
            <FooterLink href="#"></FooterLink>*/}
          </Column>

          <Column className="social-media">
            <Heading>Payment Method</Heading>
            <i
              className="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              MTN MOMO
            </i>
            <FooterLink href="#"></FooterLink>
            <i
              className="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              Vodafone Cash
            </i>
            <FooterLink href="#"></FooterLink>
            <i
              className="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              AirtelTigo Cash
            </i>
            <FooterLink href="#"></FooterLink>
            <i
              class="money"
              style={{
                color: "#fff",
                fontSize: "15px",
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
              aria-hidden="true"
            >
              Bitcoin
            </i>
            <FooterLink href="#"></FooterLink>
          </Column>

          <Column className="social-media">
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com" target="_blank">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink
              href="https://www.instagram.com/3wisheslounge/"
              target="instagram.com"
            >
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink
              href="https://twitter.com/LoungeWishes?s=09"
              target="_blank"
            >
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <hr
          style={{
            borderTop: "3px solid white",
            width: "100%",
          }}
        />

        <Row className="bottom-row">
          <Col
            className="copyrightInfo"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            Copyright &copy; 2021
            <span
              style={{
                fontWeight: "600",
                textAlign: "left",
                fontSize: "12px",
                marginLeft: "1px",
                color: "#fff",
              }}
            >
              3wishesLounge
            </span>
          </Col>

          <Col
            className="terms"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            style={{ textAlign: "right" }}
          >
            <Link style={{ color: "#fff" }} to="#">
              Term and Conditions
            </Link>
          </Col>
          <Col
            className="privacy"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            style={{ textAlign: "right" }}
          >
            <Link style={{ color: "#fff" }} to="#">
              Privacy Policy
            </Link>
          </Col>

          <Col
            className="develop"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontSize: "12px",
              padding: "3px 0px",
            }}
          >
            Developed by
            <span
              style={{
                color: "#05f0ec",
                marginLeft: "2px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              FLOSA Technologies
            </span>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
