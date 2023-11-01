import React from 'react';
import Feed from './Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import FeedSeguindo from './Feed/FeedSeguindo';
import HeaderHome from './HeaderHome';

const Home = () => {
  return (
    <section className="container">
      <HeaderHome />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/seguindo" element={<FeedSeguindo />} />
      </Routes>
    </section>
  );
};

export default Home;
