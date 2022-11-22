import React from 'react';
import Button from "../../Button";
import { useSettingsCams } from "../../../../hooks/useSettings";

const OrderVideoInfo = ({ cams }) => {
  const {
    type,
    term,
    getTab,
    camsCount,
    camsForBuy,
    camsForBuyTotal,
  } = cams;

  return (
    <div className="pt-4 pb-4 pl-4 pr-4">
      <h4 className="mb-4 font-color-bl">
        Используемые камеры <br/>
        для видеонаблюдения
      </h4>
      <p className="body body-9 mb-2 font-color-bld">{ type === 'ellco' ? 'Купить у eIIco' : 'Есть свои' } </p>
      <p className="body body-9 mb-2 font-color-bld">Количество камер: { type === 'ellco' ? camsForBuyTotal : camsCount}</p>
      <p className="body body-9 mb-2 font-color-bld">Срок хранения: { getTab()?.value } дней</p>
      {
        type === 'ellco'
        && <>
            <h4 className="mb-4 mt-8 font-color-bl">Выбранные камеры</h4>
            {
              camsForBuy.map((cam, idx) => (
                <div key={idx}>
                  <p className="body body-9 mb-2 font-color-bld">{ cam.name }</p>
                  <p className="body body-9 mb-2 font-color-bld">Количество: { cam.value }</p>
                </div>
              ))
            }
          </>
      }
    </div>
  );
};

export default OrderVideoInfo;
