import React from "react";
import Video from "./Video";
import Controls from "./Controls";
import "./style.css";
import { useState } from "react";

function Player({ size, controls }) {
  let visibility;
  if (controls === "none") {
    visibility = false;
  } else {
    visibility = true;
  }

  function hoverInHandler() {
    if (!visibility) {
      visibility = true;
      console.log(visibility);
    }
  }

  function hoverOutHandler() {
    visibility = false;
    console.log(visibility);
  }

  return (
    <div
      onMouseEnter={hoverInHandler}
      onMouseLeave={hoverOutHandler}
      className="main-box"
    >
      <Video size={size} />
      <Controls visibility={visibility} />
    </div>
  );
}

export default Player;
