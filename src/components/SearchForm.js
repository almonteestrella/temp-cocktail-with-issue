import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  // keep the focus right after the page renders
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
