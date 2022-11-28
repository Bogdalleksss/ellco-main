import MTS from '@/assets/img/available/mts.svg'
import KION from '@/assets/img/available/kion.svg'

const TariffInfoKion = ({ title, kion, mts}) => {

  return (
    <div className="tariff-card__info tariff-card__kion width-full zi-2">
      <h3 className="mb-4">{ title }</h3>

      {
        kion
        && <div className="tariff-card__available flex flex-aic mb-3 gap-3">
            <img className="mb-1" src={KION} alt=""/>
            <p className="body body-2">{ kion }</p>
          </div>
      }
      {
        !!mts.trim()
        && <div className="tariff-card__available flex flex-aic mb-3 gap-3">
            <img className="mb-1" src={MTS} alt=""/>
            <p className="body body-2">{ mts }</p>
          </div>
      }
    </div>
  )
}

export default TariffInfoKion;
