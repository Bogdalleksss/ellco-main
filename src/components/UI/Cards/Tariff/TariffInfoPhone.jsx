import React from 'react';

import Phone from '@/assets/img/phone.svg'
import Connection from '@/assets/img/connection.svg'

const TariffInfoPhone = ({ title }) => {
  return (
    <div className="tariff-card__info tariff-card__phone width-full zi-2">
      <h3 className="mb-6">{ title }</h3>

      <div className="tariff-card__phone-info flex gap-2">
        <img src={Phone} alt=""/>
        <p className="body body-2">0₽ за 1-ую минуту исходящего вызова</p>
      </div>
      <div className="tariff-card__phone-info flex gap-2">
        <img src={Connection} alt=""/>
        <p className="body body-2">Местные телефонные соединения с авансовой формой оплаты</p>
      </div>
    </div>
  );
};

export default TariffInfoPhone;
