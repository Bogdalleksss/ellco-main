import React, { useState } from 'react';
import OrderTariffInfo from "./OrderTariffInfo";

const OrderTariffCard = ({ active }) => {
  const [showDetails, updateShowDetails] = useState(false);

  return (
    <div className={`order-tariff ${active ? 'active' : ''}`}>
      <div className="order-tariff__card">
        <p className="body body-7 opacity-10">Телевидение</p>
        <p className="body body-3">MTC Kion</p>
        <span
          className="body body-7 opacity-10"
          onClick={() => updateShowDetails(!showDetails)}
        >
          { showDetails ? 'скрыть' : 'раскрыть' }
        </span>
      </div>
      { showDetails ? <OrderTariffInfo active={active}/> : <></> }
    </div>
  );
};

export default OrderTariffCard;
