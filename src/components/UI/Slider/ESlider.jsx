import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import ESliderCard from "./ESliderCard";
import ESliderControl from "./ESliderControl";

const initSlides = [
  {
    id: 1,
    img: 'slide-1',
    title: 'Домашний интернет — Технологии общения. Онлайн',
    content: 'IPTV до 250 каналов',
  },
  {
    id: 2,
    img: 'slide-2',
    title: 'Видеонаблюдение',
    content: 'Подбор оптимальной конфигурации, монтаж и настройка, обслуживание',
  },
  {
    id: 3,
    img: 'slide-2',
    title: 'Видеонаблюдение',
    content: 'Подбор оптимальной конфигурации, монтаж и настройка, обслуживание',
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
