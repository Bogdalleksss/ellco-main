import React from 'react';
import IconSpeed from "../../../icons/IconSpeed";
import IconPC from "../../../icons/IconPC";
import IconCheckMark from "../../../icons/IconCheckMark";

const OrderTariffInfo = ({ active }) => {
  return (
    <div className="order-tariff-info">
      <div className="order-tariff-info__item">
        <div className="flex flex-aic gap-2">
          <IconSpeed fill={active ? '#FFFFFF' : '#054FD6'} />
          <p className="order-tariff-info__item__title body body-2">70 Мбит/с</p>
        </div>
        <p className="order-tariff-info__item__content body body-7 opacity-10">скорость интернета</p>
      </div>

      <div className="order-tariff-info__item mb-6">
        <div className="order-tariff-info__item__title flex flex-aic gap-2">
          <IconPC fill={active ? '#FFFFFF' : '#054FD6'} />
          <p className="order-tariff-info__item__title body body-2">250 каналов</p>
        </div>
      </div>

      <div className="order-tariff-info__available flex flex-aic mb-3 gap-3">
        <IconCheckMark/>
        <p className="body body-6 opacity-10">IPTV до 250 каналов</p>
      </div>
      <div className="order-tariff-info__available flex flex-aic mb-3 gap-3">
        <IconCheckMark/>
        <p className="body body-6 opacity-10">Технология GPON</p>
      </div>
    </div>
  );
};

export default OrderTariffInfo;
