const Button = ({ children, type='main', className, onClick, disabled, winType = 'default' }) => {
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
      <span className={winType === 'arrow' && 'wrapper-arrow-btn'}>
        { children }
      </span>
    </button>
  )
}

export default Button;
