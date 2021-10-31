import React from "react";
import ReactPlayer from "react-player";
import "../css/Player.css";

const Video = () => {
  return (
    <div className="container d-sm-flex align-items-center justify-content-center pt-5 ">
      <div className="container player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=a6EqXZSa8XY"
          className="react-player"
          playing
          controls={true}
        />
      </div>
    </div>
  );
};

export default Video;
