const Button = ({ children, type='main', className, onClick, disabled }) => {
  return (
    <button
      className={`button button-${type} ${className} ${disabled && 'disabled'}`}
      disabled={disabled}
      onClick={() => onClick()}
    >
      { children }
    </button>
  )
}

export default Button;
