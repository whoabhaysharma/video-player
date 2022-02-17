import { useEffect, useRef, useState } from "react";
import video from "./video/video.mp4";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playBtnIcon, setPlayBtnIcon] = useState("▶");
  const [currTime, setCurrTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [visibility, setVisibility] = useState("controlsHide");
  const [muteStatus, setMuteStatus] = useState("Mute");
  const vidRef = useRef(null);

  function playPauseHandler() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    setDuration(vidRef.current.duration)
    if (isPlaying) {
      vidRef.current.play();
      setPlayBtnIcon("◀");
      setInterval(function inside() {
        setCurrTime(vidRef.current.currentTime);
      }, 100);
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

  // backward forward handler
  function backwardForwardHandler(e) {
    let position = e.clientX;
    if (position < 210) {
      backward(5);
    } else if (position > 490) {
      forward(5);
    }
  }

  //backward forwrad functions
  function forward(c) {
    vidRef.current.currentTime = vidRef.current.currentTime + c;
  }

  function backward(c) {
    vidRef.current.currentTime = vidRef.current.currentTime - c;
  }


// formatter
function toHHMMSS(s){
  let m = s/60;
  m = Math.floor(m)
  let se = s - (m*60)
  se = Math.floor(se)
  let time= correctFormat(m,se);
  return time;
}

function correctFormat(min,sec){
  let minutes, second;
  if(min<10){
      minutes = "0" + min
  }else{
      minutes = min;
  }
  if(sec < 10){
      second = "0" + sec;
  }else{
      second = sec;
  }
  return minutes+":"+second
}
////




  return (
    <div
      className="player"
      onMouseEnter={hoverOnVideo}
      onMouseLeave={hoverOutVideo}
    >
      <video
        ref={vidRef}
        onDoubleClick={backwardForwardHandler}
        onClick={playPauseHandler}
        width={700}
        height={400}
      >
        <source src={video} type="video/mp4"></source>
      </video>
      <button id="muteBtn" onClick={muteControl}>
        {muteStatus}
      </button>
      <div className={visibility}>
        <div className="controls">
          <div className="timer">
            <p>{toHHMMSS(currTime)}/{toHHMMSS(duration)}</p>
          </div>
          <div className="center">
            <button
              className="forward-backward-btn"
              onClick={() => backward(5)}
            >
              -5 sec
            </button>
            <button onClick={playPauseHandler} id="play-btn">
              {playBtnIcon}
            </button>
            <button className="forward-backward-btn" onClick={() => forward(5)}>
              +5 sec
            </button>
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
          <progress id="file" value={currTime} max={duration}></progress>
        </div>
      </div>
    </div>
  );
}

export default Player;
