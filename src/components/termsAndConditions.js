import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/termsAndConditions.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export class termsAndConditions extends Component {
  constructor(props) {
    super(props);
  }

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
            <h1 className="heading1-tandc">Terms and Conditions</h1>
            <p className="paragraph-tandc">
              Welcome to the 3 wishes lounge website. By visiting or shopping
              the (“Site”), you will be accepting the Terms & Conditions (“Terms
              and Conditions”) outlined herein. Please read them carefully. If
              you disagree with any of these terms, do not use this site. Within
              these Terms and Conditions, “owner”, “we”, “us” and “our” refer to
              3 wishes lounge and “you”, “your” and “user” refers to each
              visitor to this site.
            </p>
            <h2 className="heading2-tandc">Minors</h2>

            <p className="paragraph-tandc">
              You must be 21 years old to make a purchase on this site. If you
              are under 21 years old, then you may not make a purchase on our
              Site. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, YOU MAY
              NOT USE OUR SITE.
            </p>

            <h2 className="heading2-tandc">
              Copyright and Intellectual Property
            </h2>
            <p className="paragraph-tandc">
              All information and content included on this site, including but
              not limited to text, graphics, logos, images, features, functions
              and software, and the compilation thereof (collectively, the
              “Content”) is the property of the owner and is protected by the
              Ghana and copyright laws. All software used on this site is the
              property of the owner or its software developers and protected by
              the Ghana and copyright laws. Your Account If you choose to use
              this Site, you may be required to register for an account to
              access certain features of the Site. You are responsible for
              maintaining the confidentiality of any and all usernames,
              passwords, and security question information provided as well as
              securing your computer against any unauthorized use. You agree
              that you are responsible for any and all activity under your
              account.
            </p>
            <h2 className="heading2-tandc">Payment Policy</h2>
            <p className="paragraph-tandc">
              We accept the following: Visa, Mastercard, airteltigo cash, mtn
              momo, Vodafone cash. We do not offer any other payment methods
              currently. Please contact us if you have any questions regarding
              payments.
            </p>
            <h2 className="heading2-tandc">Credit Card Security</h2>
            <p className="paragraph-tandc">
              We do not store you credit card information on our site. We use
              the Plug N Pay secured gateway to process credit card transactions
              that is encrypted through the Payment Card Industry Data Security
              Standard (PCI-DSS). Your purchase transaction data is stored only
              as long as is necessary to complete your purchase transaction.
              After that is complete, your purchase transaction information is
              deleted. To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered or
              destroyed. All direct payment gateways adhere to the standards set
              by PCI-DSS as managed by the PCI Security Standards Council, which
              is a joint effort of brands like Visa, MasterCard, American
              Express and Discover. PCI-DSS requirements help ensure the secure
              handling of credit card information by our store and its service
              providers. If you provide us with your credit card information,
              the information is encrypted using secure socket layer technology
              (SSL) and stored with a AES-256 encryption. Although no method of
              transmission over the Internet or electronic storage is 100%
              secure, we follow all PCI-DSS requirements and implement
              additional generally accepted industry standards.
            </p>
            <h2 className="heading2-tandc">Refund Policy</h2>
            <p className="paragraph-tandc">
              Your satisfaction is our paramount concern. We offer an
              unconditional satisfaction product guaranty. If you are unhappy
              with any of products, you may return it anytime within 30 days of
              purchase. Please click on our Customer Service link to contact
              customer service for assistance. Any defective merchandise may be
              returned or exchanged within 60 days. 3 wishes lounge will cover
              the shipping expense to exchange the product. Please contact
              customer service for instructions for shipping the merchandise
              back to our company.
            </p>
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
            <h2 className="heading2-tandc">Cookies </h2>
            <p className="paragraph-tandc">
              The site may use cookies and tracking technology depending on the
              features offered. Cookies are small text files that websites send
              to your computer or other Internet-connected device to uniquely
              identify your browser. Your browser may alert you when you receive
              certain types of cookies and how to restrict or disable certain
              cookies. Personal information cannot be collected via cookies and
              other tracking technology.
            </p>
            <h2 className="heading2-tandc">
              Disclaimer of Warranties and Limitation of Liability
            </h2>
            <p className="paragraph-tandc">
              We attempt to be as accurate as possible when describing our
              products on this site. We, therefore, reserve the right to
              correct, update or modify any errors, inaccuracies or omissions at
              any time and without prior notification. This site is provided on
              an “As Is” and “As Available” basis. We make no representations or
              warranties, stated or implied of any kind. Your use of this site
              is expressly at your own risk. This site’s owner will not be
              liable for any damages of any kind resulting from the use of this
              site. We reserve the right to cancel or refuse to accept any order
              based upon incorrect pricing or availability information. Should
              we need to cancel or otherwise modify your order, we will contact
              you via the method provided under your account.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default termsAndConditions;
