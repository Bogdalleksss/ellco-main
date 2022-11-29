import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import BannerSection from "../components/sections/BannerSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/tvip.png';
import BannerMobile from '@/assets/img/banner/tvip-mobile.png';

import Image from '@/assets/img/info/iptv.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import AdditionalTariffsSection from "../components/sections/AdditionalTariffsSection";
import { isMobile } from "../utils/constants";
import { useScrollToTop } from "../hooks";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

const checklistInfo = [
  {
    id: 1,
    content: 'Стабильный сигнал, до 250 каналов отличного качества',
  },
  {
    id: 2,
    content: 'Возможность подключения к любому телевизору или гаджету',
  },
  {
    id: 3,
    content: 'Множество интерактивных функций по управлению просмотром: запись, пауза, перемотка, отложенный просмотр.',
  }
]

const advantagesList = [
  {
    id: 1,
    icon: 'globus',
    color: '#054FD6',
    title: 'Доступ из любой точки мира',
    description: 'В отличие от спутникового и кабельного телевидения, у которых список каналов зависит от региона, IPTV позволит вам смотреть передачи в любой точке мира, без жёсткой привязки к расположению.',
  },
  {
    id: 2,
    icon: 'protect',
    color: '#45CC63',
    title: 'Лёгкость настройки',
    description: 'IP-телевидение подключается к любому телевизору или гаджету. Интерактивные функции – запись эфира, пауза, перемотка, отложенный просмотр – сделают просмотр удобным.',
  },
  {
    id: 3,
    icon: 'infinity',
    color: '#FFC229',
    title: 'Богатство выбора',
    description: 'До 250 каналов, новинки мирового кинематографа каждый месяц не дадут вам заскучать.',
  },
]

const IPTVPage = () => {
  useScrollToTop();
  const tariffs = useSelector(state => state.tariffs.items.filter(tariff => ['standard'].includes(tariff.type)));

  return (
    <>
      <Header />
      <BannerSection
        classNames="iptv-page"
        title="IP-телевидение"
        action="Подключить"
        link="#tariffs"
        banner={isMobile ? BannerMobile : Banner}
      >
        <p className="body body-7">
          Интерактивное телевидение в форматах HD и Full HD
        </p>
      </BannerSection>
      <AdvantagesSection
        title=""
        list={advantagesList}
        classNames="bg-light"
      />
       <InfoSection
         withoutButton={true}
         title="Телевидение от EIIco"
         description="Мы предлагаем стабильный, высокоскоростной доступ в сеть + бесплатное подключение к IPTV. IPTV – это телевидение, позволяющее передавать сигнал через интернет при помощи IP-протокола."
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

export default IPTVPage;
