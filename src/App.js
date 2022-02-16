import logo from './logo.svg';
import './App.css';
import Player from './Player'
import Form from './Form';
import { useState } from 'react';


function App() {

  const [btnStyle, setBtnStyle] = useState({})
  const [playerStyle, setPlayerStyle] = useState({width: 700, height: 400})
  function getBtnStyleData(bgColor, btnColor){
    setBtnStyle({backgroundColor: String(bgColor), color: btnColor})
    console.log(bgColor, btnColor)
  }
  function getPlayerStyleData(w,h){
    setPlayerStyle({width: w, height: h})
  }
  return (
    <>
    <Form getBtnStyleData={getBtnStyleData} getPlayerStyleData={getPlayerStyleData} />
    <Player btnStyle={btnStyle} playerStyle={playerStyle}/>
    </>
  );
}

export default App;
