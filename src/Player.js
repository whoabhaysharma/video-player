import { useEffect, useRef, useState } from "react";
import video from "./video/video.mp4";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playBtnIcon, setPlayBtnIcon] = useState("▶");
  const [timeLeft, setTimeLeft] = useState(0);
  const [duration, setDuration] = useState(0);
  const [visibility, setVisibility] = useState("controlsHide");
  const [muteStatus, setMuteStatus] = useState("Mute");
  const vidRef = useRef(null);

  function playPauseHandler() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    setDuration(vidRef.current.duration);
    if (isPlaying) {
      vidRef.current.play();
      setPlayBtnIcon("◀");
    } else {
      vidRef.current.pause();
      setPlayBtnIcon("▶");
    }
  }, [isPlaying]);

  function muteControl() {
    if (vidRef.current.muted) {
      vidRef.current.muted = false;
      setMuteStatus("Mute");
    } else {
      vidRef.current.muted = true;
      setMuteStatus("Unmute");
    }
  }

  setInterval(function inside() {
    setTimeLeft(vidRef.current.currentTime);
  }, 100);

  function volumeControl(e) {
    vidRef.current.volume = e.target.value / 100;
  }

  // controls show/hide on video hover
  function hoverOnVideo() {
    setVisibility("controlsShow");
  }
  function hoverOutVideo() {
    setVisibility("controlsHide");
  }

  return (
    <div
      className="player"
      onMouseEnter={hoverOnVideo}
      onMouseLeave={hoverOutVideo}
    >
      <video ref={vidRef} onClick={playPauseHandler} width={700} height={400}>
        <source src={video} type="video/mp4"></source>
      </video>
      <button id="muteBtn" onClick={muteControl}>
        {muteStatus}
      </button>
      <div className={visibility}>
        <div className="controls">
          <div className="play-btn-timer">
            <button onClick={playPauseHandler} id="play-btn">
              {playBtnIcon}
            </button>

            <p>{Math.floor(timeLeft)}</p>
          </div>
          <div className="volume">
            <input
              onChange={volumeControl}
              type="range"
              min="1"
              max="100"
              class="slider"
            ></input>
          </div>
        </div>
        <div className="progress-bar">
          <progress id="file" value={timeLeft} max={duration}></progress>
        </div>
      </div>
    </div>
  );
}

export default Player;
