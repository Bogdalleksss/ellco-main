import { useRef, useState } from "react";

export const useTariffsScroll = () => {
  const [showRight, updateShowRight] = useState(false);
  const [showLeft, updateShowLeft] = useState(false);
  const tariffsRef = useRef();

  const checkArrow = () => {
    const { scrollWidth, offsetWidth, scrollLeft } = tariffsRef.current;
    const scrollRight = offsetWidth + scrollLeft;

    if (scrollLeft > 0) updateShowLeft(true)
    else updateShowLeft(false)

    if (scrollWidth > offsetWidth && scrollRight < scrollWidth) updateShowRight(true)
    else updateShowRight(false)
  }

  const toScroll = (type = 'right') => {
    const { scrollLeft, offsetWidth } = tariffsRef.current;
    switch (type) {
      case 'right':
        tariffsRef.current.scroll({
          top: 0,
          left: scrollLeft + 500,
          behavior: 'smooth'
        });
        break;
      case 'left':
        tariffsRef.current.scroll({
          top: 0,
          left: scrollLeft - 500,
          behavior: 'smooth'
        });
        break;
    }
  }
  return {
    showRight,
    showLeft,
    tariffsRef,
    checkArrow,
    toScroll
  }
}
