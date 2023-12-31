import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import CardItems from './components/CardItems/CardItems';
import { URL } from './models/enums';
import { ShowData } from './models/interfaces';
import { MdReportGmailerrorred } from 'react-icons/md';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

interface AppProps {
  shows: ShowData[];
  isLoading: boolean;
  error: Error | null | unknown;
  currentPage: number;
  itemsPerPage: number;
  isMoreShows: boolean;
  searchQuery: string;
  isShowMoreButtonDisable: boolean;
  isClickedErrorButton: boolean;
}
class App extends React.Component<object, AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      shows: [],
      isLoading: false,
      error: null,
      currentPage: 0,
      itemsPerPage: 20,
      isMoreShows: false,
      searchQuery: '',
      isShowMoreButtonDisable: false,
      isClickedErrorButton: false,
    };

    this.loadShows = this.loadShows.bind(this);
    this.showMoreShows = this.showMoreShows.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.throwError = this.throwError.bind(this);
  }

  async componentDidMount() {
    this.loadShows();
    this.enableButton();
  }

  async loadShows() {
    const { currentPage, isLoading } = this.state;

    if (isLoading) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const response = await fetch(`${URL.SHOWS}?page=${currentPage}`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data: ShowData[] = await response.json();

      this.setState({
        shows: data,
        currentPage: currentPage === 8 ? currentPage - 8 : currentPage + 1,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        shows: [],
        isLoading: false,
        error,
      });
    }
  }

  enableButton() {
    const { shows } = this.state;

    if (shows.length > 20) {
      this.setState({ isShowMoreButtonDisable: true });
    } else {
      this.setState({ isShowMoreButtonDisable: false });
    }
  }

  showMoreShows() {
    this.setState((prevState) => ({
      isMoreShows: !prevState.isMoreShows,
    }));
  }

  getSearchChange() {
    const savedValue = localStorage.getItem('TVShowSearch') || '';
    this.setState({ searchQuery: savedValue });
  }

  async handleSearch() {
    this.getSearchChange();

    const savedValue = localStorage.getItem('TVShowSearch') || '';

    if (savedValue === '') {
      this.loadShows();
      this.enableButton();
      return;
    }

    try {
      // const response = await fetch(`${URL.SEARCH}${searchQuery}`);
      const response = await fetch(`${URL.SEARCH}${savedValue}`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data: ShowData[] = await response.json();

      this.setState({
        shows: data,
        isLoading: false,
        currentPage: 0,
      });
    } catch (error) {
      this.setState({
        shows: [],
        isLoading: false,
        error,
      });
    }

    this.enableButton();
  }

  throwError() {
    this.setState({ isClickedErrorButton: true });
    console.error('Error information: ', 'The Error boundary button was triggered');
  }

  render() {
    const {
      shows,
      isLoading,
      error,
      currentPage,
      itemsPerPage,
      isMoreShows,
      isShowMoreButtonDisable,
      isClickedErrorButton,
    } = this.state;

    const currentPageItems = shows.slice(0, itemsPerPage);

    return (
      <ErrorBoundary isClickedErrorButton={isClickedErrorButton}>
        <div className="wrapper">
          <Header handleSearch={this.handleSearch} value={''} />
          <main className="main">
            <div className="container">
              {isLoading ? (
                <p className={style.loading}>Loading...</p>
              ) : error ? (
                <div className={style.error}>
                  <MdReportGmailerrorred />
                  <span className={style.text}>Error occurred please try later</span>
                </div>
              ) : (
                <>
                  <div className={style.top}>
                    <h1 className="title">TV Shows</h1>
                    {!isLoading && (
                      <div className={style.buttons}>
                        <button
                          className="button"
                          onClick={this.loadShows}
                          disabled={isShowMoreButtonDisable}
                        >
                          {currentPage === 0 ? 'Go back' : 'Next page'}
                        </button>
                        <button className={style.boundary} onClick={this.throwError}>
                          Error Boundary
                        </button>
                      </div>
                    )}
                  </div>

                  {isMoreShows ? <CardItems data={shows} /> : <CardItems data={currentPageItems} />}

                  {!isLoading && (
                    <div className={style.more}>
                      <button
                        className="button"
                        onClick={this.showMoreShows}
                        disabled={isShowMoreButtonDisable}
                      >
                        {isMoreShows ? 'Show less' : 'Show more'}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
