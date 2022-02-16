import React from "react";
import { useState } from "react";
function Form(props) {
  function BtnStyleFormSubmitHandler(e){
    e.preventDefault();
    props.getBtnStyleData(e.target[0].value, e.target[1].value)
    
  }

  function playerStyleFormSubmitHandler(e){
    e.preventDefault();
    props.getPlayerStyleData(e.target[0].value, e.target[1].value)
  }

  return (
    <>
      <form onSubmit={BtnStyleFormSubmitHandler}>
        <div className="input-box">
          <input
            type="color"
            min="1"
            max="100"
            className="color-picker"
            id="button-bg-color"
          ></input>

          <input
            type="color"
            min="1"
            max="100"
            className="color-picker"
            id="button-color"
          ></input>
          <button>Save</button>
        </div>
      </form>

      <form onSubmit={playerStyleFormSubmitHandler}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter the Width"
          ></input>

          <input
            type="text"
            placeholder="Enter the height"
          ></input>
          <button>Save</button>
        </div>
      </form>
    </>
  );
}

export default Form;
