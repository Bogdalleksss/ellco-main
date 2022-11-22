const Checkbox = ({ id, children, value, onChange, disabled }) => {
  return (
    <div className={`checkbox flex flex-aic gap-1 ${disabled && 'opacity-10'}`}>
      <input
        id={id}
        type="checkbox"
        value={value}
        onChange={val => onChange(val.target.checked)}
        disabled={disabled}
      />
      <label htmlFor={id} className="body body-9 font-color-bl">{ children }</label>
    </div>
  )
}

export default Checkbox;
