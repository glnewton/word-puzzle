export const SearchBar = (props) => {
  const { handleSearch, handleInput, searchWord } = props;
  return (
    <>
      <div className="searchBar">
        <form className="search-form">
          <label htmlFor="search">Search Word</label>
          <input type="text" value={searchWord} onChange={handleInput} />
          <button onClick={handleSearch} className="search-button">Search</button>
        </form>
      </div>
    </>
  );
};
