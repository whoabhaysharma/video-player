import React from "react";
import video from "./video.mp4"
function Video({size}) {
  console.log(size)
  return (
    
    <video width={size.width} height={size.height}>
      <source src={video} type="video/mp4"></source>
    </video>
  );
}

export default Video;
