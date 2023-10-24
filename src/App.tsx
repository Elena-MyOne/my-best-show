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
}
class App extends React.Component<object, AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      shows: [],
      isLoading: false,
      error: null,
      currentPage: 0,
      itemsPerPage: 25,
    };

    this.loadShows = this.loadShows.bind(this);
  }

  async componentDidMount() {
    this.loadShows();
  }

  async loadShows() {
    const { currentPage, itemsPerPage, isLoading } = this.state;

    if (isLoading) {
      return;
    }

    this.setState({ isLoading: true });

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    try {
      const response = await fetch(`${URL.SHOWS}?page=${currentPage}`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data: ShowData[] = await response.json();
      const pageData = data.slice(startIndex, endIndex);

      this.setState({
        shows: data.concat(pageData),
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

  render() {
    const { shows, isLoading, error, currentPage, itemsPerPage } = this.state;

    console.log(shows);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPageItems = shows.slice(startIndex, endIndex);

    console.log(currentPageItems);

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
                  <h1 className={style.title}>TV Shows</h1>
                  {!isLoading && (
                    <button className="button" onClick={this.loadShows}>
                      {currentPage === 0 ? 'Go back' : 'Sow more'}
                    </button>
                  )}
                </div>
                <CardItems data={currentPageItems} />
              </>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
