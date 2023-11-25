import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Best Show</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            <p>main</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
