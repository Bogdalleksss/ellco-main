import React, { useState } from 'react';

import OrderTariffCard from "./OrderTariffCard";

import Arrow from '@/assets/img/button-arrow--dark.svg'
import ArrowLight from '@/assets/img/button-arrow.svg'

import OrderVideoInfo from "./OrderVideoInfo";
import OrderVideo from "./OrderVideo";

const OrderCategoryCard = ({ type = 'TARIFF', title, active = false }) => {
  const [showDetails, updateShowDetails] = useState(false);

  return (
    <div className={`order-category ${active ? 'active' : ''}`}>
      <div
        className="order-category__block flex flex-aic flex-jcsb"
        onClick={() => updateShowDetails(!showDetails)}
      >
        <div className="order-category__info column">
          <p className="order-category__info__title body body-3 font-color-bl">{ title }</p>
          {/*<p>Технологии общения. Онлайн</p>*/}
        </div>
        <span>
          {
            active
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
                    <OrderTariffCard active={active} />
                    <OrderTariffCard />
                  </>
                : <OrderVideo />
            }
            </div>
          : <></>
      }
    </div>
  );
};

export default OrderCategoryCard;
