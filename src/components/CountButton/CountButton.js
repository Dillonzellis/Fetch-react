import "./CountButton.css";
import { useState } from "react";

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const clickHandler = (e) => {
    setCurrentCount(currentCount + props.incrementBy);
  };

  return (
    <div>
      <button onClick={clickHandler}>+{props.incrementBy}</button>
      <div className="countDisplay">{currentCount}</div>
    </div>
  );
};

export default CountButton;
