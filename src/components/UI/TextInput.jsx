const TextInput = ({ label, placeholder, prepend }) => {
  return (
    <div className="input-text">
      { label ? <label className="body body-7 font-color-bld opacity-10">{ label }</label> :<></> }
      <div className={ `flex flex-aic ${prepend ? 'prepend-wrapper' : ''}` }>
        { prepend ? <div className="prepend">{ prepend }</div> : <></> }
        <input className="pt-2 pb-2" placeholder={placeholder} type="text"/>
      </div>
    </div>
  )
}

export default TextInput;
