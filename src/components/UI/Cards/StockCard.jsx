import React from 'react';
import Banner from '@/assets/img/rate-percent.svg';
import TitleH1 from "../TitleH1";
import Button from "../Button";
import { useFormatDate } from "../../../hooks";
import { Link } from "react-router-dom";

const Label = ({ text }) => <label className="body body-7 font-color-w zi-2 mb-3 ml-6 pr-2 pl-2 flex flex-aic">{ text }</label>

const StockCard = ({ type = 'default', post }) => {
  const formatDate = useFormatDate();
  const isSmall = type === 'small';
  const { _id, title, annonce, createdAt } = post;

  return (
    <Link to={`/stocks/post/${_id}`} relative="path">
      <div className={`stock-card flex column flex-aifs pl-20 ${ type } ${ !isSmall && 'flex-jcc' }`}>
        <div className="img">
          <img className="zi-1" src={Banner} alt=""/>
          { isSmall && <Label text={formatDate(createdAt)} /> }
        </div>
        { !isSmall && <Label text="с 5 по 12 сентября" /> }
        <TitleH1 className="zi-2 mb-2">{ title }</TitleH1>
        <p className={`body body-9 zi-2 ml-6 opacity-10 ${ !isSmall && 'mb-6' }`}>{ annonce }</p>
        { !isSmall && <Button className="zi-2 ml-6">Подробнее</Button>}
      </div>
    </Link>
  );
};

export default StockCard;
