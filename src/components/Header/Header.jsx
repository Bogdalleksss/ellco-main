import HeaderNav from "./HeaderNav";

import Logo from '@/assets/img/logo.png'

const Header = () => {
  return (
    <header className="header container-full">
      <div className="header-row">
        <div className="container flex-jcsb flex-aic body body-6">
          <div className="flex">
            <img className="mr-20" src={Logo} alt=""/>

            <ul className="flex gap-6 ">
              <li className="header__link header__link--active">Для меня</li>
              <li className="header__link">Для бизнеса</li>
            </ul>
          </div>

          <div className="flex flex-aic gap-10">
            <div className="link">Город</div>
            <div className="link">Оплата</div>
            <div className="link">Поддержка</div>
            <div className="phone">+7 (8722) 555-222</div>
          </div>
        </div>
      </div>

      <div className="header-row">
        <div className="container flex-jcsb flex-aic body body-3">
          <HeaderNav />

          <div className="flex flex-aic gap-10">
            <div className="link">Поиск</div>
            <div className="link">Личный кабинет</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
