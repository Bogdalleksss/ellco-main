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
import { useSelector } from "react-redux";

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

const SmotreshkaPage = () => {
  useScrollToTop();
  const tariffs = useSelector(state => state.tariffs.items.filter(tariff => ['smotroshka'].includes(tariff.type)));

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
        title="Тарифы"
        tariffs={tariffs}
      />
      <EventsSection />
      <Footer/>
    </>
  )
}

export default SmotreshkaPage;
