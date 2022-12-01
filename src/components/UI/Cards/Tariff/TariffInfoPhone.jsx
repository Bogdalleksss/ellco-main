import React from 'react';

import Phone from '@/assets/img/phone.svg'
import Connection from '@/assets/img/connection.svg'
import IconCheckMark from "../../../icons/IconCheckMark";

const TariffInfoPhone = ({ title, firstMinutePrice, localTelephoneСonnectionsType, tags }) => {
  return (
    <div className="tariff-card__info tariff-card__phone width-full zi-2">
      <h3 className="mb-6">{ title }</h3>

      <div className="tariff-card__phone-info flex gap-2">
        <img src={Phone} alt=""/>
        <p className="body body-2">{firstMinutePrice}₽ за первую минуту исходящего вызова</p>
      </div>
      <div className="tariff-card__phone-info flex gap-2 mb-5">
        <img src={Connection} alt=""/>
        <p className="body body-2">{localTelephoneСonnectionsType}</p>
      </div>

      {
        !!tags.length && tags?.map((tag, idx) => (
          <div key={idx} className="tariff-card__available flex flex-aic mb-3 gap-3">
            <IconCheckMark/>
            <p className="body body-6 opacity-10">{ tag }</p>
          </div>
        ))
      }
    </div>
  );
};

export default TariffInfoPhone;
