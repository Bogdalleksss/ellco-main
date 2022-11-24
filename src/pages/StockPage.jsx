import Header from "@/components/Header/Header";
import BannerSection from "../components/sections/BannerSection";
import Footer from "../components/Footer/Footer";

import stock from '@/assets/img/rate-percent.svg';

import { useFormatDate, useScrollToTop } from "../hooks";
import InfoSection from "../components/sections/InfoSection";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { promotionsFetchOne } from "../store/promotions";
import { getImage } from "../utils";

const StockPage = () => {
  useScrollToTop();
  const dispatch = useDispatch();
  const formatDate = useFormatDate();
  const promo = useSelector(state => state.promotions.item);
  const { id } = useParams()

  useEffect(() => {
    dispatch(promotionsFetchOne(id));
  }, [id])

  return (
    <>
      <Header />
      <BannerSection
        classNames="stock-page"
        title="Выгодное предложение"
        date={formatDate(promo?.createdAt)}
      >
        <p className="body body-3 opacity-10">{promo?.annonce}</p>
        <img className="stock" src={stock} alt=""/>
      </BannerSection>
      <InfoSection
        title={promo?.title}
        classNames="info-stock"
        description={promo?.description}
        withoutButton={true}
        image={getImage(promo?.image)}
      />
      <Footer/>
    </>
  )
}

export default StockPage;
