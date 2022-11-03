import React from 'react';
import Counter from "../UI/Counter";
import { v4 } from "uuid";
import BoxTabs from "../UI/Tabs/BoxTabs";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button";

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

const CalculatorSection = ({ className }) => {
  return (
    <section id="calculator" className={ className }>
      <div className="calculator container flex-jcsb">
        <div className="calculator-wrapper column">
          <div className="flex column flex-aifs mb-8">
            <h3 className="font-color-bl mb-4">
              Используемые камеры <br/>
              для видеонаблюдения
            </h3>
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
            <div className="calculator-block flex flex-aic mb-2">
              <p className="body body-9 mr-6">Количество камер</p>
              <Counter />
            </div>
            <div className="calculator-block calculator-block__tabs flex flex-aic">
              <p className="body body-9 mr-6">Срок хранения</p>
              <BoxTabs
                tabs={ tabs }
              />
            </div>
          </div>

          <div className="calculator-wrapper__cameras flex column flex-aifs">
            <h3 className="font-color-bl mb-4">
              Выбор камер
            </h3>
            <div className="calculator-block flex flex-aic flex-jcsb mb-2">
              <p className="body body-9 mr-6">Камера 4К</p>
              <Counter />
            </div>
            <div className="calculator-block flex flex-aic flex-jcsb">
              <p className="body body-9 mr-6">Камера FHD</p>
              <Counter />
            </div>
          </div>
        </div>
        <div className="calculator-wrapper height-full flex column flex-jcsb">
          <div className="flex column gap-2">
            <div className="flex flex-jcsb price">
              <p className="body body-3">Разовый платеж</p>
              <p className="body body-2">0 ₽</p>
            </div>
            <div className="flex flex-jcsb price">
              <p className="body body-3">Ежемесячный платеж</p>
              <p className="body body-2">0 ₽</p>
            </div>
            <div className=" flex flex-jcsb price price-total">
              <p className="body body-3">К оплате</p>
              <p className="body body-2">0 ₽</p>
            </div>
          </div>

          <Button>Подключить</Button>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
