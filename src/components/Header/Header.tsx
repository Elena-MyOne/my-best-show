import React from 'react';
import style from './Header.module.scss';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

interface HeaderProps {
  value: string;
}

class Header extends React.Component<object, HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      value: props.value || '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    const savedValue = localStorage.getItem('TVShowSearch') || '';
    this.setState({ value: savedValue });
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.currentTarget.value;
    this.setState({ value: target });
  }

  handleButtonClick() {
    const { value } = this.state;
    localStorage.setItem('TVShowSearch', value);
    console.log('click');
  }

  render() {
    const { value } = this.state;

    console.log(value);

    return (
      <header className={style.header}>
        <div className={`${style.body} container`}>
          <div className={style.logo}>
            <MdLocalMovies />
            <span className={style.text}>Shows</span>
          </div>
          <div className={style.search}>
            <input
              type="text"
              className={style.input}
              placeholder="Search show..."
              onChange={this.handleChange}
              value={value}
            />
            <button className={style.button} onClick={this.handleButtonClick}>
              <BsSearch />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
