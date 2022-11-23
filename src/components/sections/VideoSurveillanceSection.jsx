import Button from "../UI/Button";

import VideoSurveillanceMockup from '@/assets/img/video-camera.png'
import VideoSurveillanceMockupAdapt from '@/assets/img/video-camera-2.png'
import IconArrowRight from "../icons/IconArrowRight";
import Fade from 'react-reveal/Fade';

const VideoSurveillanceSection = () => {
  return (
    <section id="video-surveillance" className="pt-46 pb-46">
      <div className="container">
        <div className="section__content fb-3">
          <Fade bottom duration={900}>
            <h2 className="mb-6">Видеонаблюдение</h2>
          </Fade>
          <Fade bottom delay={100} duration={900}>
            <p className="body body-9 mb-6 opacity-12">
              Круглосуточный мониторинг объектов и помещений – ваша жизнь и ваше имущество под надёжной защитой. Установка оборудования в нужном вам месте, доступ в прямом эфире из любой точки мира, хранение материалов на облачных серверах до 30 суток, удобный личный кабинет.
            </p>
          </Fade>
          <Fade bottom delay={200} duration={900}>
            <Button type="main button-main--short">
              <span>Узнать больше</span>
              <IconArrowRight fill="#000000" />
            </Button>
          </Fade>
        </div>
        <Fade bottom duration={900}>
          <img className="adapt" src={VideoSurveillanceMockupAdapt} alt=""/>
        </Fade>
      </div>
      <Fade bottom duration={900}>
        <img className="mockup" src={VideoSurveillanceMockup} alt=""/>
      </Fade>
    </section>
  )
}

export default VideoSurveillanceSection;
