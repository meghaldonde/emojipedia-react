import React from "react";

function Heading(props) {
  return (
    <h1 className='header'>
      <span>{props.name}</span>
    </h1>
  );
}

export default Heading;
