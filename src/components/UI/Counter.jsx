import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const Counter = ({ className = '', value, onChange, disabled, max = 100, min = 0 }) => {
  const counting = (num) => {
    if (num > max || num < min) return

    onChange(num);
  }

  return (
    <div className={`counter flex flex-aic gap-2 ${className} ${disabled && 'opacity-10'}`}>
      <button
        className="flex flex-aic flex-jcc"
        disabled={disabled}
        onClick={() => counting(value - 1)}
      >
        <MinusIcon />
      </button>
      <div className="counter__num flex flex-aic flex-jcc body body-9 font-color-bld">
        { value }
      </div>
      <button
        className="flex flex-aic flex-jcc"
        disabled={disabled}
        onClick={() => counting(value + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export default Counter;
