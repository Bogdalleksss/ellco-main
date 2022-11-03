import BackButton from "../UI/BackButton";
import TextInput from "../UI/TextInput";
import IconSearch from "../icons/IconSearch";
import IconClose from "../icons/IconClose";
import { v4 } from "uuid";
import SearchMatchCard from "../UI/Cards/SearchMatchCard";
import Fade from 'react-reveal/Fade';

const match = [
  {
    id: v4(),
    title: 'г. Каспийск',
    subtitle: 'Республика Дагестан',
  },
  {
    id: v4(),
    title: 'г. Кизилюрт',
    subtitle: 'Республика Дагестан',
  },
  {
    id: v4(),
    title: 'г. Кизляр',
    subtitle: 'Республика Дагестан',
  }
]

const SearchModals = ({ placeholder, close, className, isShow }) => {
  return (
    <div id="modal-search" className={className} collapse>
      <div className="modal-search container column">
        <Fade when={isShow} duration={900}>
          <div className="modal-search__wrapper flex column flex-aifs">
            <BackButton
              className="mb-10"
              title="Закрыть"
              icon={<IconClose fill="#FFFFFF" />}
              action={() => close()}
            />
            <TextInput
              placeholder={placeholder}
              prepend={<IconSearch fill="#000" />}
            />
            <div className="modal-search__match-list mt-6 flex column gap-2 width-full">
              {
                match.map(item => (
                  <SearchMatchCard
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))
              }
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default SearchModals;
