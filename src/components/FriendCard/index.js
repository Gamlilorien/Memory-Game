import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
        <img src={props.image} text={props.name} alt={props.name} className="img-container" onClick={() => props.clickStatus(props.id)}/>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
