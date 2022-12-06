import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import { Registration } from 'Pages/Registration/Registration';
import { LogIn } from 'Pages/Login/Login';
import { Contact } from 'components/Contacts/Contacts';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          ></Route>
          {/* <Route path="/" element={<RestrictedRoute restricted />}> */}
            <Route path="/signup" element={<Registration />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
