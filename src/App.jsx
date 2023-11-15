import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header';
import { UserStorage } from './userContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <UserStorage>
            <Header />
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </UserStorage>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
