import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import BannerSection from "../components/sections/BannerSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/video.png';
import BannerMobile from '@/assets/img/banner/video-mobile.png';

import Image from '@/assets/img/iptv-image.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import { isMobile } from "../utils/constants";
import Footer from "../components/Footer/Footer";
import CalculatorSection from "../components/sections/CalculatorSection";
import { useScrollToTop } from "../hooks";

const checklistInfo = [
  {
    id: 1,
    content: 'Установка оборудования в удобном для вас месте',
  },
  {
    id: 2,
    content: 'Доступ в прямом эфире из любой точки мира с мобильного приложения',
  },
  {
    id: 3,
    content: 'Хранение материалов на облачных серверах',
  }
]
const advantagesList = [
  {
    id: 3,
    icon: 'protect',
    color: '#FFC229',
    title: 'Контроль событий на вашем объекте',
    description: 'Камеры и датчики звука и света немедленно фиксируют все подозрительные движения и звуки, помогая вам защитить ваших близких и сохранить ценное имущество.',
  },
  {
    id: 2,
    icon: 'infinity',
    color: '#45CC63',
    title: 'Облачное хранение',
    description: 'Оборудование отсылает записанные данные на облачные сервера, где они хранятся.',
  },
  {
    id: 1,
    icon: 'globus',
    color: '#054FD6',
    title: 'Доступ из любой точки мира',
    description: 'Вы получите доступ к записям и камерам в прямом эфире из любой точки мира с нашего портала или из личного кабинета в мобильном приложении.',
  },
]

const VideosurveillancePage = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <BannerSection
        classNames="iptv-page"
        title="Видеонаблюдение"
        action="Подключить"
        link="/cctv#calculator"
        banner={isMobile ? BannerMobile : Banner}
      >
        <p className="body body-7">
          • Подбор оптимальной конфигурации <br/>
          • Монтаж и настройка <br/>
          • Обслуживание <br/>
        </p>
      </BannerSection>
      <AdvantagesSection
        title="Твоя безопасность под защитой EIIco"
        list={advantagesList}
        classNames="bg-light"
      />
       <InfoSection
         withoutButton={true}
         title="Облачное видеонаблюдение от Ellco"
         description="Это интегрированный сервис, который позволяет мониторить объекты и помещения помогая вам защитить ваших близких и сохранить ценное имущество"
         list={checklistInfo}
         image={Image}
       />
      <CalculatorSection />
      <EventsSection />
      <Footer/>
    </>
  )
}

export default VideosurveillancePage;
