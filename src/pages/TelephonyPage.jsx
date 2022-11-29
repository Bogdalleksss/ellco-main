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
import { useSelector } from "react-redux";
import { useScrollToTop } from "../hooks";

const checklistInfo = [
  {
    id: 1,
    content: 'Возможность выбрать специальный номер с красивой комбинацией цифр',
  },
  {
    id: 2,
    content: 'Стабильная связь и выгодные цены',
  },
  {
    id: 3,
    content: 'Функции: автоответчик, определитель номера, запись разговора, переадресация вызова, ведение статистики',
  }
]
const advantagesList = [
  {
    id: 1,
    icon: 'globus',
    color: '#054FD6',
    title: 'Широкий охват',
    description: 'Благодаря связи, которая осуществляется при помощи протокола IP, вы сможете бесплатно звонить и получать звонки из любой точки мира с городского или мобильного телефона.',
  },
  {
    id: 2,
    icon: 'infinity',
    color: '#45CC63',
    title: 'Доступность',
    description: 'Простая установка и низкие цены на звонки без закупки дорогого оборудования сделают процесс подключения и использования IP телефонии выгоднее и приятнее.',
  },
  {
    id: 3,
    icon: 'protect',
    color: '#FFC229',
    title: 'Богатый функционал',
    description: 'Не ограничивайте себя, пользуйтесь многочисленными дополнительными функциями: автоответчик, определитель номера, запись разговоров, переадресация вызовов, ведение статистики.',
  },
]

const TelephonyPage = () => {
  useScrollToTop();
  const tariffs = useSelector(state => state.tariffs.items.filter(tariff => ['telephony'].includes(tariff.type)));

  return (
    <>
      <Header />
      <BannerSection
        classNames="iptv-page"
        title="IP-телефония"
        action="Подключить"
        link="#tariffs"
        banner={isMobile ? BannerMobile : Banner}
      >
        <p className="body body-7">
          Звонки в любую точку мира по выгодной цене
        </p>
      </BannerSection>
      <AdvantagesSection
        title="Наслаждайтесь стабильной связью"
        list={advantagesList}
        classNames="bg-light"
      />
       <InfoSection
         withoutButton={true}
         title="Заголовок: Телефония от EIIco"
         description="IP-телефония — это телефонная связь, которая осуществляется при помощи протокола IP. Благодаря ей вы сможете бесплатно звонить и получать звонки из любой точки России и мира с городского или с мобильного телефона"
         list={checklistInfo}
         image={Image}
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

export default TelephonyPage;
