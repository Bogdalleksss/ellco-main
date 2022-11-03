import Button from "@/components/UI/Button";
import DiscountLabel from "@/assets/img/discount-label.svg"
import MountainsTexture from "@/assets/img/mountain-texture.svg"
import TariffInfo from "./TariffInfo";
import { Link } from "react-router-dom";
import TariffInfoKion from "./TariffInfoKion";
import TariffInfoSmotreshka from "./TariffInfoSmotreshka";
import TariffInfoPhone from "./TariffInfoPhone";

const TariffCard = ({ tariff }) => {
  const {
    price,
    discount,
    free_month,
    type,
  } = tariff;

  const isGame = type === 'GAME';

  return (
    <div className={`tariff-card flex column flex-jcsb p-6 ${ isGame ? 'game-mode' : '' }`}>
      { discount ? <img className="zi-2" src={DiscountLabel} alt=""/> : <></> }
      { isGame ? <img className="game-mode__texture zi-1" src={MountainsTexture} alt=""/> : <></> }

      {
        type === 'KION'
          ? <TariffInfoKion
              title={tariff.title}
              available={tariff.available}
            />
          : type === 'SMOTR'
            ? <TariffInfoSmotreshka
                title={tariff.title}
                channels={tariff.channels}
                availables={tariff.availables}
                movie={tariff.movie}
              />
            : type === 'PHONE'
              ? <TariffInfoPhone
                  title={tariff.title}
                />
              : <TariffInfo
                  title={tariff.title}
                  speed={tariff.speed}
                  channels={tariff.channels}
                  availables={tariff.availables}
                  isGame={tariff.isGame}
                />
      }

      <div className="width-full zi-2">
        { free_month ? <p className="body body-8 ta-c font-color-gr mb-1">Первый месяц 0 ₽</p> : <></> }
        <div className="flex mb-2 flex-jcc">
          { discount ? <p className="price-old mr-3">{ discount }</p> : <></> }
          <p className="price mr-2">{ price }</p>
          <p className="currency body body-7">руб./мес</p>
        </div>
        <Link to="/order">
          <Button className="width-full mb-1">Подключить</Button>
        </Link>
        {
          !['KION', 'SMOTR'].includes(type)
            ? <Button className="width-full mb-1" type="secondary">Подробнее</Button>
            : <></>
        }
      </div>
    </div>
  )
}

export default TariffCard;
