import React from 'react';
import style from './Header.module.scss';
import { MdLocalMovies } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

interface HeaderProps {
  value: string;
  handleSearch(): Promise<void>;
}

class Header extends React.Component<HeaderProps, { value: string }> {
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
    const { handleSearch } = this.props;
    localStorage.setItem('TVShowSearch', value);
    handleSearch();
  }

  render() {
    const { value } = this.state;

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
