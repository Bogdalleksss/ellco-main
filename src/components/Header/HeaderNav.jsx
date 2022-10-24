import { useState } from "react";
import { v4 } from "uuid";

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
]

const HeaderNav = () => {
  const [nav] = useState(navLinks);

  return (
    <nav className="header-menu">
      <ul className="flex flex-aic gap-10">
        { nav.map((link) => (
          <a key={link.id} href={link.link}>
            <li>{ link.name }</li>
          </a>
        )) }
      </ul>
    </nav>
  )
}

export default HeaderNav
