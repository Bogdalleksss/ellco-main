import HeaderNav from "./HeaderNav";

import Logo from "../Logo";
import { isMobile } from "../../utils/constants";
import IconMarkerMap from "../icons/IconMarkerMap";
import IconProfile from "../icons/IconProfile";
import IconSearch from "../icons/IconSearch";
import IconMenuIcon from "../icons/IconMobileMenu";
import IconClose from "../icons/IconClose";
import { useState } from "react";

const Header = ({ mode='default' }) => {
  const [ showMenu, updateShowMenu ] = useState(false);

  return (
    <header className={`header container-full mode-${mode}`}>
      <div className="header-row">
        <div className="container flex-jcsb flex-aic body body-6">
          <div className="flex">
            <div className="logo mr-20">
              <Logo fill={mode === 'default' ? '#2f51d2' : '#FFFFFF'}/>
            </div>

            <ul className="flex gap-6 ">
              <li className="header__link header__link--active">Для меня</li>
              <li className="header__link">Для бизнеса</li>
            </ul>
          </div>
          {
            !isMobile
              ? <div className="top-links flex flex-aic gap-6">
                  <div className="link flex flex-aic">
                    <IconMarkerMap />
                    <span>Город</span>
                  </div>
                  <div className="link">Оплата</div>
                  <div className="link">Поддержка</div>
                  <div className="phone">+7 (8722) 555-222</div>
                </div>
              : <div className="mobile flex flex-1 height-full flex-jcfe flex-aic gap-2">
                  <div className="flex">
                    <IconProfile fill="#054FD6" />
                    <IconSearch fill="#054FD6"/>
                  </div>
                  <div
                    className="mobile__menu flex flex-aic height-full"
                    onClick={() => updateShowMenu(true)}
                  >
                    <IconMenuIcon />
                  </div>
                </div>
          }

        </div>
      </div>
      {
        !isMobile
          ? <div className="header-row">
              <div className="bottom-links container flex-jcsb flex-aic body body-3">
                <HeaderNav/>

                <div className="actions flex flex-aic gap-10">
                  <div className="link flex flex-aic">
                    <IconSearch />
                    <span>Поиск</span>
                  </div>
                  <div className="link flex flex-aic">
                    <IconProfile />
                    <span>Личный кабинет</span>
                  </div>
                </div>
              </div>
            </div>
          : <div className={`mobile-menu ${showMenu ? 'mobile-menu--open' : ''}`}>
            <div className="container column">
              <div className="flex flex-aic flex-jcsb width-full">
            <span className="logo">
              <Logo/>
            </span>
                <span onClick={() => updateShowMenu(false)}>
                <IconClose />
            </span>
              </div>
              <div className="mobile-menu__top flex gap-2 mt-6">
                <a className="body body-8 active flex flex-aic" href="#">Для меня</a>
                <a className="body body-8 flex flex-aic" href="#">Для бизнеса</a>
              </div>
              <div className="mobile-menu__nav mt-10">
                <HeaderNav/>
              </div>
              <div className="mobile-menu__actions mt-8 flex column gap-4">
                <div className="link flex flex-aic">
                  <IconSearch fill="#054FD6" />
                  <span className="body body-3">Поиск</span>
                </div>
                <div className="link flex flex-aic">
                  <IconProfile fill="#054FD6" />
                  <span className="body body-3">Личный кабинет</span>
                </div>
              </div>
              <div className="mobile-menu__links mt-8">
                <div className="top-links flex flex-aifs column gap-4">
                  <div className="link flex flex-aic body body-6">
                    <IconMarkerMap fill="#054FD6" />
                    <span>Город</span>
                  </div>
                  <div className="link body body-6">Оплата</div>
                  <div className="link body body-6">Поддержка</div>
                  <div className="phone body body-6">+7 (8722) 555-222</div>
                </div>
              </div>
            </div>
          </div>
      }
    </header>
  )
}

export default Header;
