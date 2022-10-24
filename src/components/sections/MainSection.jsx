import Button from "@/components/UI/Button";
import ESlider from "@/components/UI/Slider/ESlider";

import GooglePlay from '@/assets/img/GooglePlay.svg'
import AppStore from '@/assets/img/AppStore.svg'

const MainSection = () => {
  return (
    <section id="main">
      <div className="container">
        <div className="fb-2 flex column flex-jcsb">
          <div className="pr-20 pt-8">
            <h1 className="font-color-w mb-6">ellco — на связи с будущим</h1>
            <p className="body body-1 font-color-w mb-6">
              Интернет безграничных возможностей в каждом уголке Дагестана
            </p>
            <Button>Подключить</Button>
          </div>

          <div style={{ maxWidth: 350 }}>
            <p className="body body-5 font-color-w mb-3">
              Скачайте наше мобильное приложение и получите приятный бонус!
            </p>
            <div className="flex gap-2">
              <img src={GooglePlay} alt=""/>
              <img src={AppStore} alt=""/>
            </div>
          </div>
        </div>
        <div className="fb-2">
          <ESlider />
        </div>
      </div>
    </section>
  )
}

export default MainSection;
