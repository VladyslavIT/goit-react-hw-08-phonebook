import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useUserGetQuery, useUserLogoutMutation } from 'redux/auth/authApi';
import { LinkNav } from '../Layout/Layout.styled';
import { UserContact, UserName, OutButton } from './userNav.styled';
import { BiUserCircle } from 'react-icons/bi';

const UserNav = () => {
  const { data } = useUserGetQuery();
  const [logOutUser] = useUserLogoutMutation();

  const handleLogOut = () => {
    logOutUser();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="nav" sx={{ flexGrow: 1 }}>
            <LinkNav to="/">Phonebook</LinkNav>
            <UserContact to="/contacts">Contacts</UserContact>
          </Typography>
          <UserName>
            <BiUserCircle className="icon" />
            {data && data.name}
          </UserName>
          <OutButton onClick={handleLogOut}>Log Out</OutButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export { UserNav };
