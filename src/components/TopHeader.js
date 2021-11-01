import React from "react";
import "../css/TopHeader.css";

const TopHeader = () => {
  return (
    <div className="HeaderTop d-flex align-items-center justify-content-around pt-2 ">
      <h6 className="text-center">
        Free Delivery on all domestic orders above GH{"\u20B5 "}200
      </h6>
    </div>
  );
};

export default TopHeader;
