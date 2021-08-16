import React from "react";
import "../css/checkout.css";
import { FaCheckCircle } from "react-icons/fa";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import Flutterwave from "../components/Flutterwave";

function CheckoutScreen() {
  return (
    <div>
      <HeaderPage />
      <div className="checkoutMainContainer">
        <div className="container ">
          <div className="container addressDetailContainer">
            <div className="row addressDetailsHeader">
              <div className="col-lg-6">
                <FaCheckCircle color="#eeeeee" /> 1. ADDRESS DETAILS
              </div>
              <div className="col-lg-6 editButtonContainer">
                <button className="editButton">Edit</button>
              </div>
            </div>
            <div className="row theAddressDetailsContainer">
              <div className="customerName">Josua Oppong</div>
              <div>
                Blue top estate, House Number HE 44/4, blue top, next to Unique
                Star International School,
              </div>
              <div>Kasoa, Central Region</div>
              <div>+233 244 443 322</div>
            </div>
          </div>
          <div className="container deliveryMethodContainer">
            <div className="row deliveryMethodHeader">
              <div className="col-lg-12">
                <FaCheckCircle color="#eeeeee" /> 2. DELIVERY METHOD
              </div>
            </div>
            <div className="row deliveryMethodDetailsContainer">
              <div>Choose how you want your order delivered </div>
              <div className="methodOneSection">
                <div>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    id="pickUpMethodOne"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingBottom: "0px" }}
                    htmlFor="pickUpMethodOne"
                  >
                    Pick up from our shop (No Fees Charged)
                  </label>
                </div>
                <p className="methodDescription">
                  Ready for pick up after 4hrs of order
                </p>
              </div>
              <div className="methodTwoSection">
                <input
                  type="radio"
                  name="deliveryMethod"
                  id="pickUpMethodTwo"
                />
                <label
                  style={{ marginBottom: "0px", paddingBottom: "0px" }}
                  htmlFor="pickUpMethodTwo"
                >
                  Home or Office delivery
                </label>
                <div className="methodDescription">
                  Normally delivered between 24 hrs and 48hrs after Order has
                  been made
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/**  <div className="col-lg-12 confirmButtonContainer">
              <button className="confirmButton">Confirm Order</button>
             </div> */}
            <Flutterwave />
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

export default CheckoutScreen;
