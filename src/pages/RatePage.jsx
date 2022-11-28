import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import BannerSection from "../components/sections/BannerSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/rate.png';
import BannerMobile from '@/assets/img/banner/rate-mobile.png';

import Image from '@/assets/img/woman-yellow.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import AdditionalTariffsSection from "../components/sections/AdditionalTariffsSection";
import { isMobile } from "../utils/constants";
import { useScrollToTop } from "../hooks";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

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
    title: 'Стабильная связь',
    description: 'Высокоскоростной интернет и надёжная связь без перебоев по доступной цене – базовая потребность современного человека. И мы её полностью восполняем.',
  },
  {
    id: 2,
    icon: 'shield',
    color: '#FFC229',
    title: 'Мы с вами 24/7',
    description: 'Круглосуточная техподдержка ответит на все ваши вопросы и поможет решить проблемы. Наши мастера готовы приехать к вам срочно или очень срочно.',
  },
  {
    id: 3,
    icon: 'infinity',
    color: '#45CC63',
    title: 'Широкий охват',
    description: 'Наша сеть покрывает всю республику – даже самые отдалённые города и самые высокогорные районы Дагестана.',
  },
]

const RatePage = () => {
  useScrollToTop();
  const tariffs = useSelector(state => state.tariffs.items.filter(tariff => ['standard', 'game'].includes(tariff.type)));

  return (
    <>
      <Header />
      <BannerSection
        classNames="iptv-page"
        title="Домашний интернет"
        action="Подключить"
        link="/rate#tariffs"
        banner={isMobile ? BannerMobile : Banner}
      >
        <p className="body body-7">
          Интернет безграничных возможностей
        </p>
      </BannerSection>
       <InfoSection
         withoutButton={true}
         title="Интернет"
         description="Проверьте техническую возможность подключения интернета для частного дома прямо на этой странице, оставьте свои данные. Мы свяжемся с вами в ближайшее время"
         list={checklistInfo}
         image={Image}
       />
      <AdvantagesSection
        title="Наслаждайтесь качественной связью"
        list={advantagesList}
      />
      <AdditionalTariffsSection
        title="Тарифы"
        tariffs={tariffs}
      />
      <EventsSection />
      <Footer/>
    </>
  )
}

export default RatePage;
