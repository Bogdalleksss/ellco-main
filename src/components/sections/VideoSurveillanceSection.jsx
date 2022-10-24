import Button from "../UI/Button";

import VideoSurveillanceMockup from '@/assets/img/video-camera.png'

const VideoSurveillanceSection = () => {
  return (
    <section id="video-surveillance" className="pt-46 pb-46">
      <div className="container">
        <div className="fb-3">
          <h2 className="mb-6">Видеонаблюдение</h2>
          <p className="body body-9 mb-6 opacity-12">Удобный личный кабинет для мобильных устройств. Вы можете управлять счетами и услугами, контролировать расходы, безопасно пополнять баланс или найти ближайший офис на карте</p>
          <Button>Узнать больше</Button>
        </div>
      </div>
      <img className="mockup" src={VideoSurveillanceMockup} alt=""/>
    </section>
  )
}

export default VideoSurveillanceSection;
