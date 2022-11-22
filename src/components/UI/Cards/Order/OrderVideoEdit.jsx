import React, { useState } from 'react';
import RadioButton from "../../RadioButton";
import Counter from "../../Counter";
import BoxTabs from "../../Tabs/BoxTabs";
import { v4 } from "uuid";
import { useSettingsCams } from "../../../../hooks/useSettings";

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

const OrderVideoEdit = ({ cams }) => {
  // const [camsCount, updateCamsCount] = useState(0);
  // const [camsCountEllco1, updateCamsCount1] = useState(0);
  // const [camsCountEllco2, updateCamsCount2] = useState(0);
  // const [type, updateType] = useState('ellco');
  // const [term, updateTerm] = useState(tabs[0].id);
  const settingCams = useSettingsCams();

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
  } = cams;

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
      <div className="calculator-block mb-2 mt-6">
        <p className="body body-9 mr-6 mb-2">Количество камер</p>
        <Counter
          disabled={type === 'ellco'}
          value={type === 'ellco' ? camsForBuyTotal : camsCount}
          onChange={val => updateCamsCount(val)}
        />
      </div>
      <div className="calculator-block calculator-block__tabs mt-6">
        <p className="body body-9 mr-6 mb-2">Срок хранения</p>
        <BoxTabs
          tabs={tabs}
          value={term}
          onChange={val => updateTerm(val)}
        />
      </div>

      {
        type === 'ellco'
          && <>
              <h4 className="mb-4 font-color-bl mt-8">
                Выбранные камеры
              </h4>
              {
                camsForBuy && camsForBuy.map((cam, idx) => (
                  <div
                    key={ `${ cam.name }-${ idx }` }
                    className="calculator-block mb-2 mt-6"
                  >
                    <p className="body body-9 mr-6 mb-2">{ cam.name }</p>
                    <Counter
                      value={ cam.value }
                      onChange={ val => updateCountCamsForBuy(idx, val) }
                    />
                  </div>
                ))
              }
            </>
      }
    </div>
  );
};

export default OrderVideoEdit;
