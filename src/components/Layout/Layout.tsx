import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

interface LayoutProps {
  handleSearch: () => Promise<void>;
}

const Layout: React.FC<LayoutProps> = ({ handleSearch }) => {
  return (
    <div className="wrapper">
      <Header handleSearch={handleSearch} value={''} />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
