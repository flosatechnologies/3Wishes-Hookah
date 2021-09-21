import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PaymentComponent.css";
import { AiOutlineEye } from "react-icons/ai";

function PaymentComponent(props) {
  return (
    <div className="container componentContainer">
      <div className="paymentComponent">
        <div className="Index">{props.index}</div>
        <div className="PaymentId">{props.paymentId}</div>
        <div className="Customer">{props.customerName}</div>
        <div className="Amount"> {props.amountPaid} </div>
        <div className="Time"> {props.time} </div>
        <div>
          <button
            onClick={() => {
              props.Change("yes");
            }}
            style={{ backgroundColor: "transparent", borderStyle: "none" }}
          >
            <AiOutlineEye />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentComponent;
