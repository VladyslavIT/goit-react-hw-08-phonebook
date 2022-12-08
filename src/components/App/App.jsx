import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import { Registration } from 'Pages/Registration/Registration';
import { LogIn } from 'Pages/Login/Login';
import { Home } from 'Pages/Home/Home';
import { useSelector } from 'react-redux';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/" element={<RestrictedRoute restricted />}>
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    )
  );
};

export { App };
