import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PaymentComponent.css";
import { AiOutlineEye } from "react-icons/ai";

function PaymentComponent() {
  return (
    <div className="container">
      <div className="row">
        <div>{props.paymentId}</div>
        <div>{props.customerName}</div>
        <div> {props.amountPaid} </div>
        <div> {props.time} </div>
        <div>
          <AiOutlineEye />
        </div>
      </div>
    </div>
  );
}

export default PaymentComponent;
