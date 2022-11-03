import IconCheckMark from "../../../icons/IconCheckMark";
import IconSpeed from "../../../icons/IconSpeed";
import IconPC from "../../../icons/IconPC";

const TariffInfo = ({ title, speed, channels, availables, isGame}) => {
  return (
    <div className="tariff-card__info width-full zi-2">
      <h3 className="mb-4">{ title }</h3>

      <div className="tariff-card__advantages">
        <div className="flex flex-aic gap-2">
          <IconSpeed fill={isGame ? '#FFFFFF' : '#054FD6'} />
          <p className="tariff-card__advantages__title body body-2">{ speed } Мбит/с</p>
        </div>
        <p className="tariff-card__advantages__content body body-7 opacity-10">скорость интернета</p>
      </div>

      <div className="tariff-card__advantages mb-6">
        <div className="tariff-card__advantages__title flex flex-aic gap-2">
          <IconPC fill={isGame ? '#FFFFFF' : '#054FD6'} />
          <p className="tariff-card__advantages__content body body-2">{ channels } каналов</p>
        </div>
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

export default TariffInfo;
