import DemoImage from '@/assets/img/services-1.png'
import { useSwiperSlide } from "swiper/react";

const ESliderCard = ({ id, title, content, img }) => {
  const swiperSlide = useSwiperSlide();
  const isSmall = !swiperSlide.isActive;

  return (
    <div
      className={`slider-card ${ isSmall ? 'slider-card--small' : '' }`}
      data-id={id}
    >
      { swiperSlide.isActive }
      <img className="mb-4" src={DemoImage} alt=""/>
      {
        !isSmall
          ? <h4 className="font-color-w mb-3">{ title }</h4>
          : <p className="slider-card__title body body-3 font-color-w mb-3">{ title }</p>
      }
      <p className={`body font-color-w ${isSmall ? 'body-7 slider-card__content' : 'body-4'}`}>{ content }</p>
    </div>
  )
}

export default ESliderCard;
