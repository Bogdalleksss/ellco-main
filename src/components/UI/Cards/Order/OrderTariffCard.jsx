import React, { useState } from 'react';
import OrderTariffInfo from "./OrderTariffInfo";
import { useDispatch, useSelector } from "react-redux";
import { removeTariff, selectTariff } from "../../../../store/tariffs";

const OrderTariffCard = ({ active, tariff, category, types }) => {
  const [showDetails, updateShowDetails] = useState(false);
  const dispatch = useDispatch();
  const tariffs = useSelector(state => state.tariffs.items.filter(item => types.includes(item.type)));
  const { selectedTariffs } = useSelector(state => state.tariffs);

  const toggleTariff = () => {
    const isSelected = selectedTariffs.includes(tariff._id);
    const selectedTariff = tariffs.find(tariff => selectedTariffs.some(item => item === tariff._id));

    if (isSelected) dispatch(removeTariff(tariff._id));
    else {
      if (selectedTariff) dispatch(removeTariff(selectedTariff._id));
      dispatch(selectTariff(tariff._id));
    }
  }

  return (
    <div
      className={`order-tariff ${active ? 'active' : ''}`}
      onClick={() => toggleTariff()}
    >
      <div className="order-tariff__card">
        <p className="body body-7 opacity-10">{ category }</p>
        <p className="body body-3">{ tariff.title }</p>
        <span
          className="body body-7 opacity-10"
          onClick={e => {
            e.stopPropagation()
            updateShowDetails(!showDetails)
          }}
        >
          { showDetails ? 'скрыть' : 'раскрыть' }
        </span>
      </div>
      { showDetails && <OrderTariffInfo active={active} tariff={tariff}/> }
    </div>
  );
};

export default OrderTariffCard;
