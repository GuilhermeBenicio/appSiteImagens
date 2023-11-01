import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import FeedUser from './FeedUser/FeedUser';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<FeedUser />} />
      </Routes>
    </section>
  );
};

export default User;
