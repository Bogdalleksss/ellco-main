const Button = ({ children, type='main', className }) => {
  return (
    <button className={`button button-${type} ${className}`}>
      { children }
    </button>
  )
}

export default Button;
