import TariffCard from "../UI/Cards/Tariff/TariffCard";
import Tabs from "../UI/Tabs/Tabs";
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';

const tariffs = [
  {
    id: 1,
    title: 'Технологии общения. Онлайн',
    speed: 70,
    channels: 250,
    price: 750,
    availables: [
      {
        id: 1,
        title: 'IPTV до 250 каналов'
      },
      {
        id: 2,
        title: 'Технология GPON'
      },
    ]
  },
  {
    id: 2,
    title: 'Технологии развлечения',
    speed: 150,
    channels: 250,
    price: 800,
    discount: 1000,
    availables: [
      {
        id: 1,
        title: 'Технология GPON'
      },
      {
        id: 2,
        title: 'Подключение дополнительных услуг'
      },
    ]
  },
  {
    id: 3,
    title: 'Домашнее комбо',
    speed: 200,
    channels: 250,
    price: 900,
    availables: [
      {
        id: 1,
        title: 'IPTV до 250 каналов'
      },
      {
        id: 2,
        title: 'Подключение дополнительных услуг'
      },
    ]
  },
  {
    id: 4,
    type: 'GAME',
    title: 'Игровой',
    speed: 250,
    channels: 250,
    price: 1500,
    availables: [
      {
        id: 1,
        title: 'IPTV до 250 каналов'
      },
      {
        id: 2,
        title: 'Технология GPON'
      },
      {
        id: 3,
        title: 'Подключение дополнительных услуг'
      },
    ]
  }
]
const tabs = [
  {
    id: 1,
    title: 'Домашний интернет',
    slug: 'ethernet',
  },
  {
    id: 2,
    title: 'Видеонаблюдение',
    slug: 'video_surveillance',
  },
  {
    id: 3,
    title: 'Телевидение',
    slug: 'tv',
  },
  {
    id: 4,
    title: 'Телефония',
    slug: 'telephony',
  },
]

const TariffsSection = () => {
  return (
    <section id="tariffs">
      <div className="container column">
        <Fade bottom text duration={900}>
          <h2 className="flex gap-3 font-color-bl mb-15">
            <IconStripes fill="#054FD6"/>
            <span className="flex pt-1">Отправьте заявку на подключение уже сейчас</span>
          </h2>
        </Fade>
        <Fade bottom text duration={900}>
          <Tabs className="mb-8" tabs={tabs} />
        </Fade>
      </div>
      <div className="tariffs-list container">
        <div className="tariffs-list__wrapper o-hidden width-full flex gap-4 hide-scrollbar">
          {
            tariffs.map((tariff, idx) => (
              <Fade bottom delay={200 * (idx + 1)} duration={900}>
                <TariffCard
                  key={tariff.id}
                  tariff={tariff}
                />
              </Fade>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default TariffsSection;
