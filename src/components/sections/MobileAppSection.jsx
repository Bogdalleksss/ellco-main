import Button from "../UI/Button";

import PhonesMockups from '@/assets/img/phones.png'

const MobileAppSection = () => {
  return (
    <section id="mobile-app" className="pt-40 pb-40">
      <div className="container flex-jcsb">
        <div className="fb-2">
          <h2 className="mb-6">
            Мобильное приложение <br/>
            <span className="font-color-yl">«Мой ellсo»</span>
          </h2>
          <p className="body body-9 mb-6 opacity-12 pr-30">Удобный личный кабинет для мобильных устройств. Вы можете управлять счетами и услугами, контролировать расходы, безопасно пополнять баланс или найти ближайший офис на карте</p>
          <div className="flex gap-2">
            <Button>Google Play</Button>
            <Button>AppStore</Button>
            <Button type="outline">Подробнее</Button>
          </div>
        </div>
        <img className="mockup" src={PhonesMockups} alt=""/>
      </div>
    </section>
  )
}

export default MobileAppSection;
