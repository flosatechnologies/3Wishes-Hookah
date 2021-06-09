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
          <AiOutlineEye />
        </div>
      </div>
    </div>
  );
}

export default PaymentComponent;
