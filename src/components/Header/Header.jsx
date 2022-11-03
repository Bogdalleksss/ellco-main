import HeaderNav from "./HeaderNav";
import Logo from "../Logo";
import { isMobile } from "../../utils/constants";
import IconMarkerMap from "../icons/IconMarkerMap";
import IconProfile from "../icons/IconProfile";
import IconSearch from "../icons/IconSearch";
import IconMenuIcon from "../icons/IconMobileMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderMobileMenu from "./HeaderMobileMenu";
import SearchModals from "../modals/SearchModals";



const Header = ({ mode='default' }) => {
  const [ showMenu, updateShowMenu ] = useState(false);
  const [ showLocation, updateShowLocation ] = useState(false);
  const color = mode === 'default' && !showLocation ? '#2f51d2' : '#FFFFFF';

  const updateShowModals = (val, cb) => {
    document.body.style = val ? 'overflow: hidden;' : '';
    cb(val);
  }

  return (
    <header className={`header container-full mode-${!showLocation ? mode : 'light'}`}>
      <div className="header-row zi-5">
        <div className="container flex-jcsb flex-aic body body-6">
          <div className="flex">
            <div className="logo mr-20">
              <Link to="/">
                <Logo fill={color}/>
              </Link>
            </div>

            <ul className="flex gap-6 ">
              <li className="header__link header__link--active">Для меня</li>
              <li className="header__link">Для бизнеса</li>
            </ul>
          </div>
          {
            !isMobile
              ? <div className="top-links flex flex-aic gap-6">
                  <div
                    className="link flex flex-aic"
                    onClick={() => updateShowModals(true, updateShowLocation)}
                  >
                    <IconMarkerMap fill={ color } />
                    <span>Город</span>
                  </div>
                  <Link to="/support">
                    <div className="link">Поддержка</div>
                  </Link>
                  <div className="phone">+7 (8722) 555-222</div>
                </div>
              : <div className="mobile flex flex-1 height-full flex-jcfe flex-aic gap-2">
                  <div className="flex">
                    <IconProfile fill={ color } />
                    <IconSearch fill={ color }/>
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
          ? <div className="header-row zi-5">
              <div className="bottom-links container flex-jcsb flex-aic body body-3">
                <HeaderNav color={color}/>

                <div className="actions flex flex-aic gap-10">
                  <div className="link flex flex-aic">
                    <IconSearch fill={ color } />
                    <span>Поиск</span>
                  </div>
                  <div className="link flex flex-aic">
                    <IconProfile fill={ color }/>
                    <span>Личный кабинет</span>
                  </div>
                </div>
              </div>
            </div>
          : <HeaderMobileMenu
              showMenu={showMenu}
              updateShowMenu={updateShowMenu}
              updateShowModal={(val) => updateShowModals(val, updateShowLocation)}
            />
      }

      {
        <SearchModals
            className={!showLocation ? 'hidden-search' : '' }
            isShow={showLocation}
            placeholder="Ваш город..."
            close={() => updateShowModals(false, updateShowLocation)}
        />
      }
    </header>
  )
}

export default Header;
