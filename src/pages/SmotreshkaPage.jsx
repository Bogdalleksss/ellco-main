import Header from "@/components/Header/Header";
import EventsSection from "../components/sections/EventsSection";
import BannerSection from "../components/sections/BannerSection";
import InfoSection from "../components/sections/InfoSection";

import Banner from '@/assets/img/banner/smotreshka.png';

import Image from '@/assets/img/smotreshka.png';
import AdvantagesSection from "../components/sections/AdvantagesSection";
import AdditionalTariffsSection from "../components/sections/AdditionalTariffsSection";
import { useScrollToTop } from "../hooks";
import Footer from "../components/Footer/Footer";

const checklistInfo = [
  {
    id: 1,
    content: 'Не платите лишнего — Разные телеканалы на 3х экранах, в рамках одной абонентской платы',
  },
  {
    id: 2,
    content: 'Планируйте свой досуг — Электронная программа телепередач',
  },
  {
    id: 3,
    content: 'Управляйте эфиром — Перемотка, пауза и продолжение просмотра на любых устройствах',
  }
]
const advantagesList = [
  {
    id: 1,
    icon: 'wifi-2',
    color: '',
    title: 'Беспроводной способ подключения',
    description: 'Подходит любой Интернет',
  },
  {
    id: 2,
    icon: 'town',
    color: '',
    title: 'Пользуйтесь где угодно',
    description: 'Дома, на работе или в дороге',
  },
  {
    id: 3,
    icon: 'calendar',
    color: '',
    title: 'Смотрите в записи',
    description: 'Архив программы передач каждого канала в записи до 7 дней',
  },
]

const tariffs = [
  {
    id: 2,
    type: 'SMOTR',
    title: 'Стандарт',
    channels: 255,
    price: 199,
    availables: [
      {
        id: 1,
        title: 'Количество HD каналов: 69'
      },
      {
        id: 2,
        title: 'Количество 4К каналов: 1'
      },
      {
        id: 3,
        title: 'Количество устройств: 5'
      },
    ]
  },
  {
    id: 3,
    type: 'SMOTR',
    title: 'Оптима',
    movie: 'PREMIER',
    channels: 318,
    price: 449,
    availables: [
      {
        id: 1,
        title: 'Количество HD каналов: 100'
      },
      {
        id: 2,
        title: 'Количество 4К каналов: 8'
      },
      {
        id: 3,
        title: 'Количество устройств: 5'
      },
    ]
  },
  {
    id: 4,
    type: 'SMOTR',
    title: 'Эксклюзив',
    movie: 'PREMIER, more.tv',
    channels: 334,
    price: 749,
    availables: [
      {
        id: 1,
        title: 'Количество HD каналов: 115'
      },
      {
        id: 2,
        title: 'Количество 4К каналов: 8'
      },
      {
        id: 3,
        title: 'Количество устройств: 5'
      },
    ]
  },
  {
    id: 5,
    type: 'SMOTR',
    title: 'Эксклюзив + Кино',
    movie: 'PREMIER, more.tv, START, AMEDIATEKA',
    channels: 334,
    price: 999,
    availables: [
      {
        id: 1,
        title: 'Количество HD каналов: 115'
      },
      {
        id: 2,
        title: 'Количество 4К каналов: 8'
      },
      {
        id: 3,
        title: 'Количество устройств: 5'
      },
    ]
  }
]

const SmotreshkaPage = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <img className="movie-banner" src={Banner} alt=""/>
      <InfoSection
        classNames="movie-info"
        title="Смотрешка"
        description="Смотрите ТВ на компьютере или ноутбуке: наслаждайтесь высоким качеством вещания и удобными функциями по управлению эфиром."
        list={checklistInfo}
        action="Подключить"
        image={Image}
      />
      <AdvantagesSection
        list={advantagesList}
        classNames="movie-sm"
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

export default SmotreshkaPage;
