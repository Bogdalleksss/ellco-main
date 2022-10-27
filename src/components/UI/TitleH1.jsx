import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';

const TitleH1 = ({ children, color = '#054FD6', className = '' }) => {
  return (
    <Fade bottom duration={1500}>
      <h1
        style={{ color }}
        className={`flex ${className}`}
      >
        <IconStripes fill={color} />
        <span>{ children }</span>
      </h1>
    </Fade>
  )
}

export default TitleH1;
