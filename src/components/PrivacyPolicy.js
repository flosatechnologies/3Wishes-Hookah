import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/termsAndConditions.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export class PrivacyPolicy extends Component {


  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col
            xxl={{ offset: 11, span: 1 }}
            xl={{ offset: 11, span: 1 }}
            lg={{ offset: 11, span: 1 }}
            md={12}
            sm={12}
            xs={12}
          >
            <button
              className="closeButton"
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              <AiOutlineCloseCircle />
            </button>
          </Col>
        </Row>
        <Row>
          <Col
            xxl={{ offset: 1, span: 10 }}
            xl={{ offset: 1, span: 10 }}
            lg={{ offset: 1, span: 10 }}
            md={12}
            sm={12}
            xs={12}
            className="tandcImmediateBox"
          >
           
            
            
            
            
            
            <h2 className="heading2-tandc">Privacy Policy</h2>
            <p className="paragraph-tandc">
              3 wishes lounge, (“owner, we, us or our”) understands the
              importance of protecting the information you provide and
              protecting your privacy is our priority. Our Privacy Policy
              (“policy”) describes the type of information we collect, how we
              use this information, with whom we share it and finally how we
              protect your personal information. You can read our privacy policy
              here. By using our site, you are accepting the practices described
              in this policy. We may change or add to this policy without prior
              notification, so we encourage you to review it periodically.
              Please note, that the practices described herein refer to the use
              of this site only. If you link to other websites, please review
              the privacy policies posted on those sites respectively.
            </p>
            
            
            
            
              

          </Col>
        </Row>
      </Container>
    );
  }
}

export default PrivacyPolicy;
