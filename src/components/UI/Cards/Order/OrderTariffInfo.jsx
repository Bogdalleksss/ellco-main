import React from 'react';
import TariffInfo from "../Tariff/TariffInfo";
import TariffInfoKion from "../Tariff/TariffInfoKion";
import TariffInfoSmotreshka from "../Tariff/TariffInfoSmotreshka";
import TariffInfoPhone from "../Tariff/TariffInfoPhone";

const OrderTariffInfo = ({ active, tariff }) => {
  console.log(tariff.type === 'smotroshka');
  return (
    <div className="order-tariff-info">
      {
        tariff.type === 'kion'
          ? <TariffInfoKion
              kion={tariff.kionServiceDescription}
              mts={tariff.mtsServiceDescription}
            />
          : tariff.type === 'smotroshka'
            ? <TariffInfoSmotreshka
                channels={tariff.channelsCount}
                tags={tariff.tags}
                movies={tariff.externalServices}
              />
            : tariff.type === 'telephony'
              ? <TariffInfoPhone
                  firstMinutePrice={tariff.firstMinutePrice}
                  localTelephoneСonnectionsType={tariff.localTelephoneСonnectionsType}
                />
              : <TariffInfo
                  speed={tariff.speedMbs}
                  channels={tariff.channelsCount}
                  tags={tariff.tags}
                  isGame={active}
                />
      }
    </div>
  );
};

export default OrderTariffInfo;
