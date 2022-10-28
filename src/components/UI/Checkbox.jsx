const Checkbox = ({ id, children }) => {
  return (
    <div className="checkbox flex flex-aic gap-1">
      <input id={id} type="checkbox" />
      <label htmlFor={id} className="body body-9 font-color-bl">{ children }</label>
    </div>
  )
}

export default Checkbox;
