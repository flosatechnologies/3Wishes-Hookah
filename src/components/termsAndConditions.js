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
            <h1 className="heading1-tandc">Affiliate Agreement</h1>
            <p>
              Effective Date: February 10th, 2019 Primary Website:
              www.3wishesgh.com THE AGREEMENT: This Affiliate Agreement
              (hereinafter called the “Agreement”) is provided by the following
              organization, hereinafter referred to as “Company”:
              Products-Group, Inc. Our primary website is located at the address
              listed above. The Agreement is a legal document between you and
              the Company that describes the affiliate relationship we are
              entering into. This Agreement covers your responsibilities as an
              affiliate and our responsibilities to you. Please ensure you read
              and understand the entirety of this document, as well as have a
              lawyer’s assistance if you desire, because each of the terms of
              this Agreement are important to our working relationship.
            </p>
            <p>
              <h2 className="heading2-tandc"> 1) DEFINITIONS </h2>
              <p>
                The parties referred to in this Agreement shall be defined as
                follows:
              </p>
              <ol>
                <li>
                  a) Company, Us, We: As we describe above, we’ll be referred to
                  as the Company. Us, we, our, ours and other first-person
                  pronouns will also refer to the Company, as well as all
                  employees or legal agents of the Company.
                </li>
                <li>
                  {" "}
                  b) You, the Affiliate: You will be referred to as the
                  “Affiliate.” You’ll also be referred to throughout this
                  Agreement with second-person pronouns such as You, Your, or
                  Yours.
                </li>
                <li>
                  {" "}
                  c) Parties: Collectively, the parties to this Agreement (the
                  Company and You) will be referred to as “Parties” or
                  individually as “Party.”
                </li>
                <li>
                  {" "}
                  d) Affiliate Program: The program we’ve set up for our
                  affiliates as described in this Agreement.
                </li>
                <li>
                  {" "}
                  e) Affiliate Application: The fully completed form which must
                  be provided to us for consideration of your inclusion in the
                  Affiliate Program.
                </li>
                <li>
                  {" "}
                  f) Website: The primary website we’ve noted above will be
                  referred to as Website.
                </li>
              </ol>
            </p>
            <h2 className="heading2-tandc">2) ASSENT & ACCEPTANCE</h2>
            <p>
              By submitting an application to our Affiliate Program, you warrant
              that you have read and reviewed this Agreement and that you agree
              to be bound by it. If you do not agree to be bound by this
              Agreement, please leave the website immediately and do not submit
              an application to our Affiliate Program. This Agreement
              specifically incorporates by reference any Terms of Conditions,
              Privacy Policies, End-User License Agreements, or other legal
              documents which we may have on our website.
            </p>
            <h2 className="heading2-tandc"> 3) PROGRAM SIGN-UP</h2>
            <p>
              In order to sign up for our Affiliate Program, you will first be
              asked to submit an Affiliate Application to join. The Affiliate
              Application may be found at the following website:
              www.hakunasupplycbd.com/affiliate-application. Submitting an
              Affiliate Application does not guarantee inclusion in the
              Affiliate Program. We evaluate each and every application and are
              the sole and exclusive decision-makers on Affiliate acceptance. If
              we choose not to allow your inclusion in the Affiliate Program, we
              will attempt to notify you in a reasonable manner. If you do not
              hear from us within a reasonable time frame, please consider your
              application rejected. We are not obligated to provide you any
              explanation for your rejection, but please be advised we may
              reject applicants for any reason or manner, including but not
              limited to a website or social media page which violates our
              Acceptable Use Policy. If your Affiliate Application is rejected,
              you may not reapply. If your Affiliate Application is accepted,
              each of the terms and conditions in this Agreement apply to your
              participation. We may also ask for additional information to
              complete your Affiliate Application or for you to undertake
              additional steps to ensure eligibility in the Affiliate Program.
            </p>
            <h2 className="heading2-tandc"> 4) NON-EXCLUSIVITY </h2>
            <p>
              This Agreement does not create an exclusive relationship between
              you and us. You are free to work with similar affiliate program
              providers in any category. This agreement imposes no restrictions
              on us to work with any individual or company we may choose.
            </p>
            <h2 className="heading2-tandc">5) AFFILIATE PROGRAM </h2>
            <p>
              After your acceptance in the Affiliate Program, you must ensure
              your account is set up thoroughly, including specific payout
              information and location (such as a bank or online account which
              we may use to post payment). Please be advised the below is a
              general description of the Affiliate Program. Everything contained
              in this subsection is subject to the specific terms and conditions
              throughout the rest of this Agreement. We will provide you with a
              specific link or links which correspond to certain products we are
              offering for sale (collectively, the “Link”). The Link will be
              keyed to your identity and will send online users to the Company’s
              website or websites. You hereby agree to fully cooperate with us
              regarding the Link and that you will explicitly comply with all of
              the terms of this Agreement for the promotion of the Link at all
              times. We may modify the specific link or links and will notify
              you if we do so. You agree to only use links which are prior
              approved by us and to display the Link prominently on your website
              or social media page, as described in your Affiliate Application
              (collectively, the “Affiliate Site”). Each time a user clicks
              through the Link posted on the Affiliate Site and completes the
              sale of the product or service and we determine it is a Qualified
              Purchase, as described below, you will be eligible to receive the
              following percentage of the sale: 20% (twenty percent).
            </p>
            <h2 className="heading2-tandc"> 6) SPECIFIC TERMS APPLICABLE</h2>
            <p>
              We will determine whether payout is permissible in our sole and
              exclusive discretion. We reserve the right to reject clicks and/or
              sales that do not comply with the terms of this Agreement.
              Processing and fulfillment of orders will be our responsibility.
              We will also provide real-time data regarding your account with us
              through the portal on which you log into the website. As described
              above, in order to be eligible for payout, user purchases must be
              “Qualified Purchases.” Qualified Purchases:
            </p>
            <ol>
              <li>
                a) Must not be referred by any other partner or affiliate links
                of the Company (in other words, Qualified Purchases are only
                available through your specific Affiliate Link;
              </li>
              <li>
                {" "}
                b) May not be purchased by an already-existing partner or
                affiliate of the Company;
              </li>{" "}
              <li>
                {" "}
                c) May not be purchased prior to the Affiliate joining the
                Affiliate Program;
              </li>{" "}
              <li>
                {" "}
                d) May only be purchased through a properly-tracking Affiliate
                Link;
              </li>{" "}
              <li>
                {" "}
                e) May not be purchased by a customer in violation of any of our
                legal terms or Acceptable Use Policy;
              </li>{" "}
              <li>
                {" "}
                f) May not be fraudulent in any way, in the Company’s sole and
                exclusive discretion;
              </li>{" "}
              <li>
                {" "}
                g) May not have been induced by the Affiliate offering the
                customer any coupons or discounts;
              </li>
            </ol>
            <h2 className="heading2-tandc"> 7) PAYOUT INFORMATION </h2>{" "}
            <p>
              Payouts will only be available when the Company has your current
              address information as well as accounting and tax documentation.
              You will be asked to submit a W8/W9 tax form. Accounting
              information may include the routing and account number of a bank
              where you wish to post a direct deposit or may include an email
              address for an online method of payment. Currently, the Company
              employs the following methods of payout:
            </p>
            <ol>
              <li>Paypal</li> <li>Check</li>
            </ol>
            <p>
              {" "}
              For any changes in your address or accounting information, you
              must notify us immediately and we will endeavor to make the
              changes to your payout information as soon as possible. Payouts
              will be available the month or period after they accrue. For
              example, if payouts are made every 15 days, an entire 15 day
              period must finish for the payout of that period to be available
              in the following period. We explicitly reserve the right to change
              payout information in our sole and exclusive discretion. If we do
              so, you will be notified. For any disputes as to payout, the
              Company must be notified within thirty days of your receipt of the
              payout. We will review each dispute notification as well as the
              underlying payout transaction to which it is related. Disputes
              filed after thirty days of payout will not be addressed.
            </p>{" "}
            <h2 className="heading2-tandc"> 8) REPORTS</h2>
            <p>
              You may log into your account with us to review reports related to
              your affiliation, such as payout reports and Qualified Click
              and/or Purchase information. Please be advised however, that not
              all listed qualifying clicks and/or purchases have been fully
              reviewed for accuracy in the reports viewable by you in real-time
              and therefore may be subject to change prior to payout.
            </p>
            <h2 className="heading2-tandc">
              9) TERM, TERMINATION & SUSPENSION
            </h2>
            <p>
              The term of this Agreement will begin when we accept you into the
              Affiliate Program. It can be terminated by either Party at any
              time with or without cause. You may only earn payouts as long as
              you are an Affiliate in good standing during the term. If you
              terminate this Agreement with us, you will qualify to receive
              payouts earned prior to the date of termination. If you fail to
              follow the terms of this Agreement or any other legal terms we
              have posted anywhere on our website or websites, you forfeit all
              rights, including the right to any unclaimed payout. We
              specifically reserve the right to terminate this Agreement if you
              violate any of the terms outlined herein, including, but not
              limited to, violating the intellectual property rights of the
              Company or a third party, failing to comply with applicable laws
              or other legal obligations, and/or publishing or distributing
              illegal material. At the termination of this Agreement, any
              provisions that would be expected to survive termination by their
              nature shall remain in full force and effect.
            </p>
            <h2 className="heading2-tandc"> 10) INTELLECTUAL PROPERTY</h2>
            <p>
              You agree that the intellectual property owned by the Company
              includes all copyrights, trademarks, trade secrets, patents, and
              other intellectual property belonging to the Company (“Company
              IP”). Subject to the limitations listed below, we hereby grant you
              a non-exclusive, non-transferable, revocable license to access our
              websites in conjunction with the Affiliate Program and use the
              Company IP solely and exclusively in conjunction with identifying
              our company and brand on the Affiliate Site to send customers to
              the Affiliate links we provide. You may not modify the Company IP
              in any way and you are only permitted to use the Company IP if you
              are an Affiliate in good standing with us. We may revoke this
              license at any time and if we find that you are using the Company
              IP in any manner not contemplated by this Agreement, we reserve
              the right to terminate this Agreement. Other than as provided
              herein, you are not permitted to use any of the Company IP or any
              confusingly similar variation of the Company IP without our
              express prior written permission. This includes a restriction on
              using the Company IP in any domain or website name, in any
              keywords or advertising, in any metatags or code, or in any way
              that is likely to cause consumer confusion. Please be advised that
              your unauthorized use of any Company IP shall constitute unlawful
              infringement and we reserve all of our rights, including the right
              to pursue an infringement suit against you in federal court. You
              may be obligated to pay monetary damages or legal fees and costs.
              You hereby provide us a non-exclusive license to use your name,
              trademarks and servicemarks if applicable and other business
              intellectual property to advertise our Affiliate Program.
            </p>
            <h2 className="heading2-tandc"> 11) MODIFICATION & VARIATION</h2>{" "}
            <p>
              The Company may, from time to time and at any time, modify this
              Agreement. You agree that the Company has the right to modify this
              Agreement or revise anything contained herein. You further agree
              that all modifications to this Agreement are in full force and
              effect immediately upon posting on the Website and that
              modifications or variations will replace any prior version of this
              Agreement, unless prior versions are specifically referred to or
              incorporated into the latest modification or variation of this
              Agreement. If we update or replace the terms of this Agreement, we
              will let you know via electronic means, which may include an
              email. If you don’t agree to the update or replacement, you can
              choose to terminate this Agreement as described below.
            </p>
            <ol>
              <li>
                a) To the extent any part or sub-part of this Agreement is held
                ineffective or invalid by any court of law, you agree that the
                prior, effective version of this Agreement shall be considered
                enforceable and valid to the fullest extent.
              </li>{" "}
              <li>
                b) You agree to routinely monitor this Agreement and refer to
                the Effective Date posted at the top of this Agreement to note
                modifications or variations. You further agree to clear your
                cache when doing so to avoid accessing a prior version of this
                Agreement.
              </li>{" "}
            </ol>
            <h2 className="heading2-tandc"> 12) RELATIONSHIP OF THE PARTIES</h2>
            <p>
              Nothing contained within this Agreement shall be construed to form
              any partnership, joint venture, agency, franchise, or employment
              relationship. You are an independent contractor of the Company and
              will remain so at all times.
            </p>{" "}
            <h2 className="heading2-tandc">13) ACCEPTABLE USE </h2>
            <p>
              You agree not to use the Affiliate Program or our Company for any
              unlawful purpose or any purpose prohibited under this clause. You
              agree not to use the Affiliate Program in any way that could
              damage our websites, products, services, or the general business
              of the Company.
            </p>
            <ol>
              <li>a) You further agree not to use the Affiliate Program:</li>
              <li>
                I) To harass, abuse, or threaten others or otherwise violate any
                person’s legal rights;
              </li>
              <li>
                II) To violate any intellectual property rights of the Company
                or any third party;
              </li>
              <li>
                III) To upload or otherwise disseminate any computer viruses or
                other software that may damage the property of another;
              </li>{" "}
              <li> IV) To perpetrate any fraud;</li>{" "}
              <li>
                V) To engage in or create any unlawful gambling, sweepstakes, or
                pyramid scheme;
              </li>{" "}
              <li>
                VI) To publish or distribute any obscene or defamatory material;
              </li>{" "}
              <li>
                VII) To publish or distribute any material that incites
                violence, hate, or discrimination towards any group;
              </li>{" "}
              <li>VIII) To unlawfully gather information about others.</li>
            </ol>{" "}
            <h2 className="heading2-tandc">
              14) AFFILIATE OBLIGATIONS & FTC COMPLIANCE
            </h2>
            <p>
              You are responsible for ensuring operation and maintenance of the
              Affiliate Site, including technical operations, written claims,
              links, and accuracy of materials. You must ensure, as noted above,
              that the Affiliate Site does not infringe upon the intellectual
              property rights of any third party or otherwise violate any legal
              rights. We may monitor your account, as well as clicks and/or
              purchases coming through your account. If we determine you are not
              in compliance with any of these the terms of this Agreement, we
              have the right to immediately terminate your participation in the
              Affiliate Program. We require all of our Affiliates to comply with
              all applicable statutes, regulations, and guidelines set by the
              federal government, through the Federal Trade Commission, as well
              as state and local governments as mandated. The Federal Trade
              Commission requires that affiliate relationships, such as the
              relationship between you and the Company, be disclosed to
              consumers. We recommend that you seek independent legal counsel to
              advise you of our obligations to disclose in this manner. You are
              required to post a conspicuous notice on your website regarding
              the Affiliate Program. The notice does not have to contain the
              precise words as the example given below, but should be similar:
              We engage in affiliate marketing whereby we receive funds through
              clicks to our affiliate program through this website or we receive
              funds through the sale of goods or services on or through this
              website. We may also accept advertising and sponsorships from
              commercial businesses or receive other forms of advertising
              compensation. This disclosure is intended to comply with the US
              Federal Trade Commission Rules on marketing and advertising, as
              well as any other legal requirements which may apply. We also
              require you to comply with any and all applicable data privacy and
              security laws and regulations, including all of those which may
              impact your country of residence or your visitors. Such
              regulations include, but are not limited to, any applicable laws
              in the Ghana or the General Data Protection Regulation of the
              European Union. We also require that you implement adequate
              organizational and technical measures to ensure an appropriate
              level of security for the data that you process. Further, you
              hereby agree to comply with any requests which we may make to you
              regarding compliance with the General Data Protection Regulation
              or requests which you may receive from data subjects. If we find
              you are not in compliance with any of the requirements of this
              sub-part, we may terminate our relationship with you at our sole
              and exclusive discretion
            </p>
            <h2 className="heading2-tandc">
              15) REVERSE ENGINEERING & SECURITY
            </h2>
            <p>
              You agree not to undertake any of the following actions:
              <ol>
                <li>
                  a) Reverse engineer, or attempt to reverse engineer or
                  disassemble any code or software from or on any of our
                  websites or services;
                </li>
                <li>
                  b) Violate the security of any of our websites or services
                  through any unauthorized access, circumvention of encryption
                  or other security tools, data mining or interference to any
                  host, user or network.
                </li>
              </ol>
            </p>
            <h2 className="heading2-tandc">16) DATA LOSS</h2>
            <p>
              The Company does not accept responsibility for the security of
              your account or content. You agree that your participation in the
              Affiliate Program is at your own risk.
            </p>{" "}
            <h2 className="heading2-tandc">17) INDEMNIFICATION</h2>
            <p>
              You agree to defend and indemnify the Company and any of its
              agents (if applicable) and hold us harmless against any and all
              legal claims and demands, including reasonable attorney’s fees,
              which may arise from or relate to your use or misuse of the
              Affiliate Program, your breach of this Agreement, or your conduct
              or actions. You agree that the Company shall be able to select its
              own legal counsel and may participate in its own defense, if the
              Company wishes.
            </p>
            <h2 className="heading2-tandc">18) SPAM POLICY</h2>
            <p>
              You are strictly prohibited from using the Affiliate Program for
              illegal spam activities, including gathering email addresses and
              personal information from others or sending any mass commercial
              emails.
            </p>{" "}
            <h2 className="heading2-tandc">19) ENTIRE AGREEMENT</h2>
            <p>
              This Agreement constitutes the entire understanding between the
              Parties with respect to the Affiliate Program. This Agreement
              supersedes and replaces all prior or contemporaneous agreements or
              understandings, written or oral.
            </p>
            <h2 className="heading2-tandc">20) SERVICE INTERRUPTIONS</h2>
            <p>
              The Company may need to interrupt your access to the Affiliate
              Program to perform maintenance or emergency services on a
              scheduled or unscheduled basis. You agree that your access may be
              affected by unanticipated or unscheduled downtime, for any reason,
              but that the Company shall have no liability for any damage or
              loss caused as a result of such downtime.
            </p>
            <h2 className="heading2-tandc">21) NO WARRANTIES</h2>
            <p>
              You agree that your use of the Affiliate Program is at your sole
              and exclusive risk and that any services provided by us are on an
              “As Is” basis. The Company hereby expressly disclaims any and all
              express or implied warranties of any kind, including, but not
              limited to the implied warranty of fitness for a particular
              purpose and the implied warranty of merchantability. The Company
              makes no warranties that the Affiliate Program will meet your
              needs or that it will be uninterrupted, error-free, or secure. The
              Company also makes no warranties as to the reliability or accuracy
              of any information. You agree that any damage that may occur to
              you, through your computer system, or as a result of loss of your
              data from your use of the Affiliate Program is your sole
              responsibility and that the Company is not liable for any such
              damage or loss.
            </p>
            <h2 className="heading2-tandc">22) LIMITATION ON LIABILITY</h2>
            <p>
              The Company is not liable for any damages that may occur to you as
              a result of your participation in Affiliate Program, to the
              fullest extent permitted by law. The maximum liability of the
              Company arising from or relating to this Agreement is limited one
              hundred ($100) US Dollars. This section applies to any and all
              claims by you, including, but not limited to, lost profits or
              revenues, consequential or punitive damages, negligence, strict
              liability, fraud, or torts of any kind.
            </p>
            <h2 className="heading2-tandc">23) GENERAL PROVISIONS:</h2>
            <ol>
              <li>
                A) LANGUAGE: All communications made or notices given pursuant
                to this Agreement shall be in the English language.
              </li>
              <li>
                B) JURISDICTION, VENUE & CHOICE OF LAW: Through your
                participation in the Affiliate Program, you agree that
                California shall govern any matter or dispute relating to or
                arising out of this Agreement, as well as any dispute of any
                kind that may arise between you and the Company, with the
                exception of its conflict of law provisions. In case any
                litigation specifically permitted under this Agreement is
                initiated, the Parties agree to submit to the personal
                jurisdiction of the state and federal courts of the following
                county: Thousand Oaks, California. The Parties agree that this
                choice of law, venue, and jurisdiction provision is not
                permissive, but rather mandatory in nature. You hereby waive the
                right to any objection of venue, including assertion of the
                doctrine of forum non conveniens or similar doctrine.
              </li>
              <li>
                C) ARBITRATION: In case of a dispute between the Parties
                relating to or arising out of this Agreement, the Parties shall
                first attempt to resolve the dispute personally and in good
                faith. If these personal resolution attempts fail, the Parties
                shall then submit the dispute to binding arbitration. The
                arbitration shall be conducted in the following county: Thousand
                Oaks. The arbitration shall be conducted by a single arbitrator,
                and such arbitrator shall have no authority to add Parties, vary
                the provisions of this Agreement, award punitive damages, or
                certify a class. The arbitrator shall be bound by applicable and
                governing Federal law as well as the law of California. Each
                Party shall pay their own costs and fees. Claims necessitating
                arbitration under this section include, but are not limited to:
                contract claims, tort claims, claims based on Federal and state
                law, and claims based on local laws, ordinances, statutes or
                regulations. Intellectual property claims by the Company will
                not be subject to arbitration and may, as an exception to this
                sub-part, be litigated. The Parties, in agreement with this
                sub-part of this Agreement, waive any rights they may have to a
                jury trial in regard to arbitral claims.
              </li>
              <li>
                D) ASSIGNMENT: This Agreement, or the rights granted hereunder,
                may not be assigned, sold, leased or otherwise transferred in
                whole or part by you. Should this Agreement, or the rights
                granted hereunder, by assigned, sold, leased or otherwise
                transferred by the Company, the rights and liabilities of the
                Company will bind and inure to any assignees, administrators,
                successors, and executors.
              </li>
              <li>
                E) SEVERABILITY: If any part or sub-part of this Agreement is
                held invalid or unenforceable by a court of law or competent
                arbitrator, the remaining parts and sub-parts will be enforced
                to the maximum extent possible. In such condition, the remainder
                of this Agreement shall continue in full force.
              </li>
              <li>
                F) NO WAIVER: In the event that we fail to enforce any provision
                of this Agreement, this shall not constitute a waiver of any
                future enforcement of that provision or of any other provision.
                Waiver of any part or sub-part of this Agreement will not
                constitute a waiver of any other part or sub-part.
              </li>
              <li>
                G) HEADINGS FOR CONVENIENCE ONLY: Headings of parts and
                sub-parts under this Agreement are for convenience and
                organization, only. Headings shall not affect the meaning of any
                provisions of this Agreement.
              </li>
              <li>
                H) FORCE MAJEURE: The Company is not liable for any failure to
                perform due to causes beyond its reasonable control including,
                but not limited to, acts of God, acts of civil authorities, acts
                of military authorities, riots, embargoes, acts of nature and
                natural disasters, and other acts which may be due to unforeseen
                circumstances.
              </li>
              <li>
                I) ELECTRONIC COMMUNICATIONS PERMITTED: Electronic
                communications are permitted to both Parties under this
                Agreement, including e-mail or fax. For any questions or
                concerns, please email us at the following address:
                sales@hakunasupply.com.
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default termsAndConditions;
