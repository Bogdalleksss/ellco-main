import Button from "@/components/UI/Button";
import ESlider from "@/components/UI/Slider/ESlider";

import GooglePlay from '@/assets/img/GooglePlay.svg'
import AppStore from '@/assets/img/AppStore.svg'
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';

const AppBlock = ({ className }) => {
  return (
    <div className={className} style={{ maxWidth: 350 }}>
      <p className="body body-5 font-color-w mb-3">
        Скачайте наше мобильное приложение и получите приятный бонус!
      </p>
      <div className="flex gap-2">
        <img src={GooglePlay} alt=""/>
        <img src={AppStore} alt=""/>
      </div>
    </div>
  )
}

const MainSection = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="main__content fb-2 flex column flex-jcsb">
          <div className="main__wrapper pr-20 pt-8">
            <Fade bottom duration={900}>
              <h1 className="flex font-color-w mb-6">
                <IconStripes />
                <span>eIIco — на связи с будущим</span>
              </h1>
            </Fade>

            <Fade bottom delay={100} duration={900}>
                <p className="main__description body body-1 font-color-w mb-6">
                  Интернет безграничных возможностей <br/>
                  <div className="main__description-selected-text">
                    <span>в каждом уголке Дагестана</span>
                  </div>
                </p>
            </Fade>

            <Fade bottom delay={200} duration={900}>
              <Button>Подключить</Button>
            </Fade>
          </div>

          <Fade bottom delay={300} duration={900}>
            <AppBlock className="main__mobile-app" />
          </Fade>
        </div>
        <div className="main__slider fb-2">
          <Fade duration={2000}>
            <ESlider />
          </Fade>
          <AppBlock className="main__mobile-app hidden" />
        </div>
      </div>
    </section>
  )
}

export default MainSection;
