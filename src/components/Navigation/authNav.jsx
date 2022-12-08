import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LinkNav } from '../Layout/Layout.styled';

const AuthNav = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="nav" sx={{ flexGrow: 1 }}>
            <LinkNav to="/">Phonebook</LinkNav>
          </Typography>
          <LinkNav to="/signup">Sign Up</LinkNav>
          <LinkNav to="/login">Login</LinkNav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export { AuthNav };
