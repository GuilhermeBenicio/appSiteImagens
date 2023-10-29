import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header';
import { UserStorage } from './userContext';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <UserStorage>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </UserStorage>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
