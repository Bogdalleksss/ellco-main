import { useState } from "react";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const Counter = ({ className = '' }) => {
  const [count, updateCount] = useState(0);

  const max = 5;
  const min = 0;

  const counting = (num) => {
    if (num > max || num < min) return

    updateCount(num);
  }

  return (
    <div className="counter flex flex-aic gap-2">
      <button
        className="flex flex-aic flex-jcc"
        onClick={() => counting(count - 1)}
      >
        <MinusIcon />
      </button>
      <div className="counter__num flex flex-aic flex-jcc body body-9 font-color-bld">
        { count }
      </div>
      <button
        className="flex flex-aic flex-jcc"
        onClick={() => counting(count + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export default Counter;
