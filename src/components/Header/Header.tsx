import React, { useContext } from 'react';
import style from './Header.module.scss';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { ROUTER_PATHS } from '../../models/enums';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';

const Header: React.FC = () => {
  const { handleSearch } = useContext(AppContext);

  const [value, setValue] = React.useState<string>('');

  React.useEffect(() => {
    const savedValue = localStorage.getItem('TVShowSearch') || '';
    setValue(savedValue);
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;
    setValue(target);
  };

  const handleButtonClick = () => {
    localStorage.setItem('TVShowSearch', value);
    if (handleSearch) {
      handleSearch();
    }
  };

  const handleSearchForm = (e: React.FormEvent) => {
    e.preventDefault();
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
            value={value}
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
