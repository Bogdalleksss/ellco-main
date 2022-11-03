const Button = ({ children, type='main', className, onClick }) => {
  return (
    <button
      className={`button button-${type} ${className}`}
      onClick={() => onClick()}
    >
      { children }
    </button>
  )
}

export default Button;
