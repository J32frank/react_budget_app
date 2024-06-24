import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const { newBudget, setNewBudget } = useState(budget);
  const handleChange = (e) => {
    setNewBudget(e.target.value)
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: £{newBudget}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={ handleChange }
        placeholder='0'
      />
    </div>
  );
};
export default Budget;
