import classes from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";
import Inputs from "../../UI/Inputs";
function MealItemForm(props) {
  const [amountIsvalid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(amountInputRef);
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Inputs
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsvalid && <p>please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
