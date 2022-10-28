const TextInput = ({ label, placeholder }) => {
  return (
    <div className="input-text">
      <label className="body body-7 font-color-bld opacity-10">{ label }</label>
      <input className="pt-2 pb-2" placeholder={placeholder} type="text"/>
    </div>
  )
}

export default TextInput;
