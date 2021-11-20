import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../css/SpecialCard.css";

const Card = (props) => {
  return (
    <div className="card text-center shadow ">
      <div className="overflow">
        <img src={props.imgsrc} alt="card" className="card-img-top" />
        <div className="card-body text-dark">
          <h4 className="card-title text-success">{props.title}</h4>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            {props.item}
          </p>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            {props.item1}
          </p>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            {props.item2}
          </p>
          <p className="card-text text-primary">
            <FaCheck className="fa" />
            {props.item3}
          </p>

          <a href="tel:+233546835848" className="btn btn-outline-danger">
            Subscribe Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
