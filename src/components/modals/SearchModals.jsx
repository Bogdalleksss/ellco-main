import BackButton from "../UI/BackButton";
import TextInput from "../UI/TextInput";
import IconSearch from "../icons/IconSearch";
import IconClose from "../icons/IconClose";
import { v4 } from "uuid";
import SearchMatchCard from "../UI/Cards/SearchMatchCard";
import Fade from 'react-reveal/Fade';
import { useDebounce } from "use-lodash-debounce";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { selectTariff } from "../../store/tariffs";
import { useDispatch } from "react-redux";

const SearchModals = ({ placeholder, close, className, matchies, isShow, onSearch, onSelect, type = 'location' }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, updateSearch] = useState('');
  const searchDebounce = useDebounce(search, 300);

  useEffect(() => {
    if (search) onSearch(search);
  }, [searchDebounce]);

  const getSubtitle = (match) => {
    if (type === 'location') return 'Республика Дагестан'
    if (type === 'pages') {
      switch (match.searchType) {
        case 'tariffs':
          if (['standard', 'game'].includes(match.type)) return 'Интернет';
          if (['kion', 'smotroshka'].includes(match.type)) return 'Телевидение';
          if (['telephony'].includes(match.type)) return 'Телефония';
          break;
        case 'news':
          return 'Новости и акции / Новости'
          break;
        case 'promotion':
          return 'Новости и акции / Акции'
          break;
      }
    }
  }

  const onLink = (match) => {
    close()
    if (type === 'pages') {
      switch (match.searchType) {
        case 'tariffs':
          dispatch(selectTariff(match._id))
          history.push(`/order/${match._id}`);
          break;
        case 'news':
          history.push(`/news/${match._id}`);
          break;
        case 'promotion':
          history.push(`/promotions/${match._id}`);
          break;
      }
      if (type === 'location') {
        onSelect(match);
      }

      updateSearch('');
    }
  }

  return (
    <div id="modal-search" className={className}>
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
              value={search}
              onChange={(val) => updateSearch(val)}
            />
            <div className="modal-search__match-list mt-6 flex column gap-2 width-full">
              {
                search && matchies.map(item => (
                  <SearchMatchCard
                    type={type}
                    key={item._id}
                    title={item.title}
                    subtitle={getSubtitle(item)}
                    onClick={() => onLink(item)}
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
