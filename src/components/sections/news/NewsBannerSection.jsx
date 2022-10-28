import TitleH1 from "../../UI/TitleH1";
import Button from "../../UI/Button";

import Banner from '@/assets/img/rate-percent.svg'
import { useScreen } from "../../../hooks/screen";

const NewsBannerSection = () => {
  const { mediaPoint } = useScreen();
  return (
    <section id="news-banner">
      <div className="news-banner container column flex-aifs flex-jcc pl-20">
        <div className="img">
          <img className="zi-1" src={Banner} alt=""/>
          {
            mediaPoint < 768
              ? <label className="body body-7 font-color-w zi-2 mb-3 ml-6 pr-2 pl-2 flex flex-aic">с 5 по 12 сентября</label>
              : <></>
          }
        </div>
        {
          mediaPoint >= 768
            ? <label className="body body-7 font-color-w zi-2 mb-3 ml-6 pr-2 pl-2 flex flex-aic">с 5 по 12 сентября</label>
            : <></>
        }
        <TitleH1 className="zi-2 mb-2">Выгодное предложение</TitleH1>
        <p className="body body-9 zi-2 mb-6 ml-6 opacity-10">Оплати сразу 3 месяца и получи 4 в подарок!</p>
        <Button className="zi-2 ml-6">Подробнее</Button>
      </div>
    </section>
  )
}

export default NewsBannerSection;
