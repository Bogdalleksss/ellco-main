import DemoImage from '@/assets/img/services-1.png'
import { useSwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const ESliderCard = ({ id, title, content, img, link }) => {
  const swiperSlide = useSwiperSlide();
  const isSmall = !swiperSlide.isActive;

  const image = require(`@/assets/img/slider/${img}.png`)

  return (
    <Link
      to={link}
      className={`slider-card ${ isSmall ? 'slider-card--small' : '' }`}
      data-id={id}
    >
      { swiperSlide.isActive }
      <img className="mb-4" src={image} alt=""/>
      {
        !isSmall
          ? <h4 className="font-color-w mb-3">{ title }</h4>
          : <p className="slider-card__title body body-3 font-color-w mb-3">{ title }</p>
      }
      <p className={`body font-color-w ${isSmall ? 'body-7 slider-card__content' : 'body-4'}`}>{ content }</p>
    </Link>
  )
}

export default ESliderCard;
