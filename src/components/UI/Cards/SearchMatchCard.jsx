const SearchMatchCard = ({ title, subtitle, onClick, type }) => {
  return (
    <div
      className="modal-search__match-block flex"
      onClick={() => onClick()}
    >
      <div className="modal-search__match-block__content column pt-4 pb-4 pr-6 pl-6">
        {type === 'pages' && <p className="body body-9 opacity-12 mt-2 mb-1">{ subtitle }</p> }
        <h4>{ title }</h4>
        {type === 'location' && <p className="body body-9 opacity-12 mt-2">{ subtitle }</p> }
      </div>
    </div>
  )
}

export default SearchMatchCard;
