import React from 'react';
import './App.scss';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="main">Main</main>
      </div>
    );
  }
}

export default App;
