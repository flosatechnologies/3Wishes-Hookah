import React from "react";
import "../css/Banner.css";
import { FaTruck } from "react-icons/fa";
import { BsClockHistory, BsGift } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="w d-flex align-items-center justify-content-around p-3 row ">
      <div className="col-md-3 p-2 ">
        <div className=" text-center text-white">
          <FaTruck size="70px" />
        </div>
        <div className="text-white fw-bold pt-2">
          <h5 className="text-center text-white fw-bold ">Free Delivery</h5>
          <p className="text-center ">For Order GH{"\u20B5 "}200 & Above</p>
        </div>
      </div>

      <div className="col-md-3 p-2">
        <div className="text-center text-white">
          <BsGift size="70px" />
        </div>
        <div className="text-white fw-bold pt-2">
          <h5 className="text-center text-white fw-bold">Free Delivery</h5>
          <p className="text-center ">For Order GH{"\u20B5 "}200 & Above</p>
        </div>
      </div>

      <div className="col-md-3 p-2 ">
        <div className="text-center text-white">
          <BsClockHistory size="70px" />
        </div>
        <div className="text-white fw-bold pt-2">
          <h5 className="text-center text-white fw-bold">Free Delivery</h5>
          <p className="text-center ">For Order GH{"\u20B5 "}200 & Above</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
