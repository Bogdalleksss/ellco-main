const SearchMatchCard = ({ title, subtitle }) => {
  return (
    <div className="modal-search__match-block flex">
      <div className="modal-search__match-block__content column pt-4 pb-4 pr-6 pl-6">
        <h4>{ title }</h4>
        <p className="body body-9 opacity-12 mt-2">{ subtitle }</p>
      </div>
    </div>
  )
}

export default SearchMatchCard;
