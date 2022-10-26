import Button from "../UI/Button";

import IPTv from '@/assets/img/IPTv.png'
import IPTvAdatp from '@/assets/img/IPTv-2.png'
import IconArrowRight from "../icons/IconArrowRight";
import Fade from 'react-reveal/Fade';

const IPTvSection = () => {
  return (
    <section id="tv" className="pt-46 pb-46">
      <div className="container flex-jcfe">
        <div className="section__content fb-2 pr-30">
          <Fade bottoms duration={1500}>
            <h2 className="font-color-w mb-6">IP Телевидение</h2>
          </Fade>
          <Fade bottom delay={100} duration={1500}>
            <p className="body body-9 font-color-w mb-6 opacity-12">Удобный личный кабинет для мобильных устройств. Вы можете управлять счетами и услугами, контролировать расходы, безопасно пополнять баланс или найти ближайший офис на карте</p>
          </Fade>
          <Fade bottom delay={200} duration={1500}>
            <Button type="main button-main--short">
              <span>Узнать больше</span>
              <IconArrowRight fill="#000000" />
            </Button>
          </Fade>
        </div>
        <Fade bottom duration={1500}>
          <img className="adapt" src={IPTvAdatp} alt=""/>
        </Fade>
      </div>
      <Fade bottom duration={1500}>
        <img className="mockup" src={IPTv} alt=""/>
      </Fade>
    </section>
  )
}

export default  IPTvSection;
