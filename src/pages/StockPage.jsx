import Header from "@/components/Header/Header";
import BannerSection from "../components/sections/BannerSection";
import Footer from "../components/Footer/Footer";

import stock from '@/assets/img/rate-percent.svg';
import Banner from '@/assets/img/banner/stock-mobile.png'

import { useScrollToTop } from "../hooks";
import Image from '@/assets/img/woman-blue.png';
import InfoSection from "../components/sections/InfoSection";

const StockPage = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <BannerSection
        classNames="stock-page"
        title="Выгодное предложение"
        action="Перейти к оплате"
        banner={Banner}
      >
        <p className="body body-3 opacity-10">
          Оплати сразу 3 месяца и получи 4 в подарок!
        </p>
        <img className="stock" src={stock} alt=""/>
      </BannerSection>
      <InfoSection
        title="Оплачивайте интернет выгодно"
        classNames="info-stock"
        description="Проверьте техническую возможность подключения интернета для частного дома прямо на этой странице, оставьте свои данные. Мы свяжемся с вами в ближайшее время"
        withoutButton={true}
        image={Image}
      />
      <Footer/>
    </>
  )
}

export default StockPage;
