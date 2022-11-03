import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import BannerSection from "../components/sections/BannerSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/telephonia.png';
import BannerMobile from '@/assets/img/banner/telephonia-mobile.png';

import Image from '@/assets/img/iptv-image.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import AdditionalTariffsSection from "../components/sections/AdditionalTariffsSection";
import { isMobile } from "../utils/constants";
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
    type: 'PHONE',
    title: 'Тарифный план «Стандартный»',
    price: 170,
  },
  {
    id: 3,
    type: 'PHONE',
    title: 'Тарифный план «Стандартный»',
    price: 204,
  },
]

const TelephonyPage = () => {
  return (
    <>
      <Header />
      <BannerSection
        classNames="iptv-page"
        title="IP Телефония"
        action="Подключить за 750 руб./мес"
        banner={isMobile ? BannerMobile : Banner}
      >
        <p className="body body-7">
          Звонки в любую точку мира по выгодной цене
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

export default TelephonyPage;
