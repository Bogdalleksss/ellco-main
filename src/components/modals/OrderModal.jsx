import TextInput from "../UI/TextInput";
import RadioButton from "../UI/RadioButton";
import Checkbox from "../UI/Checkbox";
import Button from "../UI/Button";
import IconStripes from "../icons/IconStripes";
import IconArrowLeft from "../icons/IconArrowLeft";
import TariffInfo from "../UI/TariffInfo";
import { useScreen } from "../../hooks/screen";
import { useHistory } from "react-router";

const PriceCard = ({ title, period, price, className }) => {
  return (
    <div className={`price flex-1 pt-4 pb-4 pl-6 pr-6 mb-2 ${ className }`}>
      <h4 className="body body-3 pb-2 mb-2 flex-1 font-color-bld">{ title }</h4>
      <div className="flex flex-jcsb">
        <p className="body body-9 font-color-bld opacity-10">{ period }</p>
        <p className="body body-2 font-color-bld">{ price } ₽</p>
      </div>
    </div>
  )
}

const HeaderOrder = () => {
  const history = useHistory();

  return (
    <>
      <a className="back flex flex-aic gap-1 mb-8" onClick={() => history.goBack()}>
        <IconArrowLeft/>
        <span className="body body-5 font-color-bl">Назад</span>
      </a>
      <h5 className="flex gap-3 font-color-bl mb-15">
        <IconStripes fill="#054FD6"/>
        <span className="flex flex-1 pt-1">Оформление заказа</span>
      </h5>
    </>
  )
}

const OrderModal = () => {
  const { mediaPoint } = useScreen();
  return (
    <div id="modal-order">
      <div className="modal-order container">
        <div className="form column pr-20">
          {
            mediaPoint >= 1600
              ? <div className="column">
                <HeaderOrder />
              </div>
              : <></>
          }
          <div className="flex form-row gap-8 mb-8">
            <TextInput label="ФИО" placeholder="Шамилов Рамазан Ахмедович" />
            <TextInput label="Номер телефона" placeholder="+7 (8722) 555-222" />
          </div>
          <div className="flex">
            <TextInput label="Адрес подключения" placeholder="Город, улица, дом, квартира" />
          </div>

          <p className="body body-7 mt-8 font-color-bld opacity-10">Подключение</p>
          <div className="form-radio flex flex-aic flex-jcfs gap-10 mt-2 mb-8">
            <RadioButton id="home" label="Частный сектор" name="order" />
            <RadioButton id="flat" label="Многоквартирный дом" name="order" />
          </div>

          <Checkbox id="policy">
            <p>Я принимаю условия публичной оферты в соответствии с условиями <a>Политики конфиденциальности</a></p>
          </Checkbox>

          <Button className="mt-8">Оформить заявку</Button>
        </div>
        <div className="tariff-total column pl-20">
          <div className="tariff-info column">
            <p className="body body-7 mb-2 font-color-bld opacity-10">Тариф</p>
            <TariffInfo
              title="Технологии общения. Онлайн"
              speed="70"
              channels="250"
              availables={[
                {
                  id: 1,
                  title: 'IPTV до 250 каналов'
                },
                {
                  id: 2,
                  title: 'Технология GPON'
                },
              ]}
            />
          </div>
          <div className="tariff-price column">
            <PriceCard title="Стоимость тарифа" period="В месяц" price={660}/>
            <PriceCard title="Дополнительно" period="Подключение" price={2900}/>
            <PriceCard className="price__total" title="К оплате" period="Итого" price={3560}/>
          </div>
        </div>
        {
          mediaPoint < 1600
            ? <div className="column">
                <HeaderOrder />
              </div>
            : <></>
        }

      </div>
    </div>
  )
}

export default OrderModal;
