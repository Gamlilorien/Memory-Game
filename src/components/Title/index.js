import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title">
    <img className="atlogo" src="https://raw.githubusercontent.com/Gamlilorien/Memory-Game/master/public/images/Adventure_Time_logo.png" alt="logo" />
    <h1 className="title">{props.children}</h1>
  </div>);
  ;
}

export default Title;
