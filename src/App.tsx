import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import CardItems from './components/CardItems/CardItems';
import { URL } from './models/enums';
import { ShowData } from './models/interfaces';
import { MdReportGmailerrorred } from 'react-icons/md';

interface AppProps {
  props: string;
}

interface AppState {
  data: ShowData[] | null;
  loading: boolean;
  error: Error | null | unknown;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(`${URL.SHOWS}?page=0`);

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data = await response.json();

      this.setState({
        data,
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        data: null,
        loading: false,
        error,
      });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            {loading ? (
              <p className={style.loading}>Loading...</p>
            ) : error ? (
              <div className={style.error}>
                <MdReportGmailerrorred />
                <span className={style.text}>Error occurred please try later</span>
              </div>
            ) : (
              <CardItems data={data} />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
