import React, { useEffect, useState } from 'react';
import './style.css'
function Controls({visibility}) {
    const [displayControls, setDisplayControls] = useState("control-box-show")
    useEffect(()=>{
      console.log("visibility changed")
    },[visibility])
    return ( 
        <div className={displayControls}>
        <div className="controls">
          <div className="timer">
            <p>
              33:00/33:00
            </p>
          </div>
          <div className="center">
            <button
              className="forward-backward-btn"
            >
              -5 sec
            </button>
            <button id="play-btn">
            </button>
            <button
              className="forward-backward-btn"
            >
              +5 sec
            </button>
          </div>
          <div className="volume">
            <input
              type="range"
              min="1"
              max="100"
              class="slider"
            ></input>
          </div>
        </div>
        <div className="progress-bar">
          <progress id="file" value="34" max="100"></progress>
        </div>
      </div>
     );
}

export default Controls;