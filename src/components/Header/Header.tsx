import React, { useContext } from 'react';
import style from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { ROUTER_PATHS } from '../../models/enums';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import { selectSearch, setSearchValue } from '../../redux/slices/SearchSlice';

const Header: React.FC = () => {
  const { handleSearch } = useContext(AppContext);

  const { searchValue } = useSelector(selectSearch);
  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    dispatch(setSearchValue(target));
  };

  const handleButtonClick = () => {
    localStorage.setItem('TVShowSearch', searchValue);
    handleSearch && handleSearch();
  };

  const handleSearchForm = (event: React.FormEvent) => {
    event.preventDefault();
    handleButtonClick();
  };

  return (
    <header className={style.header}>
      <div className={`${style.body} container`}>
        <Link to={ROUTER_PATHS.MAIN} className={style.logo}>
          <MdLocalMovies />
          <span className={style.text}>Shows</span>
        </Link>
        <form className={style.search} onSubmit={handleSearchForm} data-testid="search-form">
          <input
            type="text"
            className={style.input}
            placeholder="Search show..."
            onChange={handleChange}
            value={searchValue}
          />
          <button className={style.button} onClick={handleButtonClick}>
            <BsSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
