import Button from "../UI/Button";

import IPTv from '@/assets/img/IPTv.png'

const IPTvSection = () => {
  return (
    <section id="tv" className="pt-46 pb-46">
      <div className="container flex-jcfe">
        <div className="fb-2 pr-30">
          <h2 className="font-color-w mb-6">IP Телевидение</h2>
          <p className="body body-9 font-color-w mb-6 opacity-12">Удобный личный кабинет для мобильных устройств. Вы можете управлять счетами и услугами, контролировать расходы, безопасно пополнять баланс или найти ближайший офис на карте</p>
          <Button>Узнать больше</Button>
        </div>
      </div>
      <img className="mockup" src={IPTv} alt=""/>
    </section>
  )
}

export default  IPTvSection;
