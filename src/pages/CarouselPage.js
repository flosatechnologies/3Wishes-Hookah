import React from "react";
import "../css/Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/yuri.jpg";
import image2 from "../assets/images/awesome.jpg";
import image3 from "../assets/images/tobias-nii-kwatei-quartey.jpg";
import image4 from "../assets/images/viktor1.jpg";

const CarouselPage = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="img">
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption className="carousel-caption text-left ">
            <h3>Highest Quality Hookah On The Market</h3>
            <p>3WishesHookah</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Forth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;