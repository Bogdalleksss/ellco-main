const TariffInfoKion = ({ title, available}) => {
  const getImage = (image) => {
    return require(`@/assets/img/available/${image}.svg`);
  }
  return (
    <div className="tariff-card__info tariff-card__kion width-full zi-2">
      <h3 className="mb-4">{ title }</h3>

      {
        available.map(available => (
          <div key={available.id} className="tariff-card__available flex flex-aic mb-3 gap-3">
            <img src={getImage(available.image)} alt=""/>
            <p className="body body-2">{ available.content }</p>
          </div>
        ))
      }
    </div>
  )
}

export default TariffInfoKion;
