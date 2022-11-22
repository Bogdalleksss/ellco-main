const TextInput = ({ type = 'text', label, placeholder, prepend, value, onChange, disabled }) => {
  return (
    <div className={`input-text ${disabled && 'opacity-10'}`}>
      { label ? <label className="body body-7 font-color-bld opacity-10">{ label }</label> :<></> }
      <div className={ `flex flex-aic ${prepend ? 'prepend-wrapper' : ''}` }>
        { prepend ? <div className="prepend">{ prepend }</div> : <></> }
        <input
          className="pt-2 pb-2"
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          value={value}
          onChange={(val) => onChange(val.target.value)}
        />
      </div>
    </div>
  )
}

export default TextInput;
