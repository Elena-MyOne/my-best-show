import React from 'react';
import style from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { ROUTER_PATHS } from '../../models/enums';
import { Link, useNavigate } from 'react-router-dom';
import {
  handleSearch,
  selectShows,
  setIsError,
  setSearchValue,
} from '../../redux/slices/ShowsSlice';
import { AppDispatch } from '../../redux/store';
import { useSearchShowsQuery } from '../../redux/api/apiSlice';

const Header: React.FC = () => {
  const { searchValue } = useSelector(selectShows);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const {
    data: searchShowsData,
    isLoading,
    // isSuccess,
    isError,
    // error,
  } = useSearchShowsQuery(searchValue);
  console.log('searchShowsData: ', searchShowsData);
  console.log('isLoading: ', isLoading);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    dispatch(setSearchValue(target));
  };

  const handleButtonClick = () => {
    localStorage.setItem('TVShowSearch', searchValue);
    searchShowsData && dispatch(handleSearch(searchShowsData));
    isError && dispatch(setIsError(isError));
    navigate(`/${ROUTER_PATHS.SEARCH}?q=${encodeURIComponent(searchValue)}`);
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
