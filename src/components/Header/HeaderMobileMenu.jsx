import Logo from "../Logo";
import IconClose from "../icons/IconClose";
import HeaderNav from "./HeaderNav";
import IconSearch from "../icons/IconSearch";
import IconProfile from "../icons/IconProfile";
import IconMarkerMap from "../icons/IconMarkerMap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderMobileMenu = ({ showMenu, updateShowMenu, updateShowModal, updateShowSearch }) => {
  const location = useSelector(state => state.location.location);
  const info = useSelector(state => state.settings.info);
  const showSearch = (val, type = 'location') => {
    updateShowMenu(false);
    if (type === 'location') updateShowModal(val);
    if (type === 'search') updateShowSearch(val)
  }

  return (
    <div className={`mobile-menu ${showMenu ? 'mobile-menu--open' : ''}`}>
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
          <a className="body body-8 flex flex-aic" href="https://business.ellco.ru/">Для бизнеса</a>
        </div>
        <div className="mobile-menu__nav mt-10">
          <HeaderNav
            closeMobile={() => updateShowMenu(false)}
          />
        </div>
        <div className="mobile-menu__actions mt-8 flex column gap-4">
          <div onClick={() => showSearch(true, 'search')} className="link flex flex-aic">
            <IconSearch fill="#054FD6" />
            <span className="body body-3">Поиск</span>
          </div>
          <a href="https://bill.ellco.ru/my/index.xhtml" target="_blank" rel="noreferrer">
            <div className="link flex flex-aic">
              <IconProfile fill="#054FD6" />
              <span className="body body-3">Личный кабинет</span>
            </div>
          </a>
        </div>
        <div className="mobile-menu__links mt-8">
          <div className="top-links flex flex-aifs column gap-4">
            <div
              className="link flex flex-aic body body-6"
              onClick={() => showSearch(true)}
            >
              <IconMarkerMap fill="#054FD6" />
              <span>{ location.title ? location.title : 'Город' }</span>
            </div>
            {/*<div className="link body body-6">Оплата</div>*/}
            <Link to="/support" onClick={() => updateShowMenu(false)}>
              <div className="link body body-6">Поддержка</div>
            </Link>
            <a
              href={`tel:${info?.phone}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="phone body body-6">{ info?.phone }</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobileMenu;
