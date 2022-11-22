import React, { useEffect, useState } from 'react';

import OrderTariffCard from "./OrderTariffCard";

import Arrow from '@/assets/img/button-arrow--dark.svg'
import ArrowLight from '@/assets/img/button-arrow.svg'

import OrderVideoInfo from "./OrderVideoInfo";
import OrderVideo from "./OrderVideo";
import { useSelector } from "react-redux";
import { useSettingsCams } from "../../../../hooks/useSettings";

const OrderCategoryCard = ({ type = 'TARIFF', title, active = false, category = ['standard'] }) => {
  const [showDetails, updateShowDetails] = useState(false);
  const [tariffsList, updateTariffsList] = useState([]);
  const tariffs = useSelector(state => state.tariffs.items);
  const selectedTariffs = useSelector(state => state.tariffs.selectedTariffs);

  const settingCams = useSettingsCams();

  const cams = settingCams();

  const activeCard = active || (type !== 'TARIFF' && (cams.camsCount || cams.camsForBuyTotal));

  useEffect(() => {
    updateTariffsList(tariffs.filter(tariff => category.includes(tariff.type)));
  }, [tariffs]);

  return (
    <div className={`order-category ${activeCard ? 'active' : ''}`}>
      <div
        className="order-category__block flex flex-aic flex-jcsb"
        onClick={() => updateShowDetails(!showDetails)}
      >
        <div className="order-category__info column">
          <p className="order-category__info__title body body-3 font-color-bl">{ title }</p>
        </div>
        <span>
          {
            activeCard
              ? <img
                  className={ showDetails ? 'open' : '' }
                  src={ArrowLight}
                  alt=""
                />
              : <img
                  className={ showDetails ? 'open' : '' }
                  src={Arrow}
                  alt=""
                />
          }
      </span>
      </div>
      {
        showDetails
          ? <div className="order-category__tariffs">
            {
              type === 'TARIFF'
                ? <>
                    { tariffsList.map(tariff => (
                      <OrderTariffCard
                        key={tariff._id}
                        active={selectedTariffs.some(item => item === tariff._id)}
                        category={title}
                        types={category}
                        tariff={tariff}
                      />
                    )) }
                  </>
                : <OrderVideo cams={cams} />
            }
            </div>
          : <></>
      }
    </div>
  );
};

export default OrderCategoryCard;
