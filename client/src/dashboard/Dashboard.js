import React from "react";

function Dashboard(props) {
  return (
    <div>
      <button onClick={props.ball}>Ball</button>
      <button onClick={props.strike}>Strike</button>
      <button onClick={props.hit}>Hit</button>
      <button onClick={props.foul}>Foul</button>
    </div>
  );
}

export default Dashboard;
