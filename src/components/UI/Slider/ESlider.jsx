import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import ESliderCard from "./ESliderCard";
import ESliderControl from "./ESliderControl";

const initSlides = [
  {
    id: 1,
    img: 'internet',
    title: 'Домашний интернет',
    content: ' Интернет безграничных возможностей',
    link: '/rate',
  },
  {
    id: 3,
    img: 'iptv',
    title: 'IP-телевидение',
    content: 'Интерактивное телевидение в форматах HD и Full HD',
    link: '/iptv',
  },
  {
    id: 2,
    img: 'cctv',
    title: 'Видеонаблюдение',
    content: 'Подбор оптимальной конфигурации, монтаж и настройка, обслуживание',
    link: '/cctv',
  },
  {
    id: 4,
    img: 'telephony',
    title: 'IP-телефония',
    content: 'Звонки в любую точку мира по выгодной цене',
    link: '/telephony',
  },
]

const ESlider = () => {
  const [slides] = useState(initSlides)

  return (
    <div id="slider" className="slider">
      <Swiper
        slidesPerView={2}
        loop={true}
        speed={600}
      >
        {
          slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <ESliderCard
                id={slide.id}
                title={slide.title}
                content={slide.content}
                img={slide.img}
                link={slide.link}
              />
            </SwiperSlide>
          ))
        }
        <ESliderControl slides={slides} />
      </Swiper>
    </div>
  )
}

export default ESlider;
