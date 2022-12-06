import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, LinkNav } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
    <Box sx={{ flexGrow: 0.5 }} width="30%">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="nav" sx={{ flexGrow: 1 }}>
            <LinkNav to="/">Phonebook</LinkNav>
          </Typography>
          <LinkNav to="/signup" >
            Sign Up
          </LinkNav>
          <LinkNav to="/login" >
            Login
          </LinkNav>
        </Toolbar>
      </AppBar>
      <Suspense fullback={null}>
        <Outlet />
      </Suspense>
      </Box>
      </Container>
  );
};

export { Layout };
