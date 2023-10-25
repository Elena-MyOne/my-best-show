import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import CardItems from './components/CardItems/CardItems';
import { URL } from './models/enums';
import { ShowData } from './models/interfaces';
import { MdReportGmailerrorred } from 'react-icons/md';

interface AppProps {
  shows: ShowData[];
  isLoading: boolean;
  error: Error | null | unknown;
  currentPage: number;
  itemsPerPage: number;
  isMoreShows: boolean;
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
    };

    this.loadShows = this.loadShows.bind(this);
    this.showMoreShows = this.showMoreShows.bind(this);
  }

  async componentDidMount() {
    this.loadShows();
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

  showMoreShows() {
    this.setState((prevState) => ({
      isMoreShows: !prevState.isMoreShows,
    }));
  }

  render() {
    const { shows, isLoading, error, currentPage, itemsPerPage, isMoreShows } = this.state;

    const currentPageItems = shows.slice(0, itemsPerPage);

    return (
      <div className="wrapper">
        <Header />
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
                  <h1 className="title">All Shows</h1>
                  {!isLoading && (
                    <button className="button" onClick={this.loadShows}>
                      {currentPage === 0 ? 'Go back' : 'Next page'}
                    </button>
                  )}
                </div>

                {isMoreShows ? <CardItems data={shows} /> : <CardItems data={currentPageItems} />}

                {!isLoading && (
                  <div className={style.more}>
                    <button className="button" onClick={this.showMoreShows}>
                      {isMoreShows ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
