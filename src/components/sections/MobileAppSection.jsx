import Button from "../UI/Button";

import PhonesMockups from '@/assets/img/phones.png'
import GooglePlayBtn from '@/assets/img/GooglePlay-btn.svg'
import AppStoreBtn from '@/assets/img/AppStore-btn.svg'
import IconArrowRight from "../icons/IconArrowRight";

const MobileAppSection = () => {
  return (
    <section id="mobile-app" className="pt-40 pb-40">
      <div className="container flex-jcsb">
        <div className="section__content fb-2">
          <h2 className="mb-6">
            Мобильное приложение <br/>
            <span className="font-color-yl">«Мой ellсo»</span>
          </h2>
          <p className="body body-9 mb-6 opacity-12 pr-30">Удобный личный кабинет для мобильных устройств. Вы можете управлять счетами и услугами, контролировать расходы, безопасно пополнять баланс или найти ближайший офис на карте</p>
          <div className="buttons-wrapper flex gap-2">
            <img src={GooglePlayBtn} alt=""/>
            <img src={AppStoreBtn} alt=""/>
            <Button type="outline">
              <span>Подробнее</span>
              <IconArrowRight fill="#FFC229" />
            </Button>
          </div>
        </div>
        <img className="mockup" src={PhonesMockups} alt=""/>
      </div>
    </section>
  )
}

export default MobileAppSection;
