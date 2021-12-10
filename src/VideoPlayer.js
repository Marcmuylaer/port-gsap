import React, { Component } from 'react';
import videoFile from './lord.mp4';
import './VideoPlayer.css';

class VideoPlayer extends Component {
  video = React.createRef();

  playVideo = e => {
    this.video.current.play();
  };

  stopVideo = e => {
    this.video.current.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          className="video-player__source"
          src={videoFile}
          ref={this.video}
        />
        <nav>
          <button className="btn-play" onClick={this.playVideo}>
            Play
          </button>
          <button className="btn-stop" onClick={this.stopVideo}>
            Stop
          </button>
        </nav>
      </div>
    );
  }
}

export default VideoPlayer;