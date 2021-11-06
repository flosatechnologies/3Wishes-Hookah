import React, { Component } from "react";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class VideoScreenDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "",
    };
  }
  render() {
    return (
      <Container fluid={true}>
        This is the video screen
        <div className="container player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=a6EqXZSa8XY"
            className="react-player"
            playing
            controls={true}
          />
        </div>
      </Container>
    );
  }
}
