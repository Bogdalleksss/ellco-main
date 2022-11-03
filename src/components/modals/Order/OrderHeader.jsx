import BackButton from "../../UI/BackButton";
import IconStripes from "../../icons/IconStripes";

const OrderHeader = () => {
  return (
    <>
      <BackButton className="mb-8" />
      <h5 className="flex gap-3 font-color-bl mb-15">
        <IconStripes fill="#054FD6"/>
        <span className="flex flex-1 pt-1">Оформление заказа</span>
      </h5>
    </>
  )
}

export default OrderHeader
