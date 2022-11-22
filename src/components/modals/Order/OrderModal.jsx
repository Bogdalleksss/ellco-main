import TextInput from "../../UI/TextInput";
import RadioButton from "../../UI/RadioButton";
import Checkbox from "../../UI/Checkbox";
import Button from "../../UI/Button";
import { useScreen } from "../../../hooks/useScreen";
import OrderHeader from "./OrderHeader";
import OrderCategoryCard from "../../UI/Cards/Order/OrderCategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearSelectedTariffs } from "../../../store/tariffs";
import { useHistory, useParams } from "react-router";
import { useSettingsCams } from "../../../hooks/useSettings";
import { clearSettingsCCTV, sendOrder } from "../../../store/order";
import PhoneInput from "../../UI/PhoneInput";
import CompleteModal from "../CompleteModal";
import { Link } from "react-router-dom";
import IconArrowRight from "../../icons/IconArrowRight";

const initCards = [
  {
    key: 'card-1',
    title: 'Домашний интернет',
    category: ['standard', 'game'],
  },
  {
    key: 'card-2',
    title: 'Телевидение',
    category: ['kion', 'smotroshka'],
  },
  {
    key: 'card-3',
    title: 'Видеонаблюдение',
    type: 'VIDEO',
  },
  {
    key: 'card-4',
    title: 'Телефония',
    category: ['telephony'],
  }
]

const OrderModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { mediaPoint } = useScreen();
  const { id } = useParams();
  const tariffs = useSelector(state => state.tariffs.items);
  const selectedTariffs = useSelector(state => state.tariffs.selectedTariffs);
  const { status, error, cctv } = useSelector(state => state.order);
  const [cards, updateCards] = useState([]);
  const settingCams = useSettingsCams();
  const currentTariff = tariffs.find(tariff => tariff._id === id);
  const [phone, updatePhone] = useState('');
  const [fullName, updateFullName] = useState('');
  const [address, updateAddress] = useState('');
  const [accept, updateAccept] = useState('');
  const [showModal, updateShowModal] = useState(false);
  const [connectionType, updateConnectionType] = useState('private');

  const {
    type,
    camsCount,
    camsForBuyTotal,
    getTab,
    getFirstPrice,
    getEveryMonthPrice
  } = settingCams();

  useEffect(() => {
    if (!cctv.camsForBuy.length && !selectedTariffs.length) history.goBack();
    return () => {
      dispatch(clearSelectedTariffs());
      dispatch(clearSettingsCCTV());
    }
  }, [])

  useEffect(() => {
    const activeVideo = type === 'ellco' ? !!camsForBuyTotal : !!camsCount;

    const cards = initCards.map(card => ({
      ...card,
      active: check('active', card.category) || (card.type === 'VIDEO' && activeVideo),
      isFirst: card.type === 'VIDEO' && id === 'VIDEO' ? true : check('first', card.category)
    }));
    const sortedCard = cards.sort(card => card.active ? -1 : 1);

    updateCards(sortedCard.sort(card => card.isFirst ? -1 : 1));
  }, [selectedTariffs, camsForBuyTotal, camsCount]);

  useEffect(() => {
    if (status === 'success') updateShowModal(true);
    if (status === 'error') alert(error);
  }, [status]);

  const check = (action, types) => {
    if (!types) return false;
    const tariffsByTypes = tariffs.filter(tariff => types.includes(tariff.type));

    return tariffsByTypes.some(tariff => action === 'active' ? selectedTariffs.includes(tariff._id) : tariff._id === id );
  }

  const etcPrice = () => {
    return selectedTariffs?.reduce((acc, item) => {
      const { price, newPrice, _id } = tariffs.find(tariff => tariff._id === item);
      return acc + (_id === id ? 0 : (newPrice || price));
    }, 0)
  }
  const getMonthPrice = () => {
    return id === 'VIDEO'
      ? getEveryMonthPrice()
      : currentTariff?.newPrice || currentTariff?.price || 0
  }
  const getAddMonthPrice = () => etcPrice() + (id !== 'VIDEO' ? getEveryMonthPrice() : 0)
  const getTotalPrice = () => {
    return getMonthPrice() + getAddMonthPrice() + (type === 'ellco' && !!camsForBuyTotal ? getFirstPrice() : 0);
  }

  const sendForm = () => {
    const body = {
      fullName,
      phone: phone.replaceAll(' ', ''),
      connectionAdress: address,
      connectionType,
      tariffs: selectedTariffs.join(','),
      cctv: {
        buyCams: !!camsForBuyTotal,
        recordKeepDays: getTab(cctv.term)?.value,
        camsCount: cctv.camsCount,
        camsForBuy: cctv.camsForBuy.map(cam => ({
          name: cam.name,
          count: cam.value
        }))
      }
    }

    dispatch(sendOrder(body))
  }

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
            <TextInput
              value={fullName}
              label="ФИО"
              placeholder="Шамилов Рамазан Ахмедович"
              onChange={val => updateFullName(val)}
              disabled={status === 'pending'}
            />
            <PhoneInput
              value={phone}
              label="Номер телефона"
              placeholder="+7 (872) 555-22-22"
              onChange={val => updatePhone(val)}
              disabled={status === 'pending'}
            />
          </div>
          <div className="flex">
            <TextInput
              value={address}
              label="Адрес подключения"
              placeholder="Город, улица, дом, квартира"
              onChange={val => updateAddress(val)}
              disabled={status === 'pending'}
            />
          </div>

          <p className="body body-7 mt-8 font-color-bld opacity-10">Подключение</p>
          <div className="form-radio flex flex-aic flex-jcfs gap-10 mt-2 mb-8">
            <RadioButton
              id="private"
              value="private"
              checked={connectionType === 'private'}
              label="Частный сектор"
              name="order"
              onChange={val => updateConnectionType(val)}
              disabled={status === 'pending'}
            />
            <RadioButton
              id="apartment"
              value="apartment"
              checked={connectionType === 'apartment'}
              label="Многоквартирный дом"
              name="order"
              onChange={val => updateConnectionType(val)}
              disabled={status === 'pending'}
            />
          </div>

          <div className="price-wrapper flex column flex-aifs gap-1 mb-8">
            <p className="body body-6">
              Стоимость тарифа в месяц — { getMonthPrice() } ₽
            </p>
            <p className="body body-6">
              Дополнительно в месяц — { getAddMonthPrice() } ₽
            </p>
            { type === 'ellco' && !!camsForBuyTotal && <p className="body body-6">Разовый платеж — { getFirstPrice() } ₽</p> }
            <p className="body body-6 font-color-w total">К оплате — { getTotalPrice() } ₽</p>
          </div>

          <Checkbox
            value={accept}
            id="policy"
            onChange={val => updateAccept(val)}
            disabled={status === 'pending'}
          >
            <p>Я принимаю условия публичной оферты в соответствии с условиями <a>Политики конфиденциальности</a></p>
          </Checkbox>

          <Button
            className="mt-8"
            disabled={!fullName || !phone || !address || !accept || status === 'pending'}
            onClick={() => sendForm()}
          >Оформить заявку</Button>
        </div>
        <div className="tariff-info ml-16 column flex gap-2">
          {
            cards.map(card => <OrderCategoryCard {...card}/>)
          }
        </div>
        {
          mediaPoint < 1600
            ? <div className="column flex flex-aifs">
                <OrderHeader />
              </div>
            : <></>
        }

      </div>
      <CompleteModal show={showModal}>
        <h3>Спасибо! Ваша заявка успешно отправлена </h3>
        <p className="body body-9 mt-3 mb-5 ta-c font-color-w">Через 15 минут вам перезвонит наш оператор для уточнения информации</p>
        <Link to="/">
          <IconArrowRight fill={'#FFFFFF'} />
          Вернуться на главную
        </Link>
      </CompleteModal>
    </div>
  )
}

export default OrderModal;
