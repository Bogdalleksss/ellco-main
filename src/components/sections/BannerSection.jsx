import Button from "../UI/Button";
import TitleH1 from "../UI/TitleH1";
import Fade from 'react-reveal/Fade';
import React from "react";
import { Link } from "react-router-dom";
import { useScreen } from "../../hooks/useScreen";

const BannerSection = ({ type = 'default', children, title, action, classNames, banner, date, link }) => {
  const { mediaPoint } = useScreen();

  return (
    <main id="banner" className={classNames}>
      <div className="banner container-full">
        { banner &&
          <>
            {
              type === 'default'
               ? <img className="banner-img" src={ banner } alt=""/>
              :<div className="banner-img__wrapper flex flex-aic flex-jcc">
                  <img className="banner-img" src={ banner } alt=""/>
                </div>
            }
          </> }
        <div className="container column flex-aifs">
          {date && <label className="body body-7 font-color-w zi-2 mb-3 ml-6 pr-2 pl-2 flex flex-aic">{ date }</label> }
          <TitleH1 color="#054FD6">{ title }</TitleH1>

          <div className="banner-content pl-6">
            <Fade bottom delay={200} duration={900}>
              { children }
            </Fade>

            {
              action
              && <Fade bottom delay={ 400 } duration={ 900 }>
                    <a href={ link }>
                      <Button>{ action }</Button>
                    </a>
                  </Fade>
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default BannerSection;
