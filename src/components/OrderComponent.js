import React from "react";

export default function OrderComponent(props) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-8">{props.item}</div>
        <div className="col-lg-4">{props.qty}</div>
      </div>
    </div>
  );
}
