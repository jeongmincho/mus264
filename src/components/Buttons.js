import React from "react";

const buttons = props => {
  return (
    <div className="buttons">
      <button onClick={props.handler.bind(this, 0)}>Week 1</button>
      <button onClick={props.handler.bind(this, 1)}>Week 2</button>
      <button onClick={props.handler.bind(this, 2)}>Week 3</button>
      <button onClick={props.handler.bind(this, 3)}>Week 4</button>
      <button onClick={props.handler.bind(this, 4)}>Week 5</button>
      <button onClick={props.handler.bind(this, 5)}>Week 6</button>
      <button onClick={props.handler.bind(this, 6)}>Week 7</button>
      <button onClick={props.handler.bind(this, 7)}>Week 8</button>
      <button onClick={props.handler.bind(this, 8)}>Week 9</button>
      <button onClick={props.handler.bind(this, 9)}>Week 10</button>
      <button onClick={props.handler.bind(this, 10)}>Week 11</button>
      <button onClick={props.handler.bind(this, 11)}>Week 12</button>
    </div>
  );
};

export default buttons;
