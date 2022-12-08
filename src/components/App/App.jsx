import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import  Layout  from 'components/Layout/Layout';
import { useSelector } from 'react-redux';
import { lazy } from 'react';


const Home = lazy(() => import('Pages/Home/Home'));
const Main = lazy(() => import('../Main/Main'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const Registration = lazy(() => import('Pages/Registration/Registration'));
const LogIn = lazy(() => import('Pages/Login/Login'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute'));


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
