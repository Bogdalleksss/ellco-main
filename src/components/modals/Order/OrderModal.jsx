import TextInput from "../../UI/TextInput";
import RadioButton from "../../UI/RadioButton";
import Checkbox from "../../UI/Checkbox";
import Button from "../../UI/Button";
import { useScreen } from "../../../hooks/screen";
import OrderHeader from "./OrderHeader";
import OrderCategoryCard from "../../UI/Cards/Order/OrderCategoryCard";

const OrderModal = () => {
  const { mediaPoint } = useScreen();

  return (
    <div id="modal-order">
      <div className="modal-order container">
        <div className="form column pr-16">
          {
            mediaPoint >= 1600
              ? <div className="column flex flex-aifs">
                <OrderHeader />
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

          <div className="price-wrapper flex column flex-aifs gap-1 mb-8">
            <p className="body body-6">Стоимость тарифа в месяц — 660 ₽</p>
            <p className="body body-6">Дополнительно — 2900 ₽</p>
            <p className="body body-6 font-color-w total">К оплате — 3560 ₽</p>
          </div>

          <Checkbox id="policy">
            <p>Я принимаю условия публичной оферты в соответствии с условиями <a>Политики конфиденциальности</a></p>
          </Checkbox>

          <Button className="mt-8">Оформить заявку</Button>
        </div>
        <div className="tariff-info ml-16 column flex gap-2">
          <OrderCategoryCard
            active={true}
            title="Домашний интернет"
          />
          <OrderCategoryCard
            active={true}
            title="Видеонаблюдение"
            type="VIDEO"
          />
          <OrderCategoryCard
            title="Телевидение"
          />
          <OrderCategoryCard
            title="Телефония"
          />
        </div>
        {
          mediaPoint < 1600
            ? <div className="column flex flex-aifs">
                <OrderHeader />
              </div>
            : <></>
        }

      </div>
    </div>
  )
}

export default OrderModal;
