import Button from "@/components/UI/Button";
import IconSpeed from "@/components/icons/IconSpeed";
import IconPC from "@/components/icons/IconPC";
import IconCheckMark from "@/components/icons/IconCheckMark";

import DiscountLabel from "@/assets/img/discount-label.svg"
import MountainsTexture from "@/assets/img/mountain-texture.svg"

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

      <div className="width-full zi-2">
        <h3 className="mb-4">{ title }</h3>

        <div className="tariff-card__advantages">
          <div className="flex flex-aic gap-2">
            <IconSpeed fill={isGame ? '#FFFFFF' : '#054FD6'} />
            <p className="tariff-card__advantages__title body body-2">{ speed } Мбит/с</p>
          </div>
          <p className="tariff-card__advantages__content body body-7 opacity-10">скорость интернета</p>
        </div>

        <div className="tariff-card__advantages mb-6">
          <div className="tariff-card__advantages__title flex flex-aic gap-2">
            <IconPC fill={isGame ? '#FFFFFF' : '#054FD6'} />
            <p className="tariff-card__advantages__content body body-2">{ channels } каналов</p>
          </div>
        </div>

        {
          availables.map(available => (
            <div key={available.id} className="tariff-card__available flex flex-aic mb-3 gap-3">
              <IconCheckMark/>
              <p className="body body-6 opacity-10">{ available.title }</p>
            </div>
          ))
        }
      </div>

      <div className="width-full zi-2">
        <div className="flex mb-2 flex-jcc">
          { discount ? <p className="price-old mr-3">{ discount }</p> : <></> }
          <p className="price mr-2">{ price }</p>
          <p className="currency body body-7">руб./мес</p>
        </div>
        <Button className="width-full mb-1">Подключить</Button>
        <Button className="width-full mb-1" type="secondary">Подробнее</Button>
      </div>
    </div>
  )
}

export default TariffCard;
