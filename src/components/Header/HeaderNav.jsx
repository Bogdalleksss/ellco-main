import { useState } from "react";
import { v4 } from "uuid";
import IconArrowDown from "../icons/IconArrowDown";

import DropDownLight from '@/assets/img/button-dropdown.svg'
import { Link } from "react-router-dom";

const navLinks = [
  {
    id: v4(),
    name: 'Интернет',
    link: '/rate',
  },
  {
    id: v4(),
    name: 'Видеонаблюдение',
    link: '#',
  },
  {
    id: v4(),
    name: 'Телевидение',
    link: '/iptv',
  },
  {
    id: v4(),
    name: 'Телефония',
    link: '/telephonia',
  },
  {
    id: v4(),
    name: 'Оборудование',
    link: '#',
  },
  {
    id: v4(),
    name: 'Настройки роутера',
    link: '#',
  },
  {
    id: v4(),
    name: 'Памятка абоненту',
    link: '#',
  },
]

const HeaderNav = ({ color='#FFFFFF' }) => {
  const screen = window.innerWidth;
  const isNotMobile = screen > 480;

  console.log(isNotMobile);

  const [nav] = useState(isNotMobile ? navLinks.slice(0, 4) : navLinks);

  return (
    <nav className="header-menu">
      <ul className="flex flex-aic gap-10">
        { nav.map((link) => (
            <li key={link.id}>
              <Link to={link.link}>{ link.name }</Link>
            </li>
        )) }

        <li className="flex flex-aic">
          {
            screen <= 768 && isNotMobile
              ? <img src={DropDownLight} alt=""/>
              : <>
                  <span>Еще</span>
                  <IconArrowDown fill={color} />
                </>
          }
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
