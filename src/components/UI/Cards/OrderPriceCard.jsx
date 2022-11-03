const OrderPriceCard = ({ title, period, price, className }) => {
  return (
    <div className={`price flex-1 pt-4 pb-4 pl-6 pr-6 mb-2 ${ className }`}>
      <h4 className="body body-3 pb-2 mb-2 flex-1 font-color-bld">{ title }</h4>
      <div className="flex flex-jcsb">
        <p className="body body-9 font-color-bld opacity-10">{ period }</p>
        <p className="body body-2 font-color-bld">{ price } ₽</p>
      </div>
    </div>
  )
}

export default OrderPriceCard;
