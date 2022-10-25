import Button from "@/components/UI/Button";
import ESlider from "@/components/UI/Slider/ESlider";

import GooglePlay from '@/assets/img/GooglePlay.svg'
import AppStore from '@/assets/img/AppStore.svg'

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
            <h1 className="font-color-w mb-6">ellco — на связи с будущим</h1>
            <p className="main__description body body-1 font-color-w mb-6">
              Интернет безграничных возможностей в каждом уголке Дагестана
            </p>
            <Button>Подключить</Button>
          </div>

          <AppBlock className="main__mobile-app" />
        </div>
        <div className="main__slider fb-2">
          <ESlider />
          <AppBlock className="main__mobile-app hidden" />
        </div>
      </div>
    </section>
  )
}

export default MainSection;
