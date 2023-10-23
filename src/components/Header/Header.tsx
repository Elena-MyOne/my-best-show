import React from 'react';
import style from './Header.module.scss';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={`${style.body} container`}>
          <div className={style.logo}>
            <MdLocalMovies />
            <span className={style.text}>Shows</span>
          </div>
          <div className={style.search}>
            <input type="text" className={style.input} placeholder="Search show..." />
            <button className={style.button}>
              <BsSearch />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
