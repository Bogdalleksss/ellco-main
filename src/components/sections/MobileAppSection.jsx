import Button from "../UI/Button";

import PhonesMockups from '@/assets/img/phones.png'
import GooglePlayBtn from '@/assets/img/GooglePlay-btn.svg'
import AppStoreBtn from '@/assets/img/AppStore-btn.svg'
import IconArrowRight from "../icons/IconArrowRight";
import Fade from 'react-reveal/Fade';

const MobileAppSection = () => {
  return (
    <section id="mobile-app" className="pt-40 pb-40">
      <div className="container flex-jcsb">
        <div className="section__content fb-2">
          <Fade bottom duration={900}>
            <h2 className="mb-6">
              Мобильное приложение <br/>
              <span className="font-color-yl">«Мой EIIсo»</span>
            </h2>
          </Fade>
          <Fade bottom delay={100} duration={900}>
            <p className="body body-9 mb-6 opacity-12 pr-30">Удобный личный кабинет для мобильных устройств. Вы можете управлять счетами и услугами, контролировать расходы, безопасно пополнять баланс или найти ближайший офис на карте</p>
          </Fade>

          <div className="buttons-wrapper flex gap-2">
            <Fade bottom delay={300} duration={900}>
              <img src={GooglePlayBtn} alt=""/>
            </Fade>

            <Fade bottom delay={500} duration={900}>
              <img src={AppStoreBtn} alt=""/>
            </Fade>

            <Fade bottom delay={700} duration={900}>
              <Button type="outline">
              <span>Подробнее</span>
              <IconArrowRight fill="#FFC229" />
            </Button></Fade>
          </div>
        </div>
        <Fade bottom delay={500} duration={1000}>
          <img className="mockup" src={PhonesMockups} alt=""/>
        </Fade>
      </div>
    </section>
  )
}

export default MobileAppSection;
