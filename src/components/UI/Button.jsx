const Button = ({ children, type='main', className, onClick, disabled }) => {
  return (
    <button
      className={`button button-${type} ${className} ${disabled && 'disabled'}`}
      disabled={disabled}
      onClick={() => onClick()}
    >
      <span>
        { children }
      </span>
    </button>
  )
}

export default Button;
