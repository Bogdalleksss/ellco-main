import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/kion.png';

import Image from '@/assets/img/kion.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import AdditionalTariffsSection from "../components/sections/AdditionalTariffsSection";
import { useScrollToTop } from "../hooks";
import Footer from "../components/Footer/Footer";

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
const tariffs = [
  {
    id: 2,
    type: 'KION',
    title: 'KION + МТС PREMIUM',
    price: 249,
    free_month: true,
    available: [
      {
        id: 12,
        image: 'kion',
        content: 'Оригинальные сериалы KION, тысячи фильмов, мультфильмов, более 210 ТВ-каналов'
      },
      {
        id: 13,
        image: 'mtc',
        content: '50 ГБ интернета, музыка, кешбэк, выгодные предложения от партнеров и многое другое.'
      }
    ]
  },
  {
    id: 3,
    type: 'KION',
    title: 'KION 12 месяцев',
    price: 1890,
    available: [
      {
        id: 12,
        image: 'kion',
        content: 'Кинохиты и эксклюзивные премьеры, оригинальные фильмы и сериалы, доступные только на KION, 210+ TB-каналов в удобном и более выгодном формате. '
      },
    ]
  },
]

const KionPage = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <img className="movie-banner" src={Banner} alt=""/>
      <InfoSection
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
        title="Дополнительные тарифы"
        tariffs={tariffs}
      />
      <EventsSection />
      <Footer/>
    </>
  )
}

export default KionPage;
