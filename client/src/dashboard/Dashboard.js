import React from "react";

function Dashboard(props) {
  return (
    <div>
      <button onClick={props.ball}>Ball-btn</button>
      <button onClick={props.strike}>Strike-btn</button>
      <button onClick={props.hit}>Hit-btn</button>
      <button onClick={props.foul}>Foul-btn</button>
    </div>
  );
}

export default Dashboard;
