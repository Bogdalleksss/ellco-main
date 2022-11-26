import TariffCard from "../UI/Cards/Tariff/TariffCard";
import Tabs from "../UI/Tabs/Tabs";
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';
import IconArrowRight from "../icons/IconArrowRight";
import { useTariffsScroll } from "../../hooks/useTariffsScroll";
import { useEffect } from "react";

const AdditionalTariffsSection = ({ tariffs, title }) => {
  const tariffsScroll = useTariffsScroll();
  const { showRight, showLeft, tariffsRef, checkArrow, toScroll } = tariffsScroll;

  useEffect(() => {
    checkArrow();
  }, [tariffsRef, tariffs]);

  return (
    <section id="tariffs">
      <div className="additional container column">
        <Fade bottom text duration={900}>
          <h2 className="flex gap-3 font-color-bl mb-15">
            <IconStripes fill="#054FD6"/>
            <span className="flex pt-1">{ title }</span>
          </h2>
        </Fade>
      </div>
      <div className="additional tariffs-list container">
        {
          showLeft
            && <div
                  className="button-arrow button-arrow--left"
                  onClick={() => toScroll('left')}
                >
                  <IconArrowRight />
                </div>
        }
        <div
          ref={tariffsRef}
          className="tariffs-list__wrapper o-hidden width-full flex hide-scrollbar gap-4"
          onScroll={() => checkArrow()}
        >
          {
            tariffs.map((tariff, idx) => (
              <Fade key={tariff._id} bottom delay={200 * (idx + 1)} duration={900}>
                <TariffCard
                  key={tariff.id}
                  tariff={tariff}
                />
              </Fade>
            ))
          }
        </div>
        {
          showRight
            && <div
                  className="button-arrow"
                  onClick={() => toScroll()}
                >
                  <IconArrowRight />
                </div>
        }
      </div>
    </section>
  )
}

export default AdditionalTariffsSection;
