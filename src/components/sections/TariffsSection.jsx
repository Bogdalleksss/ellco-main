import TariffCard from "../UI/Cards/Tariff/TariffCard";
import Tabs from "../UI/Tabs/Tabs";
import IconStripes from "../icons/IconStripes";
import Fade from 'react-reveal/Fade';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CalculatorSection from "./CalculatorSection";

const tabs = [
  {
    id: 1,
    title: 'Домашний интернет',
    slug: 'standard game',
  },
  {
    id: 2,
    title: 'Видеонаблюдение',
    slug: 'cctv',
  },
  {
    id: 3,
    title: 'Телевидение',
    slug: 'kion smotroshka',
  },
  {
    id: 4,
    title: 'Телефония',
    slug: 'telephony',
  },
]

const TariffsSection = () => {
  const [currentTab, updateCurrentTab] = useState(tabs[0].id || 1);
  const [tariffs, updateTariffs] = useState([]);
  const allTariffs = useSelector(state => state.tariffs.items);

  useEffect(() => {
    updateTariffs(allTariffs.filter(tariff => getTab(currentTab).slug.split(' ').includes(tariff.type)));
  }, [currentTab, allTariffs]);

  const getTab = (id) => tabs.find(tab => tab.id === id);

  return (
    <section id="tariffs">
      <div className="container column">
        <Fade bottom text duration={900}>
          <h2 className="flex gap-3 font-color-bl mb-15">
            <IconStripes fill="#054FD6"/>
            <span className="flex pt-1">Отправьте заявку на подключение уже сейчас</span>
          </h2>
        </Fade>
        <Fade bottom text duration={900}>
          <Tabs
            className="mb-8"
            tabs={tabs}
            value={currentTab}
            onChange={val => updateCurrentTab(val)}
          />
        </Fade>
      </div>
      <div className="tariffs-list container">
        <div className="tariffs-list__wrapper o-hidden width-full flex gap-4 hide-scrollbar">
          {
            getTab(currentTab).slug === 'cctv'
              ? <CalculatorSection />
              : tariffs.map((tariff, idx) => (
                <Fade bottom delay={200 * (idx + 1)} duration={900}>
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

export default TariffsSection;
