import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import BannerSection from "../components/sections/BannerSection";
import IconSpeed from "../components/icons/IconSpeed";
import IconPC from "../components/icons/IconPC";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/rate.png';
import BannerMobile from '@/assets/img/banner/rate-mobile.png';

import Image from '@/assets/img/woman-yellow.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import AdditionalTariffsSection from "../components/sections/AdditionalTariffsSection";
import { isMobile } from "../utils/constants";
import { useScrollToTop } from "../hooks";
import Footer from "../components/Footer/Footer";

const checklistInfo = [
  {
    id: 1,
    content: 'Предложим лучшую технологию и рассчитаем стоимость прокладки кабеля',
  },
  {
    id: 2,
    content: 'Порекомендуем современное оборудование для покрытия всего дома сигналом',
  },
  {
    id: 3,
    content: 'Подберём тарифный план под потребности вашей семьи',
  }
]
const advantagesList = [
  {
    id: 1,
    icon: 'wifi',
    color: '#054FD6',
    title: 'Стабильная связь без перебоев и переплат',
    description: 'Стабильная связь без перебоев',
  },
  {
    id: 2,
    icon: 'infinity',
    color: '#45CC63',
    title: 'Безлимитные тарифы с постоплатой',
    description: 'Стабильная связь без перебоев',
  },
  {
    id: 3,
    icon: 'shield',
    color: '#FFC229',
    title: 'Ваш постоянный номер',
    description: 'Стабильная связь без перебоев',
  },
]
const tariffs = [
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

const RatePage = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <BannerSection
        classNames="rate-page"
        title="Технологии общения. Онлайн"
        action="Подключить за 750 руб./мес"
        banner={isMobile ? BannerMobile : Banner}
      >
        <div className="banner-content__block flex gap-2 pb-2 mb-3">
          <IconSpeed />
          <h4>70</h4>
          <div>
            <p className="body body-7">Мбит/с</p>
            <p className="body body-7">скорость интернета</p>
          </div>
        </div>
        <div className="banner-content__block flex flex-aifs gap-2 pb-2">
          <IconPC />
          <h4>250</h4>
          <div>
            <p className="body body-7">каналов</p>
          </div>
        </div>
      </BannerSection>
       <InfoSection
         title="Технологии общения. Онлайн"
         description="Проверьте техническую возможность подключения интернета для частного дома прямо на этой странице, оставьте свои данные. Мы свяжемся с вами в ближайшее время"
         list={checklistInfo}
         image={Image}
       />
      <AdvantagesSection
        title="Наслаждайтесь качественной связью"
        list={advantagesList}
      />
      <AdditionalTariffsSection
        title="Дополнительные тарифы"
        tariffs={tariffs}
      />
      <EventsSection />
      <Footer/>
    </>
  )
}

export default RatePage;
