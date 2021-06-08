import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SecondaryHeader.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default class SecondaryHeader extends Component {
  render() {
    return (
      <div>
        <div className="secondaryHeaderContainer container-fluid">
          <div>
            <a href="/login">login/register</a>
          </div>
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
      </div>
    );
  }
}
