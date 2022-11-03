import IconArrowLeft from "../icons/IconArrowLeft";
import { useHistory } from "react-router";

const BackButton = ({ icon = <IconArrowLeft/> , title = 'Назад', action, className = ''}) => {
  const history = useHistory();

  const onClick = () => {
    if (action) return action();

    return history.goBack();
  }

  return (
    <a className={`button-back flex flex-aic gap-1 ${className}`} onClick={() => onClick()}>
      { icon }
      <span className="body body-5 font-color-bl">{ title }</span>
    </a>
  )
}

export default BackButton;
