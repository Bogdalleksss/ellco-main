import Button from "@/components/UI/Button";
import DiscountLabel from "@/assets/img/discount-label.svg"
import MountainsTexture from "@/assets/img/mountain-texture.svg"
import TariffInfo from "./TariffInfo";
import { Link, useHistory } from "react-router-dom";
import TariffInfoKion from "./TariffInfoKion";
import TariffInfoSmotreshka from "./TariffInfoSmotreshka";
import TariffInfoPhone from "./TariffInfoPhone";
import { useDispatch } from "react-redux";
import { selectTariff } from "../../../../store/tariffs";
import IconClose from "../../../icons/IconClose";
import { useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";

const TariffCard = ({ tariff, withoutMore = false, isModal = false, onMore, onClose }) => {
  const {
    _id,
    price,
    newPrice,
    firstMonthFree,
    description,
    type,
    priceDisplayCustom
  } = tariff;
  const dispatch = useDispatch();
  const history = useHistory();

  const [html, updateHtml] = useState();

  useEffect(() => {
      if (description) {
        const replaced = description.replace(/&quot;/gi, '"');
        console.log(replaced);
        updateHtml(draftToHtml(JSON.parse(replaced)));
      }
  }, [tariff]);

  const isGame = type === 'game';

  const connectTariff = () => {
    dispatch(selectTariff(_id))
    history.push(`/order/${_id}`)
  }

  return (
    <div className={`tariff-card flex column flex-jcsb p-6 ${ isGame && 'game-mode' } ${isModal && 'modal'}`}>
      { isModal && <div className="modal-close" onClick={onClose}> <IconClose fill="black" /> </div> }
      { newPrice && <img className="zi-2" src={DiscountLabel} alt=""/> }
      { isGame && <img className="game-mode__texture zi-1" src={MountainsTexture} alt=""/> }

      {
        type === 'kion'
          ? <TariffInfoKion
              title={tariff.title}
              kion={tariff.kionServiceDescription}
              mts={tariff.mtsServiceDescription}
            />
          : type === 'smotroshka'
            ? <TariffInfoSmotreshka
                title={tariff.title}
                channels={tariff.channelsCount}
                tags={tariff.tags}
                movies={tariff.externalServices}
              />
            : type === 'telephony'
              ? <TariffInfoPhone
                  title={tariff.title}
                  firstMinutePrice={tariff.firstMinutePrice}
                  localTelephoneСonnectionsType={tariff.localTelephoneСonnectionsType}
                  tags={tariff.tags}
                />
              :
              <TariffInfo
                  title={tariff.title}
                  speed={tariff.speedMbs}
                  channels={tariff.channelsCount}
                  tags={tariff.tags}
                  isGame={isGame}
                  isModal={isModal}
                />
      }

      {
        (isModal && description) && <div className="modal-description" dangerouslySetInnerHTML={{ __html: html }}>
          </div>
      }

      <div className="width-full zi-2 modal-footer">
        { firstMonthFree ? <p className="body body-8 ta-c font-color-gr mb-1">Первый месяц 0 ₽</p> : <></> }
        <div className="flex mb-2 flex-jcc">
          { newPrice ? <p className="price-old mr-3">{ price }</p> : <></> }
          <p className="price mr-2">{ newPrice || price }</p>
          <p className="currency body body-7">руб/{ priceDisplayCustom || 'мес' }</p>
        </div>
        <Button
          className="width-full mb-1"
          onClick={() => connectTariff()}
        >
          Подключить
        </Button>
        {
          !withoutMore
            && <Button
                  className="width-full mb-1"
                  type="secondary"
                  onClick={onMore}
                >
                  Подробнее
                </Button>
        }
      </div>
    </div>
  )
}

export default TariffCard;
