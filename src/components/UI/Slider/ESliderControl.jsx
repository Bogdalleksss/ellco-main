import { useSwiper } from "swiper/react";
import IconArrowLeft from "@/components/icons/IconArrowLeft";
import IconArrowRight from "@/components/icons/IconArrowRight";
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

const ESliderControl = ({ slides }) => {
  const swiper = useSwiper();
  const [slideIndex, updateSlideIndex] = useState(0);
  const sizeOneDot = 100 / slides.length;
  const sliderWrapper = document.getElementById('slider');

  useEffect(() => {
    setIndex();
  }, [])

  const nextSlide = () => {
    swiper.slideNext();
    setIndex();
  }
  const prevSlide = () => {
    swiper.slidePrev();
    setIndex();
  }

  const setIndex = () => {
    const slide = swiper.slides[swiper.activeIndex].querySelector('.slider-card')
    const id = +slide.dataset.id;
    const currentIndex = slides.findIndex(item => item.id === id);

    updateSlideIndex(currentIndex + 1);
  }


  return (
    ReactDOM.createPortal(
      <div className="slider-control flex flex-aic pl-6 mt-3">
        <div
          className="slider-control__arrow flex flex-aic flex-jcc mr-2"
          onClick={() => prevSlide()}
        >
          <IconArrowLeft />
        </div>
        <div
          className="slider-control__arrow flex flex-aic flex-jcc"
          onClick={() => nextSlide()}
        >
          <IconArrowRight />
        </div>

        <div className="slider-control__progress-bar ml-4">
          <span style={{ width: `${sizeOneDot * slideIndex}%` }} />
        </div>
      </div>,
      sliderWrapper || window.document.body
    )
  )
}

export default ESliderControl
