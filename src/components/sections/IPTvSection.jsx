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
          <Fade bottoms duration={900}>
            <h2 className="font-color-w mb-6">IP-телевидение</h2>
          </Fade>
          <Fade bottom delay={100} duration={900}>
            <p className="body body-9 font-color-w mb-6 opacity-12">
              До 250 каналов, подключение к любому телевизору или гаджету, HD и Full HD качество, интерактивные функции – запись эфира, пауза, перемотка, отложенный просмотр. И каждый месяц новинки мирового кинематографа.
            </p>
          </Fade>
          <Fade bottom delay={200} duration={900}>
            <Button type="main button-main--short" winType="arrow">
              <span>Узнать больше</span>
              <IconArrowRight fill="#000000" />
            </Button>
          </Fade>
        </div>
        <Fade bottom duration={900}>
          <img className="adapt" src={IPTvAdatp} alt=""/>
        </Fade>
      </div>
      <Fade bottom duration={900}>
        <img className="mockup" src={IPTv} alt=""/>
      </Fade>
    </section>
  )
}

export default  IPTvSection;
