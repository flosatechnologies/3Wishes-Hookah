import React, { Component } from "react";
import Card from "./SpecialCard";
import cardimg from "../../assets/images/slide3.jpg";
import cardimg1 from "../../assets/images/slide5.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center pt-5">
        <div className="row pt-5">
          <div className="col-md-6">
            <Card
              imgsrc={cardimg}
              title="Mystry Box"
              item="Hookah Grommets"
              item1="Hookah Flavours"
              item2="Hookah Stems"
              item3="Vanilla Flavour"
            />
          </div>
          <div className="col-md-6">
            <Card
              imgsrc={cardimg1}
              title="Accessories"
              item="Hookah Cleaner"
              item1="Hookah Hoes"
              item2="Hookah Bowl"
              item3="Vanilla Jar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
