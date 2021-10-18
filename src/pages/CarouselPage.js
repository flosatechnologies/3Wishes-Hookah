import React from "react";
import "../css/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/slide1.jpg";
import image2 from "../assets/images/slide2.jpg";
import image3 from "../assets/images/slide3.jpg";
import image4 from "../assets/images/slide5.jpg";
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
            object-fit="cover"
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
            <h3
              style={{
                color: "#fff",
                top: "0",
                left: "0px",
                fontFamily: "'Merienda', cursive",
                fontSize: "30px",
                position: "absolute",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Ultimate & flavorful smoking experience
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            object-fit="cover"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3
              style={{
                color: "#fff",
                top: "0",
                left: "0px",
                fontFamily: "'Merienda', cursive",
                fontSize: "30px",
                position: "absolute",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Lounge Bar
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={image4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3
              style={{
                color: "#fff",
                top: "83px",
                left: "0px",
                fontFamily: "'Merienda', cursive",
                fontSize: "30px",
                position: "absolute",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Top quality imported tobacco flavors
            </h3>
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
