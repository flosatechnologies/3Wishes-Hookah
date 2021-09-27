import React from "react";

export default function ReceiptComponent(props) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">{props.item}</div>
        <div className="col-lg-2">{props.qty}</div>
        <div className="col-lg-2">{props.price}</div>
        <div className="col-lg-2">{props.total}</div>
      </div>
    </div>
  );
}
