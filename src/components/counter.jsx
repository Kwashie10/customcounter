import { useState } from "react";
import { Link } from "react-router-dom";
import { useCount } from "./useCount";
import "../styles.css";


export default function Counter() {
  const {count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="counter">
       
      <h1 className="col">{count}</h1>
      <button className="colbtn" onClick={increment}>increment</button>
      <button className="colbtn" onClick={decrement}>decrement</button>
      <button className="colbtn" onClick={reset}>reset</button>
      <input  value={newCount} type="number" onChange={handleOnChange} />
      <button className="colbtn" onClick={handleOnClick}>Set count value</button>


      <Link to="/">
        {" "}
        <p className="btnss">Back to Hompage</p>{" "}
        
      </Link>
    
    </div>
  );
}
