import classes from "./Inputs.module.css";

import React, { useRef } from "react";

const Inputs = React.forwardRef((props, ref) => {
  console.log(ref);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Inputs;
