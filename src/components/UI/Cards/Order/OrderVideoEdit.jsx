import React from 'react';
import RadioButton from "../../RadioButton";
import Counter from "../../Counter";
import BoxTabs from "../../Tabs/BoxTabs";
import { v4 } from "uuid";

const tabs = [
  {
    id: v4(),
    title: '5 дней',
    value: 5,
  },
  {
    id: v4(),
    title: '10 дней',
    value: 10,
  },
  {
    id: v4(),
    title: '15 дней',
    value: 15,
  }
]

const OrderVideoEdit = () => {
  return (
    <div className="order-video__edit">
      <h4 className="mb-4 font-color-bl">
        Используемые камеры <br/>
        для видеонаблюдения
      </h4>
      <div className="calculator-block flex mb-2">
        <RadioButton
          className="mr-6"
          id="rb-1"
          label="Есть свои"
          name="type"
        />
        <RadioButton
          id="rb-2"
          label="Купить у ЭЛЛКО"
          name="type"
        />
      </div>
      <div className="calculator-block mb-2 mt-6">
        <p className="body body-9 mr-6 mb-2">Количество камер</p>
        <Counter />
      </div>
      <div className="calculator-block calculator-block__tabs mt-6">
        <p className="body body-9 mr-6 mb-2">Срок хранения</p>
        <BoxTabs
          tabs={ tabs }
        />
      </div>

      <h4 className="mb-4 font-color-bl mt-8">
        Выбранные камеры
      </h4>
      <div className="calculator-block mb-2 mt-6">
        <p className="body body-9 mr-6 mb-2">Камера 4K</p>
        <Counter />
      </div>
      <div className="calculator-block mb-2 mt-6">
        <p className="body body-9 mr-6 mb-2">Камера FHD</p>
        <Counter />
      </div>
    </div>
  );
};

export default OrderVideoEdit;
