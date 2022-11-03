import React from 'react';
import Button from "../../Button";

const OrderVideoInfo = () => {
  return (
    <div className="pt-4 pb-4 pl-4 pr-4">
      <h4 className="mb-4 font-color-bl">
        Используемые камеры <br/>
        для видеонаблюдения
      </h4>
      <p className="body body-9 mb-2 font-color-bld">Купить у eIIco</p>
      <p className="body body-9 mb-2 font-color-bld">Количество камер: 4</p>
      <p className="body body-9 mb-2 font-color-bld">Срок хранения: 15 дней</p>

      <h4 className="mb-4 mt-8 font-color-bl">Выбранные камеры</h4>
      <p className="body body-9 mb-2 font-color-bld">Камера 4К</p>
      <p className="body body-9 mb-2 font-color-bld">Количество: 2</p>
      <p className="body body-9 mb-2 font-color-bld">Камера FHD</p>
      <p className="body body-9 mb-2 font-color-bld">Количество: 2</p>
    </div>
  );
};

export default OrderVideoInfo;
