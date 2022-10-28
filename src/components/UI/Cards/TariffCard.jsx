import Button from "@/components/UI/Button";
import DiscountLabel from "@/assets/img/discount-label.svg"
import MountainsTexture from "@/assets/img/mountain-texture.svg"
import TariffInfo from "../TariffInfo";
import { Link } from "react-router-dom";

const TariffCard = ({ tariff }) => {
  const {
    title,
    speed,
    channels,
    availables,
    price,
    discount,
    type,
  } = tariff;

  const isGame = type === 'GAME';

  return (
    <div className={`tariff-card flex column flex-jcsb p-6 ${ isGame ? 'game-mode' : '' }`}>
      { discount ? <img className="zi-2" src={DiscountLabel} alt=""/> : <></> }
      { isGame ? <img className="game-mode__texture zi-1" src={MountainsTexture} alt=""/> : <></> }

      <TariffInfo
        title={title}
        speed={speed}
        channels={channels}
        availables={availables}
        isGame={isGame}
      />

      <div className="width-full zi-2">
        <div className="flex mb-2 flex-jcc">
          { discount ? <p className="price-old mr-3">{ discount }</p> : <></> }
          <p className="price mr-2">{ price }</p>
          <p className="currency body body-7">руб./мес</p>
        </div>
        <Link to="/order">
          <Button className="width-full mb-1">Подключить</Button>
        </Link>
        <Button className="width-full mb-1" type="secondary">Подробнее</Button>
      </div>
    </div>
  )
}

export default TariffCard;
