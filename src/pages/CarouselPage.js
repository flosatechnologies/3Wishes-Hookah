import React from "react";
import "../css/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/yuri.jpg";
import image2 from "../assets/images/awesome.jpg";
import image3 from "../assets/images/tobias-nii-kwatei-quartey.jpg";
import image4 from "../assets/images/viktor1.jpg";
import HeaderPage from "../components/HeaderPage";
import FooterPage from "../components/FooterPage";
import { connect } from "react-redux";

const CarouselPage = (props) => {
  return (
    <div>
      <HeaderPage />
      <Carousel fade>
        <Carousel.Item>
          <img
            overflow="hidden"
            height="auto"
            width="100%"
            className="d-block w-100 carouselImage"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption text-left ">
            <h3
              style={{
                color: "#fff",
                fontFamily: "'Merienda', cursive",
                fontSize: "30px",
                position: "relative",
                textAlign: "center",
                top: "90px",
              }}
            >
              GHANA'S NUMBER 1 SMOKE SHOP
            </h3>
            {/*<p>3WishesHookah</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-caption text-left ">
            <h3>Highest Quality Hookah On The Market</h3>
            <p>3WishesHookah</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/*<h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={image4}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/*<h3>Forth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FooterPage />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(CarouselPage);
