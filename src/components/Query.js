import React from "react";

const query = props => {
  return (
    <div className="query">
      <input
        type="text"
        className="box"
        ref={input => (props.search = input)}
        onChange={props.change}
      />
      <button id="button">
        <i className="fa fa-search" />
      </button>
    </div>
  );
};

export default query;
