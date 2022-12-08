import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import { AuthNav } from 'components/Navigation/authNav';
import { UserNav } from 'components/Navigation/userNav';
import { useSelector } from 'react-redux';
import { useUserGetQuery } from 'redux/auth/authApi';
import { Container } from './Layout.styled';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const token = useSelector(state => state.auth.token);
    useUserGetQuery({}, { skip: !token });

  return (
    <Container>
    <Box sx={{ flexGrow: 0.5 }} width="30%">
        {isLoggedIn ? <UserNav /> : <AuthNav />}
        <Suspense fullback={null}>
        <Outlet />
      </Suspense>
      </Box>
      </Container>
  );
};

export { Layout };
