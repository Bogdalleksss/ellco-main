const RadioButton = ({ id, label, name }) => {
  return (
    <div className="radio flex flex-aic gap-1">
      <input id={id} type="radio" name={name}/>
      <label htmlFor={id} className="body body-9 font-color-bl">{ label }</label>
    </div>
  )
}

export default RadioButton;
