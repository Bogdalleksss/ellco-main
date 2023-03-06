import HeaderNav from "./HeaderNav";
import Logo from "../Logo";
import { isMobile } from "../../utils/constants";
import IconMarkerMap from "../icons/IconMarkerMap";
import IconProfile from "../icons/IconProfile";
import IconSearch from "../icons/IconSearch";
import IconMenuIcon from "../icons/IconMobileMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderMobileMenu from "./HeaderMobileMenu";
import SearchModals from "../modals/SearchModals";
import { useDispatch, useSelector } from "react-redux";
import { searchLocation, setLocation } from "../../store/location";
import { searchPages } from "../../store/search";
import { useLocation } from "react-router";

const Header = ({ mode='default' }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [showMenu, updateShowMenu] = useState(false);
  const [showLocation, updateShowLocation] = useState(false);
  const [showSearch, updateShowSearch] = useState(false);
  const color = mode === 'default' && !showLocation && !showSearch ? '#2f51d2' : '#FFFFFF';

  const location = useSelector(state => state.location.location);
  const locationMatchies = useSelector(state => state.location.locations);
  const searchMatchies = useSelector(state => state.search.results);
  const info = useSelector(state => state.settings.info);

  useEffect(() => {
    if (showSearch) updateShowLocation(false);
  }, [showSearch]);

  useEffect(() => {
    if (showLocation) updateShowSearch(false);
  }, [showLocation]);

  useEffect(() => {
    document.body.style = '';
  }, [pathname])

  const selectCity = (data) => {
    dispatch(setLocation(data));
    updateShowModals(false, updateShowLocation);
  }

  const updateShowModals = (val, cb) => {
    document.body.style = val ? 'overflow: hidden;' : '';
    cb(val);
  }

  const onSearchLocation = (q) => dispatch(searchLocation(q));
  const onSearchPages = (q) => dispatch(searchPages(q));

  return (
    <header className={`header container-full mode-${!showLocation && !showSearch ? mode : 'light'}`}>
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
                <li className="header__link">
                  <a
                    className="no-mt"
                    href="https://business.ellco.ru/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Для бизнеса
                  </a>
                </li>
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
                    <span>{ location.title ? location.title : 'Город' }</span>
                  </div>
                  <Link to="/support">
                    <div className="link">Поддержка</div>
                  </Link>
                  <a
                    href={`tel:${info?.phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="phone">{ info?.phone }</div>
                  </a>
                </div>
              : <div className="mobile flex flex-1 height-full flex-jcfe flex-aic gap-2">
                  <div className="flex">
                    <div
                      className="link flex flex-aic"
                      onClick={() => updateShowModals(true, updateShowLocation)}
                    >
                      <IconMarkerMap fill={ color } />
                    </div>
                    <a
                      href="https://bill.ellco.ru/my/index.xhtml"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        marginTop: '0 !important',
                        display: 'inline',
                        height: '30px'
                      }}
                    >
                      <IconProfile fill={ color } />
                    </a>
                    <div
                      onClick={() => updateShowModals(true, updateShowSearch)}
                      style={{
                        display: 'inline',
                        height: '30px'
                      }}
                    >
                      <IconSearch fill={ color }/>
                    </div>
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
                  <div onClick={() => updateShowModals(true, updateShowSearch)} className="link flex flex-aic">
                    <IconSearch fill={ color } />
                    <span>Поиск</span>
                  </div>
                  <a className="no-mt" href="https://bill.ellco.ru/my/index.xhtml" target="_blank" rel="noreferrer">
                    <div className="link flex flex-aic">
                      <IconProfile fill={ color }/>
                      <span>Личный кабинет</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          : <HeaderMobileMenu
              showMenu={showMenu}
              updateShowMenu={updateShowMenu}
              updateShowModal={(val) => updateShowModals(val, updateShowLocation)}
              updateShowSearch={(val) => updateShowModals(val, updateShowSearch)}
            />
      }

      <SearchModals
          className={!showLocation ? 'hidden-search' : '' }
          isShow={showLocation}
          placeholder="Ваш город..."
          close={() => updateShowModals(false, updateShowLocation)}
          matchies={locationMatchies}
          onSearch={(q) => onSearchLocation(q)}
          onSelect={(val) => selectCity(val)}
      />
      <SearchModals
        className={ `search-page ${!showSearch ? 'hidden-search' : ''}` }
        isShow={showSearch}
        type="pages"
        placeholder="Поиск"
        close={() => updateShowModals(false, updateShowSearch)}
        matchies={searchMatchies}
        onSearch={(q) => onSearchPages(q)}
        onSelect={(val) => selectCity(val)}
      />
    </header>
  )
}

export default Header;
