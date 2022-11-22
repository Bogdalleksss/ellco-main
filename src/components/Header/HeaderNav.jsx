import { useState } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import { useScreen } from "../../hooks/useScreen";

const navLinks = [
  {
    id: v4(),
    name: 'Интернет',
    link: '/rate',
  },
  {
    id: v4(),
    name: 'Видеонаблюдение',
    link: '/videosurveillance',
  },
  {
    id: v4(),
    name: 'Телевидение',
    link: '/iptv',
  },
  {
    id: v4(),
    name: 'Телефония',
    link: '/telephony',
  },
  {
    id: v4(),
    name: 'KION',
    link: '/kion',
  },
  {
    id: v4(),
    name: 'Смотрешка',
    link: '/smotreshka',
  },
]

const HeaderNav = ({ color='#FFFFFF', closeMobile }) => {
  const { mediaPoint } = useScreen();

  const [nav] = useState(mediaPoint > 480 ? navLinks.slice(0, 4) : navLinks);

  return (
    <nav className="header-menu">
      <ul className="flex flex-aic gap-10">
        { nav.map((link) => (
            <li key={link.id} onClick={() => closeMobile()}>
              <Link to={link.link}>{ link.name }</Link>
            </li>
        )) }

        <li className="flex flex-aic">
          <HeaderDropdown
            color={color}
            links={navLinks.slice(4, navLinks.length)}
            light={color === '#FFFFFF'}
          />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
