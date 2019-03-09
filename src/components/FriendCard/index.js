import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
        <img src={props.image} text={props.name} alt={props.name} class="img-container" />
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
