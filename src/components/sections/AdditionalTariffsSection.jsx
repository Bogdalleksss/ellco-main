import TariffCard from "../UI/Cards/Tariff/TariffCard";
import Tabs from "../UI/Tabs/Tabs";
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';

const AdditionalTariffsSection = ({ tariffs, title }) => {
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
        <div className="tariffs-list__wrapper o-hidden width-full flex hide-scrollbar gap-4">
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
      </div>
    </section>
  )
}

export default AdditionalTariffsSection;
