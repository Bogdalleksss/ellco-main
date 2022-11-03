import Logo from "../Logo";
import IconClose from "../icons/IconClose";
import HeaderNav from "./HeaderNav";
import IconSearch from "../icons/IconSearch";
import IconProfile from "../icons/IconProfile";
import IconMarkerMap from "../icons/IconMarkerMap";
import { Link } from "react-router-dom";

const HeaderMobileMenu = ({ showMenu, updateShowMenu, updateShowModal }) => {
  const showSearch = (val) => {
    updateShowMenu(false);
    updateShowModal(val)
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
          <a className="body body-8 flex flex-aic" href="#">Для бизнеса</a>
        </div>
        <div className="mobile-menu__nav mt-10">
          <HeaderNav
            closeMobile={() => updateShowMenu(false)}
          />
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
            <div
              className="link flex flex-aic body body-6"
              onClick={() => showSearch(true)}
            >
              <IconMarkerMap fill="#054FD6" />
              <span>Город</span>
            </div>
            {/*<div className="link body body-6">Оплата</div>*/}
            <Link to="/support" onClick={() => updateShowMenu(false)}>
              <div className="link body body-6">Поддержка</div>
            </Link>
            <div className="phone body body-6">+7 (8722) 555-222</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobileMenu;
