import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/kion.png';

import Image from '@/assets/img/kion.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import AdditionalTariffsSection from "../components/sections/AdditionalTariffsSection";
import { useScrollToTop } from "../hooks";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

const checklistInfo = [
  {
    id: 1,
    content: '10 000+ фильмов, сериалов, мультфильмов и 200+ телеканалов, LIVE-трансляции специальных событий',
  },
  {
    id: 2,
    content: 'Сверхвысокая четкость и глубина цвета благодаря изображению в формате 4К, HDR, Full HD',
  },
  {
    id: 3,
    content: 'Детский профиль с большим выбором мультфильмов и защитой от взрослого контента',
  }
]
const advantagesList = [
  {
    id: 1,
    icon: '',
    content: '46%',
    color: '',
    title: 'Знание бренда KION — Апрель 2022',
    description: '',
  },
  {
    id: 2,
    icon: '',
    content: '4,7 млн',
    color: '',
    title: 'Количество пользователей онлайн-кинотеатра KION в Q1 2022',
    description: '',
  },
  {
    id: 3,
    icon: '',
    content: '30',
    color: '',
    title: 'Количество оригинальных проектов, запущенных с апреля 2021 по апрель 2022',
    description: '',
  },
]

const KionPage = () => {
  useScrollToTop();
  const tariffs = useSelector(state => state.tariffs.items.filter(tariff => ['kion'].includes(tariff.type)));

  return (
    <>
      <Header />
      <img className="movie-banner" src={Banner} alt=""/>
      <InfoSection
        withoutButton
        classNames="movie-info-kion"
        title="Онлайн - Кинотеатр KION"
        description="Фильмы и сериалы лучших российских и зарубежных студий, оригинальные фильмы и сериалы собственного производства без рекламы и в отличном качестве, в любое время и там, где вам удобно"
        list={checklistInfo}
        action="Подключить"
        image={Image}
      />
      <AdvantagesSection
        list={advantagesList}
        title="KION в цифрах"
        classNames="movie-sm movie-kion"
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

export default KionPage;
