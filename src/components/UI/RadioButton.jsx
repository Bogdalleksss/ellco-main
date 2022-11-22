const RadioButton = ({ id, label, name, className, value, onChange, checked, disabled }) => {
  return (
    <div className={`radio flex flex-aic gap-1 ${className} ${disabled && 'opacity-10'}`}>
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        value={value}
        onChange={val => onChange(val.target.value)}
        disabled={disabled}
      />
      <label htmlFor={id} className="body body-9 font-color-bl">{ label }</label>
    </div>
  )
}

export default RadioButton;
