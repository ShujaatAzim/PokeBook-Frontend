import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import RegistrationPage from './Pages/RegistrationPage';
import CollectionSharePage from './Pages/CollectionSharePage';
import NavBar from './Components/NavBar';
import NavBarShare from './Components/NavBarShare';

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('trackerCreds'))
  );
  const [set, setSet] = useState('');

  const location = useLocation();

  return (
    <div className='app'>
      <div className='header'>
        {location.pathname.indexOf('collection') > -1 ? (
          <NavBarShare set={set} setSet={setSet} />
        ) : (
          <NavBar user={user} set={set} setUser={setUser} setSet={setSet} />
        )}
      </div>
      <div className='body'>
        {user && user.logged === true ? (
          <Routes>
            <Route
              exact
              path='/'
              element={<HomePage set={set} setSet={setSet} />}
            />
            <Route exact path='/profile' element={<ProfilePage />} />
            <Route
              exact
              path='/register'
              element={<RegistrationPage setUser={setUser} />}
            />
            <Route
              exact
              path='/collection/:id'
              element={<CollectionSharePage set={set} setSet={setSet} />}
            />
            <Route element={<NotFoundPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              exact
              path='/'
              element={<LoginPage setUser={setUser} />}
            />
            <Route
              exact
              path='/login'
              element={<LoginPage setUser={setUser} />}
            />
            <Route
              exact
              path='/register'
              element={<RegistrationPage setUser={setUser} />}
            />
            <Route
              exact
              path='/collection/:id'
              element={<CollectionSharePage set={set} setSet={setSet} />}
            />
            <Route element={<NotFoundPage />} />
          </Routes>
        )}
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default App;
