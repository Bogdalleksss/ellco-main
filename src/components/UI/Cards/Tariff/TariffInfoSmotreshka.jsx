import IconCheckMark from "../../../icons/IconCheckMark";
import IconSpeed from "../../../icons/IconSpeed";
import IconMovie from '@/assets/img/movie-icon.svg'
import IconPC from "../../../icons/IconPC";

const TariffInfoSmotreshka = ({ title, channels, movie, availables }) => {
  return (
    <div className="tariff-card__info tariff-card__smotreshka width-full zi-2">
      <h3 className="mb-4">{ title }</h3>

      <div className="mb-6">
        <div className="tariff-card__advantages">
          <div className="tariff-card__advantages__title flex flex-aic gap-2">
            <IconPC />
            <p className="tariff-card__advantages__content body body-2">{ channels } каналов</p>
          </div>
        </div>


        { movie ? <div className="tariff-card__advantages mb-6">
          <div className="tariff-card__advantages__title flex flex-aic gap-2">
            <img src={ IconMovie } alt=""/>
            <p className="tariff-card__advantages__content body body-2">{ movie }</p>
          </div>
        </div> : <></> }
      </div>

      {
        availables.map(available => (
          <div key={available.id} className="tariff-card__available flex flex-aic mb-3 gap-3">
            <IconCheckMark/>
            <p className="body body-6 opacity-10">{ available.title }</p>
          </div>
        ))
      }
    </div>
  )
}

export default TariffInfoSmotreshka;
