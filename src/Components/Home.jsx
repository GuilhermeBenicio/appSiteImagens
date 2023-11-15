import React from 'react';
import Feed from './Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import FeedSeguindo from './Feed/FeedSeguindo';
import HeaderHome from './HeaderHome';
import ProtectedRoute from './Helper/ProtectedRoute';

const Home = () => {
  return (
    <section className="container">
      <HeaderHome />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/seguindo"
          element={
            <ProtectedRoute>
              <FeedSeguindo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </section>
  );
};

export default Home;
