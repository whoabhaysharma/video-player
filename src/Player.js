import React, { useEffect, useRef, useState } from "react";
import video from "./video/video.mp4";

function Player({btnStyle, playerStyle}) {
  const vidRef = useRef(null);
  const[btnDisplay, setBtnDisplay] = useState(btnStyle)
  const [isPlaying, setIsPlaying] = useState(false)

  
  
  const clickHandler = () => {
    setIsPlaying(!isPlaying)
  };

  useEffect(()=>{
    if (isPlaying) {
      vidRef.current.play();
    } else {
      vidRef.current.pause(); 
    }
  },[isPlaying])

  //this is added controls

  
 
  function videHoverHandler(){
    vidRef.current.controls = true;
  }

  function mouseLeaveHandler(){
    vidRef.current.controls = false;
  }

  return (
    <>
      <video
        onMouseEnter={videHoverHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={clickHandler}
        id="videoPlayer"
        ref={vidRef}
        width={playerStyle.width}
        height={playerStyle.height}
      >
        <source src={video} type="video/mp4"></source>
      </video>
      {!isPlaying && (
         <button id="btn" style={btnDisplay} onClick={clickHandler}></button>
      )}
       
    </>
  );
}

export default Player;