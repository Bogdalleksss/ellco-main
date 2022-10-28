import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import BannerSection from "../components/sections/BannerSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/tvip.png';
import BannerMobile from '@/assets/img/banner/tvip-mobile.png';

import Image from '@/assets/img/iptv-image.png';
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
    icon: 'globus',
    color: '#054FD6',
    title: 'Доступ из любой точки мира',
    description: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что действия представителей оппозиции ',
  },
  {
    id: 2,
    icon: 'infinity',
    color: '#45CC63',
    title: 'Облачное хранение до 30 суток',
    description: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что действия представителей оппозиции ',
  },
  {
    id: 3,
    icon: 'protect',
    color: '#FFC229',
    title: 'Контроль событий на вашем объекте',
    description: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что действия представителей оппозиции ',
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

const IPTVPage = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <BannerSection
        classNames="iptv-page"
        title="IPTV от Эллко"
        action="Подключить за 750 руб./мес"
        banner={isMobile ? BannerMobile : Banner}
      >
        <p className="body body-7">
          Телевидение - это потрясающее качество
        </p>
      </BannerSection>
      <AdvantagesSection
        title="Наслаждайтесь качественной связью"
        list={advantagesList}
        classNames="bg-light"
      />
       <InfoSection
         title="Технологии общения. Онлайн"
         description="Проверьте техническую возможность подключения интернета для частного дома прямо на этой странице, оставьте свои данные. Мы свяжемся с вами в ближайшее время"
         list={checklistInfo}
         image={Image}
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

export default IPTVPage;
