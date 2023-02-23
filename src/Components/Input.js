import React from "react";

export const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
      onChange={props.onchange}
    />
  );
};
