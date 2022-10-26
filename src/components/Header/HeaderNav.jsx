import { useState } from "react";
import { v4 } from "uuid";
import IconArrowDown from "../icons/IconArrowDown";

import DropDownLigth from '@/assets/img/button-dropdown.svg'

const navLinks = [
  {
    id: v4(),
    name: 'Интернет',
    link: '#',
  },
  {
    id: v4(),
    name: 'Видеонаблюдение',
    link: '#',
  },
  {
    id: v4(),
    name: 'Телевидение',
    link: '#',
  },
  {
    id: v4(),
    name: 'Телефония',
    link: '#',
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

const HeaderNav = () => {
  const screen = window.innerWidth;
  const isNotMobile = screen > 480;

  console.log(isNotMobile);

  const [nav] = useState(isNotMobile ? navLinks.slice(0, 4) : navLinks);

  return (
    <nav className="header-menu">
      <ul className="flex flex-aic gap-10">
        { nav.map((link) => (
          <a key={link.id} href={link.link}>
            <li>{ link.name }</li>
          </a>
        )) }

        <li className="flex flex-aic">
          {
            screen <= 768 && isNotMobile
              ? <img src={DropDownLigth} alt=""/>
              : <>
                  <span>Еще</span>
                  <IconArrowDown />
                </>
          }
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
