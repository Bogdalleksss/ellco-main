const Button = ({ children, type='main', className, onClick, disabled }) => {
  const onClickAction = () => {
    if (onClick) onClick();
    else return;
  }

  return (
    <button
      className={`button button-${type} ${className} ${disabled && 'disabled'}`}
      disabled={disabled}
      onClick={() => onClickAction()}
    >
      <span>
        { children }
      </span>
    </button>
  )
}

export default Button;
