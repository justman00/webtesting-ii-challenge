import React from "react";

function Display(props) {
  return (
    <div>
      <div>Strikes: {props.strikes}</div>
      <div>Balls: {props.balls}</div>
    </div>
  );
}

export default Display;
