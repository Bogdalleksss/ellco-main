import React from 'react';
import Counter from "../UI/Counter";
import BoxTabs from "../UI/Tabs/BoxTabs";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button";
import { useSettingsCams } from "../../hooks/useSettings";
import { useHistory } from "react-router";

const CalculatorSection = ({ className }) => {
  const settingCams = useSettingsCams();
  const history = useHistory();

  const {
    type,
    term,
    tabs,
    camsCount,
    camsForBuy,
    camsForBuyTotal,
    updateType,
    updateTerm,
    updateCamsCount,
    updateCountCamsForBuy,
    getFirstPrice,
    getEveryMonthPrice
  } = settingCams();

  const connect = () => {
    history.push(`/order/VIDEO`)
  }

  return (
    <section id="calculator" className={ className }>
      <div className="calculator container flex-jcsb">
        <div className="calculator-wrapper column">
          <div className={`flex column flex-aifs ${type === 'ellco' && 'mb-8'}`}>
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
                checked={type === 'myself'}
                value="myself"
                onChange={val => updateType(val)}
              />
              <RadioButton
                id="rb-2"
                label="Купить у ЭЛЛКО"
                name="type"
                checked={type === 'ellco'}
                value="ellco"
                onChange={val => updateType(val)}
              />
            </div>
            <div className="calculator-block flex flex-aic mb-2">
              <p className="body body-9 mr-6">Количество камер</p>
              <Counter
                disabled={type === 'ellco'}
                value={type === 'ellco' ? camsForBuyTotal : camsCount}
                onChange={val => updateCamsCount(val)}
              />
            </div>
            <div className="calculator-block calculator-block__tabs flex flex-aic">
              <p className="body body-9 mr-6">Срок хранения</p>
              <BoxTabs
                tabs={tabs}
                value={term}
                onChange={val => updateTerm(val)}
              />
            </div>
          </div>
          {
            type === 'ellco'
              && <div className="calculator-wrapper__cameras flex column flex-aifs">
                    <h3 className="font-color-bl mb-4">
                      Выбор камер
                    </h3>
                    {
                      camsForBuy && camsForBuy.map((cam, idx) => (
                        <div
                          key={`${cam.name}-${idx}`}
                          className="calculator-block flex flex-aic flex-jcsb mb-2"
                        >
                          <p className="body body-9 mr-6">{ cam.name }</p>
                          <Counter
                            value={cam.value}
                            onChange={val => updateCountCamsForBuy(idx, val)}
                          />
                        </div>
                      ))
                    }
                  </div>
          }
        </div>
        <div className="calculator-wrapper height-full flex column flex-jcsb">
          <div className="flex column gap-2">
            {
              type === 'ellco'
                && <div className="flex flex-jcsb price">
                    <p className="body body-3">Разовый платеж</p>
                    <p className="body body-2">{ getFirstPrice() } ₽</p>
                  </div>
            }
            <div className="flex flex-jcsb price">
              <p className="body body-3">Ежемесячный платеж</p>
              <p className="body body-2">{ getEveryMonthPrice() } ₽</p>
            </div>
            <div className=" flex flex-jcsb price price-total">
              <p className="body body-3">К оплате</p>
              <p className="body body-2">{ getFirstPrice() + getEveryMonthPrice() } ₽</p>
            </div>
          </div>

          <Button
            onClick={() => connect()}
            disabled={type === 'ellco' ? !camsForBuyTotal : !camsCount}
          >Подключить</Button>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
