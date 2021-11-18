import React from "react";
import imgcard from "../../assets/images/airpods.jpg";
import { FaCheck } from "react-icons/fa";
import "../../css/SpecialCard.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={imgcard} alt="card" className="card-img-top" />
        <div className="card-body text-dark">
          <h4 className="card-title">Mystry Box</h4>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            Hookah Flavours
          </p>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            Hookah Grommets
          </p>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            Hookah Stems
          </p>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            Vanilla Flavour
          </p>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            Hookah Hoses
          </p>
          <a href="/" className="btn btn-outline-success">
            Subscribe Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
