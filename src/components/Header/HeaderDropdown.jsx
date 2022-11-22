import React, { useRef, useState } from 'react';
import IconArrowDown from "../icons/IconArrowDown";
import DropDownLight from '@/assets/img/button-dropdown.svg'
import DropDown from '@/assets/img/button-arrow--dark.svg'
import { useScreen } from "../../hooks/useScreen";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../hooks";

const HeaderDropdown = ({ color, links, light = false }) => {
  const { mediaPoint } = useScreen();
  const [showLink, updateShowLinks] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => updateShowLinks(false));

  return (
    <div
      ref={ref}
      className={`nav-dropdown flex flex-aic ${ light ? 'nav-dropdown--light' : '' }`}
    >
      <div
        className="nav-dropdown__button flex flex-aic"
        onClick={() => updateShowLinks(!showLink)}
      >
        {
          mediaPoint <= 768 && mediaPoint > 480
            ? light
              ? <img src={DropDownLight} alt=""/>
              : <img src={DropDown} alt=""/>
            : <>
              <span>Еще</span>
              <IconArrowDown fill={color} />
            </>
        }
      </div>

      {
        showLink
          ? <div className="links flex column flex-aifs gap-1">
              {
                links.map(link => (
                  <Link to={ link.link }>
                    <div className="link-drop">{ link.name }</div>
                  </Link>
                ))
              }
            </div>
          : <></>
      }
    </div>
  );
};

export default HeaderDropdown;
