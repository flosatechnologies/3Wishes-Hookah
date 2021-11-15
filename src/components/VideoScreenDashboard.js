import React, { Component } from "react";
import ReactPlayer from "react-player";
import { MdKeyboardBackspace } from "react-icons/md";
import "../css/videoScreenDashboard.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { AddVideos, getVideos } from "../Store/videoActions";

class VideoScreenDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "",
      addVideo: "inactivevidbtn",
      editVideo: "inactivevidbtn",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.AddVideos(this.state.videoUrl);
  }
  componentDidMount() {
    this.props.getVideos();
  }

  handleRenderScreen() {
    if (this.state.addVideo === "activevidbtn") {
      return (
        <Container fluid={true} className="addVideoFormMainBox">
          <Row className="addVideoFormFirstSubBox">
            <Col xxl={3} xl={3} lg={3} md={2} sm={0} xs={0}></Col>
            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={8}
              sm={12}
              xs={12}
              className="addVideoFormSecondSubBox"
            >
              <Form>
                <Form.Group>
                  <Form.Label>Video url</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Eg: https://www.youtube.com/watch?v=a6EqXZSa8XY "
                    value={this.state.videoUrl}
                    onChange={(Event) => {
                      this.setState({ videoUrl: Event.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="submit"
                    value="add"
                    onClick={(Event) => {
                      this.handleSubmit(Event);
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }

    if (this.state.editVideo === "activevidbtn") {
      return (
        <Container fluid={true} className="editVideoFormMainBox">
          <Row className="editVideoFormFirstSubBox">
            <Col xxl={3} xl={3} lg={3} md={2} sm={0} xs={0}></Col>
            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={8}
              sm={12}
              xs={12}
              className="editVideoFormSecondSubBox"
            >
              <Form className="editVideoForm">
                <Form.Group>
                  <Form.Label>Video url</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Eg: https://www.youtube.com/watch?v=a6EqXZSa8XY "
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="submit" value="update" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="toolsbuttonSection">
          <Col xxl={2} xl={2} lg={2} md={3} sm={3} xs={3} className="">
            <button
              onClick={() => {
                this.setState({
                  addVideo: "activevidbtn",
                  editVideo: "inactivevidbtn",
                });
              }}
              className="addVideoButton"
              id={this.state.addVideo}
            >
              Add Video
            </button>
          </Col>
          <Col xxl={2} xl={2} lg={2} md={3} sm={3} xs={3} className="">
            <button
              onClick={() => {
                this.setState({
                  editVideo: "activevidbtn",
                  addVideo: "inactivevidbtn",
                });
              }}
              className="editVideoButton"
              id={this.state.editVideo}
            >
              Edit Video
            </button>
          </Col>
          <Col
            xxl={{ span: 3, offset: 5 }}
            xl={{ span: 3, offset: 5 }}
            lg={{ span: 3, offset: 5 }}
            md={{ span: 3, offset: 3 }}
            sm={{ span: 3, offset: 3 }}
            xs={{ span: 3, offset: 3 }}
            className=" userScreenBackButtonContainer"
          >
            <button
              onClick={() => {
                this.setState({
                  addVideo: "inactivevidbtn",
                  editVideo: "inactivevidbtn",
                });
              }}
              className="userScreenBackButton"
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </Col>
        </Row>
        <Row className="d-sm-flex align-items-center justify-content-center pt-5 ">
          <Col
            xxl={10}
            xl={10}
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className="player-wrapper-videoDashboard"
          >
            {this.props.videos.videos.map((video) => {
              return (
                <ReactPlayer
                  url={video.url}
                  className="react-player-videoDashboard"
                  onPause
                  controls={true}
                />
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col>{this.handleRenderScreen()}</Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.videos);
  return { videos: state.videos };
};

const mapDispatchToProps = () => {
  return { AddVideos, getVideos };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(VideoScreenDashboard);
